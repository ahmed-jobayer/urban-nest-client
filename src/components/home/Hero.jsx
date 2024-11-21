const Hero = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      <div className="w-full container mx-auto">
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="w-full h-full grid grid-rows-5 text-white">
          <div className="row-span-3 flex flex-col justify-center w-3/4">
            <h1 className="mb-5 text-5xl font-bold w-3/5 leading-relaxed">Converting a home into a better place</h1>
            <button className=" btn-outline bg-[#5E5449] hover:bg-[#4A3137] p-2 rounded-3xl  text-white  w-24 ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
