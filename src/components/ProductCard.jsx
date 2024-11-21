const ProductCard = () => {
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{"product.title"}</h2>
       
        <div className="card-actions justify-end">
          <button className="btn btn-sm text-white bg-[#5E5449] hover:bg-[#4A3137] border-none w-full">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
