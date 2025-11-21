import Header from '../components/layout/Header';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-600 mb-6">Home Page</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700">
            Welcome to the Home page! This is a separate page from the index page.
          </p>
          <p className="mt-4 text-gray-600">
            You navigated here using the Header component links.
          </p>
        </div>
      </main>
    </div>
  );
}