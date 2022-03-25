import { Icon } from "@iconify/react";
import React from "react";
import Smile from "../../assets/smile.png";
const CustomerReviews = () => {
  return (
    <div className="">
      <h2 className="text-[#0069E7] text-sm mb-8 w-fit border-b-[0.1px] border-blue-300">
        Customer Reviews
      </h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="rounded-xl card-shadow  p-4 bg-[#FFFFFF]">
          <div className="flex gap-2">
            <div className="w-10 h-10">
              <img
                src={Smile}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-xs tracking-wide ">Aliya lima</h3>
              <p className="text-[0.6rem] text-[#B9B9B9] ">Web designer</p>
            </div>
          </div>
          <p className="text-[0.6rem] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            eveniet repudiandae, commodi velit quia ipsam dolores hic, assumenda
            deleniti necessitatibus alias, maxime officia qui! Recusandae non
            eius atque nesciunt cum.
          </p>
          <div className="flex items-center gap-2 mt-4 ">
            <h4 className="font-medium text-xs ">Facebook</h4>
            <a href="#">
              <Icon icon="akar-icons:facebook-fill" color="#1279F3" />
            </a>
          </div>
        </div>
        <div className="rounded-xl card-shadow  p-4 bg-[#FFFFFF]">
          <div className="flex gap-2">
            <div className="w-10 h-10">
              <img
                src={Smile}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-xs tracking-wide ">Aliya lima</h3>
              <p className="text-[0.6rem] text-[#B9B9B9] ">Web designer</p>
            </div>
          </div>
          <p className="text-[0.6rem] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            eveniet repudiandae, commodi velit quia ipsam dolores hic, assumenda
            deleniti necessitatibus alias, maxime officia qui! Recusandae non
            eius atque nesciunt cum.
          </p>
          <div className="flex items-center gap-2 mt-4 ">
            <h4 className="font-medium text-xs ">Facebook</h4>
            <a href="#">
              <Icon icon="akar-icons:facebook-fill" color="#1279F3" />
            </a>
          </div>
        </div>
      </div>

      <h3 className="text-center my-4">
        We are{" "}
        <span className="text-[#7C00A7] text-3xl font-medium">growing</span> all
        over the world{" "}
      </h3>
    </div>
  );
};

export default CustomerReviews;
