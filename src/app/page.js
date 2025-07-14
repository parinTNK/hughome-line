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
      router.push('/me');
    }
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-gradient-to-br from-red-50 via-red-100 to-pink-100">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md border border-red-100">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-full p-3 mb-3 shadow-lg">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path fill="#fff" d="M12 2C7.03 2 3 6.03 3 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9Zm0 16c-3.87 0-7-3.13-7-7 0-3.87 3.13-7 7-7 3.87 0 7 3.13 7 7 0 3.87-3.13 7-7 7Zm0-12a5 5 0 0 0-5 5c0 2.76 2.24 5 5 5s5-2.24 5-5a5 5 0 0 0-5-5Z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-red-700 mb-1 tracking-tight">
            {mode === "login" ? "Hug Home" : "สร้างบัญชี"}
          </h1>
          <p className="text-gray-500 text-sm">
            {mode === "login"
              ? "เข้าสู่ระบบ Hug Home"
              : "สมัครสมาชิกเพื่อเริ่มใช้งาน Hug Home"}
          </p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {mode === "register" && !showOtp && (
            <div>
              <label className="block text-gray-700 mb-1 font-medium" htmlFor="fullname">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 bg-gray-50"
                placeholder="Enter your full name"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-gray-700 mb-1 font-medium" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 bg-gray-50"
              placeholder="Enter your phone number"
              disabled={showOtp}
              required
            />
          </div>
          {showOtp && (
            <div>
              <label className="block text-gray-700 mb-1 font-medium" htmlFor="otp">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 bg-gray-50 tracking-widest text-lg text-center"
                placeholder="Enter OTP"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2.5 rounded-lg font-semibold shadow-md hover:from-red-600 hover:to-red-700 transition-all duration-200"
          >
            {showOtp ? (mode === "login" ? "Login" : "Register") : "Send OTP"}
          </button>
        </form>
        <div className="mt-6 text-center">
          {mode === "login" ? (
            <button
              className="text-red-600 hover:underline font-medium"
              onClick={() => {
                setMode("register");
                setShowOtp(false);
                setFullName("");
                setPhone("");
                setOtp("");
              }}
            >
              ยังไม่มีบัญชี? <span className="font-semibold">สมัครสมาชิก</span>
            </button>
          ) : (
            <button
              className="text-red-600 hover:underline font-medium"
              onClick={() => {
                setMode("login");
                setShowOtp(false);
                setFullName("");
                setPhone("");
                setOtp("");
              }}
            >
              มีบัญชีอยู่แล้ว? <span className="font-semibold">เข้าสู่ระบบ</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
