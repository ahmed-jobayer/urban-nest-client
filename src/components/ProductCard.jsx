const ProductCard = () => {
  return (
    <div className="card bg-[#EDE9E9]  shadow-xl">
      <figure>
        <img
          src="/register.avif"
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
