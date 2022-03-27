import { Icon } from "@iconify/react";
import Smile from "../../assets/img/smile.png";
import Earth from "../svgs/Earth";
const CustomerReviews = () => {
  return (
    <div className="md:my-8 md:mt-16">
      <h2 className="text-[#0069E7] text-sm mb-8 w-fit border-b-[0.1px] border-blue-300 md:font-medium md:text-2xl ">
        Customer Reviews
      </h2>
      <div className="md-container-6x">
        <div className="sm:flex  sm:justify-between sm:items-center md:mt-10">
          <div className=" sm:w-[60%]">
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 ">
              {[1, 2, 3].map((b, i) => (
                <div
                  className={` ${i < 1 ? "hidden md:block" : "md:block"}
                  ${i === 0 || i === 2 ? "md:mt-10 " : " h-fit mt-0"}
                 rounded-xl card-shadow  p-4 bg-[#FFFFFF] transition duration-200  hover:-translate-y-2 hover:shadow-md z-40`}
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
                      <p className="text-[0.6rem] text-[#B9B9B9] ">
                        Web designer
                      </p>
                    </div>
                  </div>
                  <p className="text-[0.6rem] mt-2 md:text-xs ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae eveniet repudiandae, commodi velit quia ipsam dolores
                    hic,
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
                      <Icon
                        icon="logos:google-gmail"
                        className="w-full h-full"
                      />
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
            <div className="flex justify-between sm:max-w-md    mx-auto relative z-[1] md:-top-9 max-w-[15rem] ">
              {new Array(3).fill(0).map((v, i) => (
                <div
                  key={i}
                  className={`flex ${
                    i === 0 && "hidden sm:block"
                  } flex-col gap-[2px]  `}
                >
                  {new Array(85).fill(0).map((x, i) => (
                    <div className="flex gap-[1.2px]">
                      {new Array(6).fill(0).map((v, i) => (
                        <div
                          className="w-[2px] h-[2px]  bg-blue-300"
                          key={i}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className=" flex flex-col  justify-center items-center  relative -top-[10rem] md:-top-[10rem] z-[1]   ">
              <Earth />

              <h3 className="text-center tracking-widest  md:text-2xl my-8  ">
                We are{" "}
                <span className="text-[#7C00A7] text-3xl md:text-5xl font-medium">
                  growing
                </span>{" "}
                all over the world{" "}
              </h3>
            </div>
          </div>

          <div className=" md:self-start md:w-[25%] md:justify-self-start hidden sm:block  ">
            <div
              className={` 
          
                 rounded-xl card-shadow  p-4 bg-[#FFFFFF] transition duration-200  hover:-translate-y-2 hover:shadow-md`}
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
                eveniet repudiandae, commodi velit quia ipsam dolores hic,Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Ex nisi fuga
                inventore quia perspiciatis facere ducimus ratione repudiandae
                asperiores quis accusamus ea, alias accusantium neque deserunt
                ipsa molestiae harum aliquam quisquam consequatur, impedit rem
                ipsum dolor sit amet consectetur, adipisicing elit. Facere
                voluptatibus, consequuntur ipsa molestiae harum aliquam quisquam
                consequatur, impedit commodi, natus libero hic doloribus
                doloremque facilis eaque voluptas voluptatum odio fugit?
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
          </div>
        </div>
      </div>

      <div className="-mt-36"></div>
      {/* <h3 className="text-center tracking-widest  md:text-2xl md:-mt-24 mb-24  ">
        We are{" "}
        <span className="text-[#7C00A7] text-3xl md:text-5xl font-medium">
          growing
        </span>{" "}
        all over the world{" "}
      </h3> */}
    </div>
  );
};

export default CustomerReviews;
