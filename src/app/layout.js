import './globals.css';
import { AuthProvider } from './providers';

export const metadata = {
  title: 'Next.js Auth App',
  description: 'A simple Next.js app with authentication',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          <div className="container">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
