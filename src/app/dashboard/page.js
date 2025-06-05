'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin');
    }
  }, [status, router]);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  if (status === 'loading') {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div>
      <header className="header">
        <h1>Dashboard</h1>
        <nav className="nav">
          <button onClick={handleSignOut} className="btn btn-secondary">
            Sign Out
          </button>
        </nav>
      </header>

      <div className="form-container">
        <h2 className="text-center mb-4">Welcome to your Dashboard</h2>
        
        <div className="mb-4">
          <strong>Email:</strong> {session?.user?.email}
        </div>
        
        {session?.user?.name && (
          <div className="mb-4">
            <strong>Name:</strong> {session.user.name}
          </div>
        )}
        
        <p className="mt-4">
          You are now logged in to your account. This is your protected dashboard page.
        </p>
      </div>
    </div>
  );
} 