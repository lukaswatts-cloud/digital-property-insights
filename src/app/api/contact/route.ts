import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Email Provider Types
 */
type EmailProvider = 'sendgrid' | 'resend' | 'smtp';

/**
 * Contact Form Request Body
 */
interface ContactFormRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
}

/**
 * Email Configuration
 */
interface EmailConfig {
  provider: EmailProvider;
  sendgridApiKey?: string;
  resendApiKey?: string;
  smtpHost?: string;
  smtpPort?: number;
  smtpUser?: string;
  smtpPassword?: string;
  fromEmail: string;
  toEmail: string;
}

/**
 * Validation errors
 */
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * Email sending errors
 */
class EmailError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EmailError';
  }
}

/**
 * Validate contact form input
 */
function validateContactForm(data: unknown): ContactFormRequest {
  if (typeof data !== 'object' || data === null) {
    throw new ValidationError('Invalid request body');
  }

  const { name, email, subject, message, phone, company } = data as Record<
    string,
    unknown
  >;

  // Validate required fields
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    throw new ValidationError('Name is required and must be a non-empty string');
  }

  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    throw new ValidationError('Valid email address is required');
  }

  if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
    throw new ValidationError('Subject is required and must be a non-empty string');
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    throw new ValidationError('Message is required and must be a non-empty string');
  }

  // Validate field lengths
  if (name.length > 100) {
    throw new ValidationError('Name must be less than 100 characters');
  }

  if (subject.length > 200) {
    throw new ValidationError('Subject must be less than 200 characters');
  }

  if (message.length > 5000) {
    throw new ValidationError('Message must be less than 5000 characters');
  }

  // Optional field validation
  if (phone && (typeof phone !== 'string' || !isValidPhone(phone))) {
    throw new ValidationError('Invalid phone number format');
  }

  if (company && (typeof company !== 'string' || company.length > 150)) {
    throw new ValidationError('Company name must be less than 150 characters');
  }

  return {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim(),
    phone: phone ? (phone as string).trim() : undefined,
    company: company ? (company as string).trim() : undefined,
  };
}

/**
 * Validate email address format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

/**
 * Validate phone number (basic international format)
 */
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Get email configuration from environment variables
 */
function getEmailConfig(): EmailConfig {
  const provider = (process.env.EMAIL_PROVIDER || 'smtp') as EmailProvider;

  if (!['sendgrid', 'resend', 'smtp'].includes(provider)) {
    throw new EmailError(
      `Invalid email provider: ${provider}. Must be one of: sendgrid, resend, smtp`
    );
  }

  const config: EmailConfig = {
    provider,
    fromEmail:
      process.env.EMAIL_FROM || process.env.SMTP_FROM || 'noreply@example.com',
    toEmail: process.env.EMAIL_TO || process.env.CONTACT_EMAIL || '',
  };

  if (!config.toEmail) {
    throw new EmailError('EMAIL_TO or CONTACT_EMAIL environment variable is required');
  }

  if (provider === 'sendgrid') {
    config.sendgridApiKey = process.env.SENDGRID_API_KEY;
    if (!config.sendgridApiKey) {
      throw new EmailError('SENDGRID_API_KEY environment variable is required');
    }
  } else if (provider === 'resend') {
    config.resendApiKey = process.env.RESEND_API_KEY;
    if (!config.resendApiKey) {
      throw new EmailError('RESEND_API_KEY environment variable is required');
    }
  } else if (provider === 'smtp') {
    config.smtpHost = process.env.SMTP_HOST;
    config.smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    config.smtpUser = process.env.SMTP_USER;
    config.smtpPassword = process.env.SMTP_PASSWORD;

    if (!config.smtpHost || !config.smtpUser || !config.smtpPassword) {
      throw new EmailError(
        'SMTP_HOST, SMTP_USER, and SMTP_PASSWORD environment variables are required'
      );
    }
  }

  return config;
}

/**
 * Send email via SendGrid
 */
async function sendViaSendGrid(
  config: EmailConfig,
  data: ContactFormRequest
): Promise<void> {
  if (!config.sendgridApiKey) {
    throw new EmailError('SendGrid API key not configured');
  }

  const emailBody = formatEmailBody(data);

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.sendgridApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: config.toEmail }],
            reply_to: { email: data.email },
          },
        ],
        from: { email: config.fromEmail },
        subject: `New Contact Form Submission: ${data.subject}`,
        content: [
          {
            type: 'text/html',
            value: emailBody,
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new EmailError(`SendGrid API error: ${response.status} - ${error}`);
    }
  } catch (error) {
    if (error instanceof EmailError) {
      throw error;
    }
    throw new EmailError(
      `Failed to send email via SendGrid: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

/**
 * Send email via Resend
 */
async function sendViaResend(
  config: EmailConfig,
  data: ContactFormRequest
): Promise<void> {
  if (!config.resendApiKey) {
    throw new EmailError('Resend API key not configured');
  }

  const emailBody = formatEmailBody(data);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: config.fromEmail,
        to: config.toEmail,
        replyTo: data.email,
        subject: `New Contact Form Submission: ${data.subject}`,
        html: emailBody,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new EmailError(`Resend API error: ${response.status} - ${JSON.stringify(error)}`);
    }
  } catch (error) {
    if (error instanceof EmailError) {
      throw error;
    }
    throw new EmailError(
      `Failed to send email via Resend: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

/**
 * Send email via SMTP
 */
async function sendViaSMTP(
  config: EmailConfig,
  data: ContactFormRequest
): Promise<void> {
  if (!config.smtpHost || !config.smtpUser || !config.smtpPassword) {
    throw new EmailError('SMTP configuration is incomplete');
  }

  const emailBody = formatEmailBody(data);

  try {
    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: config.smtpPort,
      secure: config.smtpPort === 465,
      auth: {
        user: config.smtpUser,
        pass: config.smtpPassword,
      },
    });

    await transporter.sendMail({
      from: config.fromEmail,
      to: config.toEmail,
      replyTo: data.email,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: emailBody,
      text: formatEmailBodyText(data),
    });

    await transporter.close();
  } catch (error) {
    throw new EmailError(
      `Failed to send email via SMTP: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

/**
 * Format email body as HTML
 */
function formatEmailBody(data: ContactFormRequest): string {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #555; margin-bottom: 5px; }
        .field-value { background-color: #fafafa; padding: 10px; border-left: 3px solid #007bff; }
        .message { background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Form Submission</h2>
        </div>
        
        <div class="field">
            <div class="field-label">Name:</div>
            <div class="field-value">${escapeHtml(data.name)}</div>
        </div>
        
        <div class="field">
            <div class="field-label">Email:</div>
            <div class="field-value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
        </div>
        
        ${data.phone ? `
        <div class="field">
            <div class="field-label">Phone:</div>
            <div class="field-value">${escapeHtml(data.phone)}</div>
        </div>
        ` : ''}
        
        ${data.company ? `
        <div class="field">
            <div class="field-label">Company:</div>
            <div class="field-value">${escapeHtml(data.company)}</div>
        </div>
        ` : ''}
        
        <div class="field">
            <div class="field-label">Subject:</div>
            <div class="field-value">${escapeHtml(data.subject)}</div>
        </div>
        
        <div class="field">
            <div class="field-label">Message:</div>
            <div class="message">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
        </div>
        
        <div class="footer">
            <p>This email was sent from the contact form at ${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>
  `;
}

/**
 * Format email body as plain text
 */
function formatEmailBodyText(data: ContactFormRequest): string {
  let text = `New Contact Form Submission\n\n`;
  text += `Name: ${data.name}\n`;
  text += `Email: ${data.email}\n`;
  if (data.phone) text += `Phone: ${data.phone}\n`;
  if (data.company) text += `Company: ${data.company}\n`;
  text += `Subject: ${data.subject}\n\n`;
  text += `Message:\n${data.message}\n\n`;
  text += `Sent at: ${new Date().toLocaleString()}`;
  return text;
}

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * Handle POST requests
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let data: unknown;
    try {
      data = await request.json();
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Validate contact form data
    let validatedData: ContactFormRequest;
    try {
      validatedData = validateContactForm(data);
    } catch (error) {
      return NextResponse.json(
        {
          error:
            error instanceof ValidationError ? error.message : 'Validation failed',
        },
        { status: 400 }
      );
    }

    // Get email configuration
    let config: EmailConfig;
    try {
      config = getEmailConfig();
    } catch (error) {
      console.error('Email configuration error:', error);
      return NextResponse.json(
        {
          error: 'Email service is not properly configured',
        },
        { status: 500 }
      );
    }

    // Send email based on provider
    try {
      switch (config.provider) {
        case 'sendgrid':
          await sendViaSendGrid(config, validatedData);
          break;
        case 'resend':
          await sendViaResend(config, validatedData);
          break;
        case 'smtp':
          await sendViaSMTP(config, validatedData);
          break;
        default:
          throw new EmailError(`Unknown email provider: ${config.provider}`);
      }
    } catch (error) {
      console.error('Email sending error:', error);
      return NextResponse.json(
        {
          error:
            error instanceof EmailError
              ? error.message
              : 'Failed to send email',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unexpected error in contact route:', error);
    return NextResponse.json(
      {
        error: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}

/**
 * Handle OPTIONS requests (CORS preflight)
 */
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(null, { status: 200 });
}

/**
 * Reject other HTTP methods
 */
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to submit contact form.' },
    { status: 405 }
  );
}
