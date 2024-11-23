import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
  className="hero min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/hero.jpg')",
  }}
>
  <div className="container mx-auto">
    <div className="hero-overlay bg-opacity-20"></div>
    <div className="grid grid-rows-5 text-white h-full">

      <div className="row-span-3 flex flex-col justify-center items-start space-y-4 px-4 lg:px-0 lg:w-3/4">
        <h1 className="text-3xl md:text-5xl font-bold leading-relaxed lg:w-3/5">
          Converting a home into a better place
        </h1>
        <Link to="/products">
          <button className="btn bg-[#5E5449] hover:bg-[#4A3137] text-white px-4 py-2 rounded-3xl">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>

  );
};

export default Hero;
