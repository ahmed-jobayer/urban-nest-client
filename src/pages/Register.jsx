import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GoogleLogin from "../components/GoogleLogin";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data)

    const email = data.email;
    const role = data.role;
    const status = role === "buyer" ? "approved" : "pending";
    const wishlist = [];

    const userData = { email, role, status, wishlist };
    console.log(userData)

    // CreateUser(email, data.password).then(() => {
    //   axios.post("http://localhost:4000/users", userData).then((res) => {
    //     if (res.data.insertedId) {
    //       Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Registration successful",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //       navigate("/");
    //     }
    //   });
    // });
  };

  return (
    <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: "url('/register.avif')",
    }}
  >
    <Helmet>
        <title>
            Register - UrbanNest
        </title>
    </Helmet>
    <div className="bg-[#EDE9E9] w-full max-w-4xl rounded-lg shadow-lg p-6 lg:flex">
      
      <div className="hidden lg:flex flex-col items-center justify-center w-1/2 p-6">
        <img src='/logo.png' alt="Brand Logo" className="w-3/5 rounded-3xl h-auto mb-4" />
        <h2 className="text-xl  text-gray-700 text-center">
          Welcome to <span className="font-bold">Urban</span>Nest!
        </h2>
      </div>

      
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Register in <span className="font-bold">Urban</span>Nest
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
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
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
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* confirm Password  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* role  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("role", { required: "Role is required" })}
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}
          </div>

          {/* register button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 btn btn-sm text-white bg-[#5E5449] hover:bg-[#4A3137] border-none"
            >
              Register
            </button>
          </div>

          {/* google  */}
          <div className="text-center">
            <GoogleLogin />
          </div>

          {/* to login */}
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Register;
