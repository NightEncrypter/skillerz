import { Icon } from "@iconify/react";
import Smile from "../../assets/img/smile.png";
import Earth from "../svgs/Earth";
const CustomerReviews = () => {
  return (
    <div className="">
      <h2 className="text-[#0069E7] text-sm mb-8 w-fit border-b-[0.1px] border-blue-300">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-2 gap-3 ">
        {[1, 2].map((b, i) => (
          <div className="rounded-xl card-shadow  p-4 bg-[#FFFFFF]" key={i}>
            <div className="flex gap-2">
              <div className="w-8 h-8">
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
            <p className="text-[0.6rem] mt-2  ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              eveniet repudiandae, commodi velit quia ipsam dolores hic,
            </p>
            <div className="flex items-center gap-2 justify-between mt-1 ">
              <h4 className="font-semibold text-[0.5rem] ">
                aliyalima124@gmail.com
              </h4>
            </div>
            <div className="flex gap-2 items-center justify-end mt-2">
              <a href="https://google.com">
                <Icon icon="logos:google-gmail" width={16} />
              </a>
              <a href="https://www.facebook.com">
                <Icon icon="akar-icons:facebook-fill" color="#1279F3" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between max-w-[15rem] mx-auto relative z-[1]">
        {[1, 2].map((v, i) => (
          <div className="flex flex-col gap-[2px]">
            {new Array(50).fill(0).map((x, i) => (
              <div className="flex gap-[1.2px]">
                {[1, 2, 3, 4, 5, 6].map((v, i) => (
                  <div className="w-[2px] h-[2px]  bg-blue-300" key={i}></div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className=" flex flex-col justify-between items-center  relative -top-[5rem] z-[1] ">
        <Earth />
        <h3 className="text-center tracking-widest mt-3 ">
          We are{" "}
          <span className="text-[#7C00A7] text-3xl font-medium">growing</span>{" "}
          all over the world{" "}
        </h3>
      </div>
    </div>
  );
};

export default CustomerReviews;
