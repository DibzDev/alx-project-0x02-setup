import { GetStaticProps } from 'next';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { type ApiUser } from '../interfaces';

interface UsersPageProps {
  users: ApiUser[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-indigo-600 mb-2">Users Page</h1>
        <p className="text-gray-600 mb-8">
          Displaying users fetched from JSONPlaceholder API using getStaticProps
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>

        <div className="mt-8 bg-purple-50 p-4 rounded-lg">
          <p className="text-purple-700 text-sm">
            <strong>API Info:</strong> Data fetched from{' '}
            <a 
              href="https://jsonplaceholder.typicode.com/users" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-purple-900"
            >
              JSONPlaceholder Users API
            </a>
            {' '}using getStaticProps
          </p>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    const users = await response.json();
    
    // Format the users data to match our interface
    const formattedUsers = users.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      address: {
        street: user.address.street,
        city: user.address.city,
        zipcode: user.address.zipcode,
      },
    }));

    return {
      props: {
        users: formattedUsers,
      },
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    
    return {
      props: {
        users: [],
      },
    };
  }
};