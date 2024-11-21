import { Helmet } from "react-helmet-async";

const ContuctUs = () => {
  return (
    <div
      className="min-h-screen text-white "
      style={{
        backgroundImage: "url('https://i.ibb.co.com/nC4VtHr/slider2.jpg')",
      }}
    >
        <Helmet>
            <title>
                Contact Us - UrbanNest
            </title>
        </Helmet>
      <div className="min-h-screen flex justify-center items-center">
        <form className=" text-gray-800 w-full lg:w-1/2 p-8 rounded-lg shadow-lg bg-[#EDE9E9]">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Send Message
          </h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Type your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 btn btn-sm text-white bg-[#5E5449] hover:bg-[#4A3137] border-none"
              >
                Send
              </button>
            </div>
          </form>
        </form>
      </div>
    </div>
  );
};

export default ContuctUs;
