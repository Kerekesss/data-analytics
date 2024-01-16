import React from "react";
import { SocialIcon } from "react-social-icons";
import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <div className="w-full text-white" id="contact">
      <div className="max-w-[1240px] max-[948px]:flex-col max-[948px]:items-center items-start max-md:items-start mx-auto flex justify-between gap-20  px-6 py-20 flex-wrap ">
        <div className="flex  flex-col items-start ">
          <h1 className="text-3xl font-bold text-green1">React.</h1>
          <p className="mt-6 text-base leading-7  lg:max-w-md md:max-w-lg  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            eaque possimus doloremque architecto ab ex temporibus ut, cumque
            sapiente nihil fugit. Accusantium quisquam mollitia explicabo
            deleniti et? Ipsum, id voluptatem!
          </p>
          <div className="flex gap-6 mt-6 ">
            <a href="/" target="_blank">
              <SocialIcon url="https://facebook.com" bgColor="transparent" />
            </a>
            <a href="/" target="_blank">
              <SocialIcon url="https://instagram.com" bgColor="transparent" />
            </a>
            <a href="/" target="_blank">
              <SocialIcon url="https://twitter.com" bgColor="transparent" />
            </a>
            <a href="/" target="_blank">
              <SocialIcon url="https://linkedin.com" bgColor="transparent" />
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20  flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h3 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href="/" target="_blank">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
