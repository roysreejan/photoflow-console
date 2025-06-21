# PhotoFlow Console

PhotoFlow is a full-stack social media application built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to share photos, connect with others, and interact through likes, comments, and real-time updates. Designed with a responsive UI and scalable backend, PhotoFlow delivers a smooth and engaging social networking experience.

## Features

- User authentication (signup, login, logout)
- Profile management (edit profile, upload avatar)
- Explore and search for users and posts
- Create, edit, and delete posts with image uploads
- Like, comment, and save posts
- Responsive UI with dark mode support
- Secure API integration with PhotoFlow Core backend
- Error handling and form validation

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS (or your CSS framework)
- **State Management**: Redux Toolkit or Context API
- **API Communication**: Axios or Fetch API
- **Authentication**: JWT (via backend), HTTP-only cookies
- **Image Uploads**: Cloudinary
- **Testing**: Jest, React Testing Library
- **Deployment**: Vercel

## Folder Structure

```
photoflow-console/
├── HOC/                  # Higher-order components (e.g., ClientProvider)
├── public/               # Static assets (images, favicon, etc.)
├── src/
│   ├── app/              # Next.js app directory (pages, layouts, routing)
│   ├── components/       # Reusable UI and feature components
│   ├── lib/              # Utility functions and helpers
├── store/                # Redux slices, store configuration, and state management
├── .gitignore                # Git ignore file
├── README.md                 # Project documentation
├── components.json           # Component metadata
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package-lock.json         # Dependency lock file
├── package.json              # Project metadata and dependencies
├── postcss.config.mjs        # PostCSS configuration
├── server.ts                 # Custom server entry point
├── tsconfig.json             # TypeScript configuration
└── types.d.ts                # TypeScript type definitions
```

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com). The `vercel.json` file ensures that all routes are rewritten to `index.html` for a single-page application.
The live project is available at: `https://photoflow-console.vercel.app/`

To deploy:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy the project:
   ```bash
   vercel
   ```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- Access to PhotoFlow Core backend API
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/roysreejan/photoflow-console
   cd photoflow-console
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env` to `.env.local` and fill in your credentials.

4. **Run the development server:**
   ```sh
   npm run dev
   ```

   The app will run on `http://localhost:3000` by default.

## Environment Variables

See `.env.example` for all required environment variables:

- `NEXT_PUBLIC_BACKEND_API`

## License

ISC

## Author

Sreejan