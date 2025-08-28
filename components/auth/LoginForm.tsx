import { Mail, Lock, EyeOff } from "lucide-react";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-200 dark:border-gray-700"></nav>

      <main className="pt-20 flex items-center justify-center min-h-[calc(100vh-80px)] p-6">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="backdrop-blur-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg dark:shadow-xl dark:shadow-black/20 overflow-hidden transition-colors duration-200">
            {/* Header */}
            <div className="text-center p-8 pb-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Welcome Back
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Sign in to your account to access the dashboard
              </p>
            </div>

            {/* Form */}
            <div className="p-8 space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-10 py-2 
                               bg-gray-50 dark:bg-gray-700 
                               border border-gray-300 dark:border-gray-600 
                               rounded-lg text-gray-900 dark:text-white 
                               placeholder-gray-500 dark:placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                               transition-colors duration-200"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 
                               text-gray-400 dark:text-gray-300 
                               hover:text-gray-600 dark:hover:text-white
                               transition-colors duration-200"
                  >
                    <EyeOff className="w-4 h-4" />{" "}
                    {/* Replace with Eye if needed */}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-400 dark:border-gray-500 
                               bg-white dark:bg-gray-700 checked:bg-blue-600 
                               focus:ring-blue-500 dark:focus:ring-blue-400"
                  />
                  <span>Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                className="w-full py-2.5 
                                 bg-gradient-to-r from-blue-600 to-blue-700 
                                 hover:from-blue-500 hover:to-blue-600 
                                 text-white font-medium rounded-lg 
                                 shadow-md hover:shadow-lg 
                                 transition-all duration-200"
              >
                Sign In
              </button>

              {/* OR Divider */}
              <div className="relative my-6">
                <div className="border-t border-gray-200 dark:border-gray-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="bg-white dark:bg-gray-800 px-4 text-xs uppercase 
                                  text-gray-500 dark:text-gray-400 font-medium tracking-wider"
                  >
                    Or Continue With
                  </span>
                </div>
              </div>

              {/* Social Buttons */}
              <SocialLogin />

              {/* Sign Up Link */}
              <div className="text-center">
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  Don not have an account?{" "}
                </span>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginForm;
