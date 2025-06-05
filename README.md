# Next.js Authentication App

A simple Next.js application with email/password authentication, PostgreSQL database, and CSS styling.

## Features

- User registration and login with email/password
- Protected routes with middleware
- Dashboard showing user information
- PostgreSQL database integration
- Custom CSS styling

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

## Setup

1. Install dependencies:

```bash
npm install
```

2. Set up your PostgreSQL database:

Create a PostgreSQL database and update the `.env.local` file with your database connection string.

3. Set up the database schema:

Run the SQL commands in `src/lib/schema.sql` in your PostgreSQL database.

4. Configure environment variables:

Update the values in `.env.local`:
- `NEXTAUTH_SECRET`: A random string for session encryption
- `DATABASE_URL`: Your PostgreSQL connection string

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app`: Next.js application routes and components
- `/src/app/api`: API routes for authentication and registration
- `/src/lib`: Utility functions and database configuration
- `/public`: Static assets

## Authentication Flow

1. User registers via `/signup` page
2. User logs in via `/signin` page
3. NextAuth.js handles authentication and session management
4. Protected routes are secured via middleware 