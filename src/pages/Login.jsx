import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { Login } = useAuth();
  const [showPassword, setShowPassword] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    Login(data.email, data.password);
    navigate("/");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/register.avif')",
      }}
    >
      <Helmet>
        <title>Login - UrbanNest</title>
      </Helmet>
      <div className="bg-[#EDE9E9] w-full max-w-4xl rounded-lg shadow-lg p-6 lg:flex">
        <div className="hidden lg:flex flex-col items-center justify-center w-1/2 p-6">
          <img
            src="/logo.png"
            alt="Brand Logo"
            className="w-3/5 rounded-3xl h-auto mb-4"
          />
          <h2 className="text-xl  text-gray-700 text-center">
            Welcome Back to <span className="font-bold">Urban</span>Nest!
          </h2>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Login in <span className="font-bold">Urban</span>Nest
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* email  */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* password  */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-10 text-[#5E5449] focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* register button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full btn btn-sm text-white bg-[#5E5449] hover:bg-[#4A3137] border-none"
              >
                Login
              </button>
            </div>

            {/* google  */}
            <div className="text-center">
              <GoogleLogin />
            </div>

            {/* to login */}
            <p className="text-sm text-center mt-4">
              Do not have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
