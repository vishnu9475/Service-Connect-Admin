export default function Component41() {
  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-200 pt-10">
      <div className="w-[360] p-5 bg-gray-100 rounded-xl">
        
        {/* Title */}
        <h2 className="text-xl font-semibold mb-1">Let’s Sign In.!</h2>
        <p className="text-sm text-gray-500 mb-5">
          Login to Your Account to Continue your Courses
        </p>

        {/* Inputs */}
        <div className="space-y-4">
          {/* Email */}
          <div className="relative">
            <input
              className="block w-full bg-gray-300 px-4 py-3 rounded-lg pl-10" 
              placeholder="Email"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">
              📧
            </span>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              className="block w-full bg-gray-300 px-4 py-3 rounded-lg pl-10" 
              placeholder="Password"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">
              🔒
            </span>
          </div>
        </div>

        {/* Remember / Forgot */}
        <div className="flex justify-between items-center text-sm mt-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember Me
          </label>
          <span className="text-gray-600">Forgot Password?</span>
        </div>

        {/* Button */}
        <button className="mt-6 w-full bg-black text-white py-3 rounded-full flex items-center justify-center gap-3">
          Sign In
          <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
            →
          </span>
        </button>

      </div>
    </div>
  );
}
