import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Welcome to the User Directory</h1>

      <div className="max-w-md mx-auto space-y-4">
        {[1, 2, 3].map((id) => (
          <Link
            key={id}
            href={`/users/${id}`}
            className="block bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition p-4 text-blue-600 hover:text-blue-800"
          >
            View User {id}
          </Link>
        ))}
      </div>
    </main>
  );
}
