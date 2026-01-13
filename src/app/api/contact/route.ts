import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validators';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Log the contact form submission
    // In production, you would:
    // - Store in a database (Firestore, PostgreSQL, etc.)
    // - Send an email notification
    // - Add to a CRM system
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      data: validatedData,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Message received successfully. We will get back to you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.errors.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Handle other errors
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Return 405 for non-POST requests
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}
