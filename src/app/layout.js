import './globals.css';
import { AuthProvider } from './providers';

export const metadata = {
  title: 'Next.js Auth App',
  description: 'A simple Next.js app with authentication',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
