"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SOSButton from "../../components/SOSButton";
import Guidelines from "../../components/Guidelines";

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Token is missing, redirect to login page
      router.push("/");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = async () => {
    // Clear token from localStorage
    localStorage.removeItem("token");

    // Clear token from cookies
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";

    // Redirect to home page
    router.push("/");
  };

  if (!isAuthenticated) {
    // Optionally render a loading state or nothing if not authenticated
    return <p>Redirecting...</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <SOSButton />
      <Guidelines />
      <button
        onClick={handleLogout}
        className="bg-blue-500 text-white p-2 rounded-md mt-4"
      >
        Logout
      </button>
    </div>
  );
}
