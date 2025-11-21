import { type UserProps } from '../../interfaces';

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-blue-600 text-sm">{email}</p>
        </div>
      </div>
      
      <div className="border-t border-gray-100 pt-4">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Address</h4>
        <div className="text-gray-600 text-sm">
          <p>{address.street}</p>
          <p>{address.city}, {address.zipcode}</p>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
          User
        </span>
      </div>
    </div>
  );
}