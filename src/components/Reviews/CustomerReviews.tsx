import { Icon } from "@iconify/react";
import Smile from "../../assets/img/smile.png";
import Earth from "../svgs/Earth";
const CustomerReviews = () => {
  return (
    <div className="md:my-8 md:mt-16">
      <h2 className="text-[#0069E7] text-sm mb-8 w-fit border-b-[0.1px] border-blue-300 md:font-medium md:text-2xl my-6 ">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 ">
        {[1, 2, 3].map((b, i) => (
          <div
            className={` ${
              i < 1 ? "hidden md:block" : "md:block"
            } rounded-xl card-shadow  p-4 bg-[#FFFFFF] transition duration-200  hover:-translate-y-2 hover:shadow-md`}
            key={i}
          >
            <div className="flex gap-2">
              <div className="w-8 h-8 hover:scale-[1.1] transition">
                <img
                  src={Smile}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-xs tracking-wide md:text-sm ">
                  Aliya lima
                </h3>
                <p className="text-[0.6rem] text-[#B9B9B9] ">Web designer</p>
              </div>
            </div>
            <p className="text-[0.6rem] mt-2 md:text-xs ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              eveniet repudiandae, commodi velit quia ipsam dolores hic,
            </p>
            <div className="flex items-center gap-2 justify-between mt-1 md:mt-3 ">
              <h4 className="font-semibold text-[0.5rem] md:text-sm ">
                aliyalima124@gmail.com
              </h4>
            </div>
            <div className="flex gap-2 md:gap-4 items-center justify-end mt-2">
              <a
                href="https://google.com"
                className="hover:scale-[1.1] transition md:w-8 md:h-8 h-4 w-4"
              >
                <Icon icon="logos:google-gmail" className="w-full h-full" />
              </a>
              <a
                href="https://www.facebook.com"
                className="hover:scale-[1.05] transition md:w-8 md:h-8 h-4 w-4"
              >
                <Icon
                  icon="akar-icons:facebook-fill"
                  color="#1279F3"
                  className="w-full h-full "
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between max-w-[14rem] md:max-w-[500px]  mx-auto relative z-[1]">
        {[1, 2, 3].map((v, i) => (
          <div key={i} className={`flex flex-col gap-[2px]  `}>
            {new Array(70).fill(0).map((x, i) => (
              <div className="flex gap-[1.2px]">
                {[1, 2, 3, 4, 5, 6].map((v, i) => (
                  <div className="w-[2px] h-[2px]  bg-blue-300" key={i}></div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className=" flex flex-col justify-between items-center  relative -top-[5rem] md:-top-[10rem] z-[1] ">
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
