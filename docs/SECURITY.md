# Security Best Practices

This document outlines security best practices and guidelines for the Digital Property Insights project.

## Environment Variables

### Required Variables

All required environment variables are documented in `.env.example`. **Never commit actual environment variable values to the repository.**

Key environment variables include:
- `GEMINI_API_KEY` - Google Gemini AI API key for AI features
- `NEXT_PUBLIC_FIREBASE_*` - Firebase configuration values

### Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your actual API keys and configuration values

3. Ensure `.env.local` is in `.gitignore` (already configured)

## API Security

### Input Validation

All API endpoints use Zod schemas for input validation:
- Validate all user input on the server side
- Never trust client-side validation alone
- Use strict type checking with TypeScript
- Sanitize data before processing

### Error Handling

API routes follow these practices:
- Return appropriate HTTP status codes (400, 401, 403, 404, 500)
- Never expose sensitive error details to clients
- Log errors server-side for debugging
- Provide user-friendly error messages

### Rate Limiting

**Future Implementation**: Consider adding rate limiting to prevent abuse:
- Use middleware like `@upstash/ratelimit` or `express-rate-limit`
- Implement per-IP or per-user rate limits
- Add CAPTCHA for sensitive forms

## Build Configuration

### TypeScript and ESLint

The project is configured with **strict build checks enabled**:
- `typescript.ignoreBuildErrors` is **disabled** (no type errors allowed in production)
- `eslint.ignoreDuringBuilds` is **disabled** (no linting violations allowed in production)

Always run these before committing:
```bash
npm run typecheck  # Check for TypeScript errors
npm run lint       # Check for ESLint violations
npm run build      # Verify production build works
```

## Image Security

External images are restricted to specific patterns:
- `placehold.co` - Only `/600x400/**` paths
- `images.unsplash.com` - Only `/photo-*` paths
- `picsum.photos` - Only `/200/**` paths
- `i.ibb.co` and `storage.googleapis.com` - Restricted to project assets

This prevents abuse and unauthorized image loading.

## Contact Form Security

The contact form (`/api/contact`) implements:
- Server-side validation with Zod
- Input sanitization
- Error handling without exposing internal details
- Structured logging for monitoring

### Future Enhancements

Consider implementing:
1. **Email Service Integration**: Use SendGrid, Mailgun, or similar
2. **Database Storage**: Store submissions in Firestore or PostgreSQL
3. **Honeypot Fields**: Add hidden fields to prevent bot submissions
4. **CAPTCHA**: Add reCAPTCHA for additional bot protection
5. **Rate Limiting**: Limit submissions per IP/user

## Dependency Security

### Regular Updates

- Review and update dependencies regularly
- Check for known vulnerabilities using `npm audit`
- Keep Next.js, React, and other critical packages up to date

### Third-Party Libraries

- Vet all third-party libraries before adding
- Prefer well-maintained packages with active communities
- Review package permissions and data access

## Firebase Security Rules

If using Firebase (Firestore, Storage, etc.), ensure:
- Proper authentication is required
- Security rules restrict data access appropriately
- Never use broad `allow read, write: if true` rules in production

## Secrets Management

### Do Not Commit Secrets

- Never commit API keys, passwords, or tokens
- Use environment variables for all secrets
- Rotate compromised keys immediately

### Secure Storage

For production deployments:
- Use Firebase App Hosting's secret management
- Or use services like AWS Secrets Manager, Google Secret Manager
- Never store secrets in code or config files

## Reporting Security Issues

If you discover a security vulnerability, please:
1. **Do not** open a public GitHub issue
2. Email the maintainer directly (check repository settings for contact)
3. Include details about the vulnerability and potential impact
4. Allow reasonable time for a fix before public disclosure

## Security Checklist for New Features

Before merging new features:
- [ ] Input validation implemented with Zod or similar
- [ ] Error handling does not expose sensitive information
- [ ] TypeScript types are properly defined
- [ ] No hardcoded secrets or credentials
- [ ] Build passes without ignoring errors
- [ ] Dependencies are up to date and audited
- [ ] API routes have proper HTTP status codes
- [ ] User data is handled securely

## Resources

- [Next.js Security Best Practices](https://nextjs.org/docs/pages/building-your-application/configuring/security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Zod Documentation](https://zod.dev/)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)
