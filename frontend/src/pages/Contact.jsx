import { assets } from "../assets/images/assets.js";
import { Subsicribe } from "../components";
const Contact = () => {
  return (
    <div
      className="
    flex
    flex-col
    justify-center
    items-center
    mb-10
    w-full

    
    "
    >
      <div className="bg-banner bg-cover bg-bottom h-44 mt-0 w-full">
        <div className=" bg-gray-900 w-full h-full bg-opacity-25 flex justify-center items-center">
          <h1 className="text-5xl font-bold font-first text-white">
            Contuct Us
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center w-full py-32 max-md:flex-col-reverse gap-16 mt-10 px-10">
        <img
          src={assets.contact_img}
          alt="contact"
          className="w-1/2 h-1/4 max-md:w-full "
        />
        <div className="flex flex-col justify-center items-start w-1/2 max-md:w-full ">
          <h1 className="text-4xl font-bold font-first text-gray-800">
            Visit Our Store
          </h1>
          <p className="text-gray-800 text-lg mt-5 font-second">
            Address: 1234 Main Street, Anytown, USA
          </p>
          <p className="text-gray-800 text-lg mt-5 font-second contact">
            Phone: 123-456-7890
          </p>
          <p className="text-gray-800 text-lg mt-5 font-second contact">
            Email:
            <a href="mailto:contact@mood.com">contact@mood.com</a>
          </p>
          <p className=" text-gray-800 text-lg mt-5 font-second contact ">
            Hours: Monday - Friday: 9:00 AM - 5:00 PM
          </p>
          <button className="  text-white text-2xl  px-8 py-4 rounded-full mt-4  bg-accent outline-none  font-third   hover:scale-110 transition-all duration-200 ease-in-out ">
            Get Directions
          </button>
        </div>
      </div>

      <Subsicribe />
    </div>
  );
};

export default Contact;
