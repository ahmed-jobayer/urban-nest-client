import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="card bg-[#EDE9E9] max-h-80 shadow-xl">
        <figure>
          <img src="/register.avif" alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-[#4A3137] font-semibold">${product.price}</p>
          <h2 className="card-title">{product.title}</h2>

          <div className="flex justify-between gap-4">
            <button className="w-1/2 btn btn-sm text-white bg-[#5E5449] hover:bg-[#4A3137] border-none">
              Add to Cart
            </button>
            <button className="w-1/2 btn btn-sm text-white bg-[#4A3137] hover:bg-[#5E5449] border-none">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
