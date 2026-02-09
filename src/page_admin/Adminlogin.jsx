

import React, { useState } from "react";
import { User, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img from "../assets/Computer login-pana.svg";

const AdminAuth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  // TEMP: simulate successful login
  navigate("/dashboard");
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT – Illustration */}
        <div className="hidden md:flex items-center justify-center bg-indigo-50 p-10">
          <img
            src={img}
            alt="Admin Authentication"
            className="max-w-xs lg:max-w-sm opacity-90"
          />
        </div>

        {/* RIGHT – Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {isSignup ? "Admin Sign Up" : "Admin Sign In"}
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            {isSignup
              ? "Create a new admin account"
              : "Enter your credentials to access the admin dashboard"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 cursor">
            {/* Email (Sign up only) */}
            {isSignup && (
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Admin email"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}

            {/* Username */}
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Admin username"
                className="w-full pl-10 pr-4 py-3 border rounded-lg
                focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 border rounded-lg
                focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Confirm Password (Sign up only) */}
            {isSignup && (
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}

            {/* Forgot Password (Sign in only) */}
            {!isSignup && (
              <div className="text-right">
                <a
                  href="#"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3.5 rounded-lg
              font-semibold hover:bg-indigo-700 transition cursor-pointer"
            >
              {isSignup ? "Create Account" : "Sign In"}
            </button>
          </form>

          {/* Toggle */}
          <p className="text-sm text-center text-gray-500 mt-6">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignup(false)}
                  className="text-indigo-600 hover:underline font-medium"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignup(true)}
                  className="text-indigo-600 hover:underline font-medium"
                >
                  Create one
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
