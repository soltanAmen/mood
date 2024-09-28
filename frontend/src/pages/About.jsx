import { assets } from "../assets/images/assets";
import { Banner } from "../components";
const About = () => {
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
      <Banner img={"bg-about"} title={"About us"} />
      <div className="flex flex-col items-center justify-center w-full    px-10">
        <div className="flex justify-between max-lg:flex-col max-lg:w-full  items-center gap-10  w-[70%] mt-10">
          <div className="flex flex-col justify-center items-start w-1/2 max-md:w-full">
            <h1 className="text-4xl font-bold font-first text-gray-800">
              Our Story:
            </h1>
            <p className="text-gray-800 text-lg mt-5 font-second ">
              MOOD is a brand that was created to provide the best quality
              products to our customers. We believe that everyone deserves to
              have the best quality products that are available in the market.
              We are dedicated to providing the best quality products to our
              customers. We believe that everyone deserves to have the best
              quality products that are available in the market.
            </p>
          </div>
          <img
            src={assets.img}
            alt="about"
            className="w-1/2 h-1/2 max-md:w-full"
          />
        </div>
        <div className="flex justify-between max-lg:flex-col max-lg:w-full  items-center gap-10  w-[70%] mt-10">
          <img
            src={assets.about2}
            alt="about"
            className="w-1/2 h-1/2 max-md:w-full"
          />
          <div className="flex flex-col justify-center items-start w-1/2 max-md:w-full">
            <h1 className="text-4xl font-bold font-first text-gray-800">
              Our Mission:
            </h1>
            <p className="text-gray-800 text-lg mt-5 font-second">
              Our mission is to provide the best quality products to our
              customers. We believe that everyone deserves to have the best
              quality products that are available in the market. We are
              dedicated to providing the best quality products to our customers.
              We believe that everyone deserves to have the best quality
              products that are available in the market.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center my-5 justify-center">
          <h1 className="text-4xl font-bold font-first text-gray-800 mt-10">
            Our Team:
          </h1>
          <div className="flex max-md:flex-col justify-between items-center gap-16  mt-5">
            <div className="flex flex-col justify-center items-center  max-md:w-full">
              <img
                src={assets.team3}
                alt="about"
                className="w-44 h-56 rounded-full object-cover"
              />
              <h1 className="text-2xl font-bold font-first text-gray-800 mt-5 text-center">
                John Doe
              </h1>
              <p className="text-gray-800 text-lg mt-5 font-third w-full text-center">
                CEO & Founder
              </p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-full max-md:w-full">
              <img
                src={assets.team1}
                alt="about"
                className="w-44 h-56 rounded-full object-cover"
              />
              <h1 className="text-2xl font-bold font-first text-gray-800 mt-5 text-center">
                Bob Kerry
              </h1>
              <p className="text-gray-800 text-lg mt-5 font-third w-full text-center">
                Marketing Manager
              </p>
            </div>
            <div className="flex flex-col justify-center items-center  max-md:w-full">
              <img
                src={assets.team2}
                alt="about"
                className="w-44 h-56 rounded-full object-cover"
              />
              <h1 className="text-2xl font-bold font-first text-gray-800 mt-5 text-center">
                Emily Smith
              </h1>
              <p className="text-gray-800 text-lg mt-5 font-third w-full text-center">
                Sales Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
