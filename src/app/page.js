"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [mode, setMode] = useState("login"); // "login" or "register"
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!showOtp) {
      setShowOtp(true);
    } else {
      // OTP verification logic would go here
      // For now, we'll assume successful verification and redirect
      router.push('/me');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {mode === "login" ? "HugHome Login" : "HugHome Register"}
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {mode === "register" && !showOtp && (
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="fullname">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your full name"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your phone number"
              disabled={showOtp}
              required
            />
          </div>
          {showOtp && (
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="otp">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter OTP"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            {showOtp ? (mode === "login" ? "Login" : "Register") : "Send OTP"}
          </button>
        </form>
        <div className="mt-4 text-center">
          {mode === "login" ? (
            <button
              className="text-blue-500 hover:underline"
              onClick={() => {
                setMode("register");
                setShowOtp(false);
                setFullName("");
                setPhone("");
                setOtp("");
              }}
            >
              Don't have an account? Register
            </button>
          ) : (
            <button
              className="text-blue-500 hover:underline"
              onClick={() => {
                setMode("login");
                setShowOtp(false);
                setFullName("");
                setPhone("");
                setOtp("");
              }}
            >
              Already have an account? Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
