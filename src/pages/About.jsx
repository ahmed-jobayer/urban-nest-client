import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
    return (
      <div className="min-h-screen bg-[#EDE9E9] text-gray-800">
        <Helmet>
            <title>About - UrbanNest</title>
        </Helmet>
        <div className="container mx-auto py-16 px-6">
          <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
          <p className="text-lg text-center mb-12">
            Welcome to <span className="font-semibold">UrbanNest</span>, your one-stop destination for quality furniture
            and home decor. Our mission is to help you create a home that reflects your personality and style, with
            furniture that blends comfort, elegance, and functionality.
          </p>
  
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <img
                src="/logo.png"
                className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
              />
            </div>
  
            {/* Content Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-base leading-relaxed mb-4">
                Founded with a vision to make every home beautiful, UrbanNest has been a trusted name in the furniture
                industry for over a decade. We pride ourselves on offering a wide variety of thoughtfully designed furniture
                that fits every style and budget. From contemporary to classic, our pieces are crafted with precision and
                care.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>High-quality furniture built to last.</li>
                <li>Affordable pricing with no compromise on style.</li>
                <li>Customizable options to fit your unique needs.</li>
                <li>Dedicated customer service to assist you every step of the way.</li>
                <li>Fast and reliable delivery, nationwide.</li>
              </ul>
            </div>
          </div>
  
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">Join Us on Our Journey</h3>
            <p className="text-base mb-6">
              At UrbanNest, we believe your home is your sanctuary. Let us help you transform it into a space you love,
              with furniture that combines functionality, comfort, and style.
            </p>
            <Link to='/products'>
            <button className="btn w-2/5 text-white bg-[#5E5449] hover:bg-[#4A3137] border-none">
              Explore Our Products
            </button></Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  