"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function User() {
  const params = useParams();
  const id = String((params as { id: string }).id);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || isNaN(Number(id))) {
      setError("Invalid user ID.");
      setLoading(false);
      return;
    }

    async function fetchUser() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error("User not found.");
        const data = await response.json();
        setUser(data);
      } catch (error: any) {
        setError(error.message || "Failed to fetch user.");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  if (loading)
    return <p className="text-center text-blue-600 text-lg py-8">Loading...</p>;
  if (error)
    return <p className="text-center text-red-600 text-lg py-8">Error: {error}</p>;
  if (!user)
    return <p className="text-center text-gray-500 text-lg py-8">User not found.</p>;

  return (
    <div className="max-w-md mx-auto mt-12 bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">
        User Details
      </h1>
      <div className="space-y-4 text-gray-800">
        <p>
          <span className="font-medium text-gray-600">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-medium text-gray-600">Username:</span> {user.username}
        </p>
        <p>
          <span className="font-medium text-gray-600">Email:</span> {user.email}
        </p>
      </div>
    </div>
  );
}
