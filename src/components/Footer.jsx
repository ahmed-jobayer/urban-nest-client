import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer container mx-auto text-neutral-content p-10 max-w-5xl mt-2">
      <aside className="flex items-center">
        <img className="w-1/12 rounded-lg" src="/public/logo.png" />
        <div>
        <h2 className=" text-2xl">
          <span className="font-bold">Urban</span>Nest
        </h2>
        <p>Providing reliable furniture since 1992</p>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title text-xl">Social</h6>
        <div className="flex gap-6 text-3xl">
        <FaXTwitter />
        <FiYoutube />
        <FiFacebook />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
