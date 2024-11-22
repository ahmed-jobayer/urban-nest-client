import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const GoogleLogin = () => {
    const { GoogleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    GoogleLogin().then(() => {
      navigate("/");
    });
  };

  return (
    <div className="mt-6">
      <div className="divider">OR</div>
      <div className="flex justify-center">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-sm text-white bg-[#5E5449] hover:bg-[#4A3137] border-none w-full"
        >
          <FaGoogle className="text-xl" /> Google
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
