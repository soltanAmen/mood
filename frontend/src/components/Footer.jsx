import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer py-0 max-h-fit font-second px-4 border-t-2 bg-[#F5F5F5] border-none">
      <div>
        <h1 className=" text-2xl max-sm:text-xl font-first font-bold m-auto mt-2">
          <Link to="/">MOOD.</Link>
        </h1>
        <p className="text-lg font-first clothing">Clothing for every mood</p>
      </div>
      <div className="flex justify-between p-4 items-start w-full gap-10 flex-wrap">
        <div className="footer-links flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <Link to="/about">About</Link>
          <Link to="/press">Press</Link>
          <Link to="/blog">Blog</Link>

          <Link to="/careers">Careers</Link>
        </div>
        <div className="footer-links flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Shop</h3>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="footer-links flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Support</h3>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
      <hr className="border-t-2 border-gray-200" />
      <div className="flex justify-between items-center p-4 font-third">
        <p className="text-sm ">&copy; 2021 Mood. All Rights Reserved.</p>
        <div className="flex gap-4">
          <FontAwesomeIcon className="slink" icon={faFacebookF} />
          <FontAwesomeIcon className="slink" icon={faTiktok} />

          <FontAwesomeIcon className="slink" icon={faXTwitter} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
