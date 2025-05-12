"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-wide">MyApp</h1>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-200 transition">Home</Link>
          <Link href="/users/1" className="hover:text-blue-200 transition">User 1</Link>
          <Link href="/users/2" className="hover:text-blue-200 transition">User 2</Link>
          <Link href="/users/3" className="hover:text-blue-200 transition">User 3</Link>
        </div>
      </div>
    </nav>
  );
}
