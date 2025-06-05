import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="page-title">Welcome to Next.js Auth App</h1>
      <p className="mb-4">A simple authentication system with Next.js and PostgreSQL</p>
      
      <div className="mt-4">
        <Link href="/signin">
          <button className="btn btn-primary mr-2">Sign In</button>
        </Link>
        <span style={{ margin: '0 10px' }}></span>
        <Link href="/signup">
          <button className="btn btn-secondary">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
