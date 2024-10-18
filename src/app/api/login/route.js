import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

import User from "@/models/User";
import connectToDatabase from "../../../../utils/mongodb";

const JWT_SECRET = "124asdfasdfd"; // Ideally, get this from environment variables

export async function POST(req) {
  try {
    await connectToDatabase(); // Ensure connection before querying

    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found." }), {
        status: 401,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: "Invalid credentials." }), {
        status: 401,
      });
    }

    // Create JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    // Set cookie
    const cookie = serialize("token", token, {
      httpOnly: true, // Helps prevent XSS attacks
      secure: process.env.NODE_ENV === "production", // Ensure secure cookies in production
      maxAge: 3600, // 1 hour
      path: "/",
    });

    return new Response(JSON.stringify({ message: "Login successful." }), {
      status: 200,
      headers: {
        "Set-Cookie": cookie,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return new Response(JSON.stringify({ message: "Internal server error." }), {
      status: 500,
    });
  }
}
