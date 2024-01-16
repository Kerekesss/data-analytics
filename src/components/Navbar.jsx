import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full fixed top-0 bg-black bg-opacity-90 z-10">
      <div className="flex px-5 items-center max-w-[1240px] mx-auto h-20 text-white">
        <h1 className="w-full text-3xl font-bold text-green1">React.</h1>
        {showButton && (
          <button
            className="fixed bottom-4 right-4 bg-green1 text-black font-bold px-4 py-2 rounded cursor-pointer hover:bg-black hover:text-green1 hover:border-2 border-white"
            onClick={scrollToTop}
          >
            Back to Top
          </button>
        )}
        <ul className="flex max-md:hidden">
          <Link to="home" smooth={true} duration={500}>
            <li className="p-4">Home</li>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <li className="p-4">About</li>
          </Link>
          <Link to="subscribe" smooth={true} duration={500}>
            <li className="p-4">Subscribe</li>
          </Link>
          <Link to="pricing" smooth={true} duration={500}>
            <li className="p-4">Pricing</li>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <li className="p-4">Contact</li>
          </Link>
        </ul>
        <div onClick={handleClick} className="block md:hidden cursor-pointer">
          {click ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            click
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%] "
          }
        >
          <h1 className="w-full text-3xl font-bold text-green1 m-4">React.</h1>
          <ul className=" uppercase p-4">
            <Link to="home" smooth={true} duration={500} onClick={handleClick}>
              <li className="p-4 border-b border-gray-600">Home</li>
            </Link>
            <Link to="about" smooth={true} duration={500} onClick={handleClick}>
              <li className="p-4 border-b border-gray-600">Company</li>
            </Link>
            <Link
              to="subscribe"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              <li className="p-4 border-b border-gray-600">Resources</li>
            </Link>
            <Link
              to="pricing"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              <li className="p-4 border-b border-gray-600">About</li>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              <li className="p-4">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
