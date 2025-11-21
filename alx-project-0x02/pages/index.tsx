import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Welcome to Our Next.js Project!
          </h1>
          <p className="text-lg text-gray-600">
            This is the beginning of our amazing journey with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </main>
    </div>
  );
}