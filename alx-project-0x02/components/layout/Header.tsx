import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path ? 'text-blue-200 font-semibold' : 'hover:text-blue-200 transition-colors';
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              My Next.js App
            </Link>
          </div>
          <div className="space-x-6">
            <Link href="/" className={isActive('/')}>
              Index
            </Link>
            <Link href="/home" className={isActive('/home')}>
              Home
            </Link>
            <Link href="/about" className={isActive('/about')}>
              About
            </Link>
            <Link href="/posts" className={isActive('/posts')}>
              Posts
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}