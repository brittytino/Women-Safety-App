"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "react-feather";
import Link from "next/link"; // Import Link for navigation

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok) {
        setSuccess(data.message);
        setError("");
        localStorage.setItem("token", data.token);
        console.log("Redirecting to dashboard...");
        router.push("/dashboard");
      } else {
        setError(data.message);
        setSuccess("");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center text-gray-800"
      style={{
        backgroundImage: "url('/bg2.jpeg')", // Background image
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-6">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
          style={{
            backgroundImage: "url('/bg8.png')", // Background image for form
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm text-black py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm text-black py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <EyeOff className="text-gray-600 mt-8" size={20} />
              ) : (
                <Eye className="text-gray-600 mt-8" size={20} />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white p-3 rounded-md w-full hover:bg-pink-600 transition-colors duration-300"
          >
            Login
          </button>
          <div className="mt-6">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-pink-600 font-bold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </form>

        {/* Register Section */}
      </div>
    </div>
  );
}
