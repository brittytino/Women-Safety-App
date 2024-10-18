"use client";

export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center text-white p-6 shadow-md"
      style={{
        backgroundImage: "url('/bg3.jpeg')",
        backgroundSize: "cover", // Ensures the image covers the entire element
        backgroundPosition: "center center", // Centers the background image
        backgroundRepeat: "no-repeat", // Prevents repeating the background image
      }}
    >
      <div className="container mx-auto text-center space-y-4">
        <div className="flex justify-center space-x-6">
          <a href="/privacy" className="hover:underline text-gray-400">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline text-gray-400">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline text-gray-400">
            Contact Us
          </a>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.897v-2.89h2.54V9.413c0-2.507 1.493-3.89 3.775-3.89 1.094 0 2.236.195 2.236.195v2.452h-1.26c-1.244 0-1.63.774-1.63 1.564v1.874h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M22.46 6.011a8.1 8.1 0 01-2.357.645 4.11 4.11 0 001.804-2.265 8.172 8.172 0 01-2.605.996A4.083 4.083 0 0015.6 4.5c-2.266 0-4.107 1.833-4.107 4.092 0 .32.036.631.106.93-3.415-.171-6.44-1.804-8.46-4.29a4.065 4.065 0 00-.556 2.057c0 1.421.724 2.675 1.827 3.409a4.057 4.057 0 01-1.86-.514v.053c0 1.984 1.412 3.64 3.286 4.016a4.114 4.114 0 01-1.852.07c.522 1.633 2.035 2.821 3.832 2.853a8.23 8.23 0 01-5.096 1.748c-.331 0-.656-.019-.979-.057a11.618 11.618 0 006.29 1.843c7.548 0 11.674-6.239 11.674-11.646 0-.178-.005-.355-.013-.531A8.28 8.28 0 0024 5.425a8.117 8.117 0 01-2.34.64 4.09 4.09 0 001.796-2.267z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M19.003 3H4.992A2.988 2.988 0 002 5.997v12.006A2.988 2.988 0 004.992 21h14.01A2.989 2.989 0 0022 18.003V5.997A2.988 2.988 0 0019.003 3zm-7.497 14.56H8.56v-6.628h2.946v6.628zm-1.468-7.544a1.734 1.734 0 01-1.743-1.728c0-.954.782-1.728 1.743-1.728.963 0 1.743.774 1.743 1.728a1.733 1.733 0 01-1.743 1.728zm10.128 7.544h-2.946v-3.324c0-.793-.016-1.815-1.106-1.815-1.107 0-1.278.866-1.278 1.759v3.38H11.92v-6.628h2.827v.91h.04c.393-.733 1.352-1.507 2.785-1.507 2.974 0 3.523 1.959 3.523 4.51v3.715z" />
            </svg>
          </a>
        </div>

        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Women Safety. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
