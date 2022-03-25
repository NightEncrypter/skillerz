import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1D3E73] p-5 mt-4">
      <div className=" flex gap-2 items-center rounded-2xl pr-4  justify-center">
        <div className="flex gap-2 items-center rounded-2xl pr-4 bg-white w-[85%]">
          <input
            type="email"
            name=""
            placeholder="Enter your email"
            className="bg-transparent w-full py-2  px-4 text-sm"
            id=""
          />

          <button className="bg-[#00DDFB] rounded-xl px-4 py-[0.15rem] text-white text-xs h-full ">
            {/* <Icon
          icon={"ic:baseline-alternate-email"}
          className="w-full h-full"
        /> */}
            subscribe
          </button>
        </div>
      </div>
      {[
        {
          head: "Company",
          links: ["About us", "Contact us", "Events"],
        },
        {
          head: "Product",
          links: ["Small business", "Customers"],
        },
        {
          head: "Support",
          links: ["Partner with Us", "FAQS", "Resources"],
        },
      ].map((item, i) => (
        <div className="mt-6" key={i}>
          <h3 className="text-center mb-6 font-medium text-sm text-white">
            {item.head}
          </h3>
          <ul className=" flex flex-col justify-center gap-4">
            {item.links.map((link, si) => (
              <li className=" flex justify-center" key={si}>
                <Link
                  to={""}
                  className=" text-xs text-center text-gray-100 hover:text-gray-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Footer;
