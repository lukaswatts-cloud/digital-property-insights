# Digital Property Insights

A Next.js application for property insights powered by AI and modern web technologies.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase account
- Google Gemini API key

### Environment Setup

1. **Copy the environment template:**
   ```bash
   cp .env.example .env.local
   ```

2. **Configure your environment variables:**
   - Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Get your Firebase configuration from your [Firebase Console](https://console.firebase.google.com)
   - Fill in all values in `.env.local`

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:9002](http://localhost:9002) to view the application.

### Building for Production

Before deploying, ensure your code passes all checks:

```bash
# Run TypeScript type checking
npm run typecheck

# Run ESLint
npm run lint

# Build for production
npm run build
```

**Note:** Build errors are NOT ignored. All TypeScript and ESLint errors must be resolved before deployment.

## Security

This project follows strict security best practices:
- Type-safe API routes with input validation
- No build errors or linting violations allowed in production
- Secure environment variable management
- Restricted image remote patterns

See [docs/SECURITY.md](docs/SECURITY.md) for detailed security guidelines and best practices.

## Deployment

### Firebase App Hosting

This project is configured for deployment via Firebase App Hosting.

#### Deploy Process

1.  **Push Your Code to GitHub:** Commit and push your changes to the main branch
2.  **Automatic Deployment:** Firebase App Hosting automatically deploys on push

#### Monitor Deployments

Monitor deployment progress at: [Firebase App Hosting Console](https://console.firebase.google.com/project/digital-property-insights/hosting/backends)

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── api/         # API routes
│   │   └── contact/ # Contact form endpoint
│   └── ...
├── components/       # React components
├── lib/             # Utilities and validators
└── ai/              # AI integration (Genkit)
```

## Available Scripts

- `npm run dev` - Start development server on port 9002
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler check
- `npm run genkit:dev` - Start Genkit AI development server
- `npm run genkit:watch` - Start Genkit in watch mode

## Contributing

When contributing to this project:
1. Ensure all tests pass
2. Run `npm run typecheck` and fix any TypeScript errors
3. Run `npm run lint` and fix any linting issues
4. Follow the security guidelines in [docs/SECURITY.md](docs/SECURITY.md)

## License

Private - All rights reserved

