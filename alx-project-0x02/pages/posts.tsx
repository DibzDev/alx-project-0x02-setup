import Header from '../components/layout/Header';

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">Posts Page</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to the Posts page!
          </p>
          <p className="text-gray-600">
            This page will eventually display a list of posts fetched from an API.
            For now, it demonstrates our navigation system working across all pages.
          </p>
          <div className="mt-6 p-4 bg-blue-50 rounded-md">
            <p className="text-blue-700">
              <strong>Navigation Test:</strong> Use the header links to navigate between:
              Index, Home, About, and this Posts page. The active page is highlighted in the navigation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}