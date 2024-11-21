const ProductDetailsCard = () => {
  return (
    <div className="bg-[#EDE9E9]">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {/* image */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-none">
            <div className="w-full h-auto border rounded-lg overflow-hidden">
              <img
                src="/register.avif"
                alt="Product"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* details  */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            {/* brand */}
            <div>
              <h3 className="text-gray-500 text-sm uppercase tracking-wider">
                Brand Name
              </h3>
              <h1 className="text-2xl font-bold">Product Title</h1>
            </div>

            {/* price */}
            <div>
              <p className="text-lg text-[#4A3137] font-semibold">$99.99</p>
            </div>

            {/* description */}
            <div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>

            {/* buttons */}
            <div className="flex justify-between gap-4">
              <button className="w-1/2 btn btn-sm text-white bg-[#5E5449] hover:bg-[#4A3137] border-none">Add to Cart</button>
              <button className="w-1/2 btn btn-sm text-white bg-[#4A3137] hover:bg-[#5E5449] border-none">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
