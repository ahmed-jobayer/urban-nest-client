import { Link } from "react-router-dom";
import useUserData from "../hooks/useUserData";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const user = useUserData();
  const axiosPublic = useAxiosPublic();
  const token = localStorage.getItem("access-token");

  const handleAddToWishlist = async (id) => {
    // console.log(id);

    const res = await axiosPublic.patch(`/add-to-wishlist/${id}`, null, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    if (res?.data?.modifiedCount > 0) {
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: "Product added to wishlist successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handleAddToCart = async(id) => {
    // console.log(id);

    const res = await axiosPublic.patch(`/add-to-cart/${id}`, null, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    if (res?.data?.modifiedCount > 0) {
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: "Product added to cart successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }

  };

  return (
    <div className="card bg-[#EDE9E9] max-h-90 shadow-xl">
      <figure>
        <img src="/register.avif" alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="text-[#4A3137] font-semibold">${product.price}</p>
        <h2 className="card-title">{product.title}</h2>
        <Link to={`/product/${product._id}`}>
          <button className=" w-full btn btn-sm text-white bg-black hover:text-black border-none">
            Details
          </button>
        </Link>

        {user.role === "buyer" && (
          <div className="flex justify-between gap-4">
            <button
              onClick={() => handleAddToCart(product._id)}
              className="w-1/2 btn btn-sm text-white bg-[#5E5449] hover:bg-[#4A3137] border-none"
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleAddToWishlist(product._id)}
              className="w-1/2 btn btn-sm text-white bg-[#4A3137] hover:bg-[#5E5449] border-none"
            >
              Add to Wishlist
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
