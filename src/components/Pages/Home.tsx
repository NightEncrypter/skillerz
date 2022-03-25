import { useState } from "react";
import cn from "classnames";
import CookiesLogo from "../svgs/CookiesLogo";
import LogoSvg from "../svgs/logoSvg";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import HomeLogo1 from "../svgs/HomeLogo1";
import Footer from "../Layout/Footer/Footer";
import SimpleCard from "../Layout/Cards/SimpleCard";
import Overviews from "../Layout/Overviews/Overviews";
import CustomerReviews from "../Reviews/CustomerReviews";
import HomeCaraousel from "../caraousels/HomeCaraousel";
const Home = () => {
  const [openModal, setModal] = useState<boolean>(true);
  const [ham, setHam] = useState<boolean>(true);
  const navigation = useNavigate();
  return (
    <>
      <div className=" bg-main-light min-h-screen    w-full     ">
        <header className="sticky top-0 left-0 right-0 bg-main-light flex justify-between items-center px-4 ">
          <div className="w-[28px] h-[28px] sm:hidden z-50"></div>
          <LogoSvg height={"60"} />
          <button
            onClick={() => setHam((prev) => !prev)}
            className="transition duration-200"
          >
            <Icon
              fontSize={28}
              width={32}
              icon={"ci:menu-alt-02"}
              color={"#005ECE"}
            />
          </button>
        </header>

        {/* HEADINGS */}
        <h2 className="px-4 md:px-10 flex  flex-wrap my-6 sm:hidden  ">
          <div className=" font-medium text-[#C623FF] text-2xl tracking-wide w-full  ">
            RecruiterX is a
          </div>
          <div className=" w-12  "></div>
          <div className="font-medium  ml-auto ">
            Candidate Empowerment Platform
          </div>
          <div className="font-medium text-[#00D1EE] text-lg tracking-wide w-full break-all  ">
            designed to flip recruitment table
          </div>
        </h2>

        {/* SVG1 */}
        <HomeLogo1 />
        <div className="flex justify-center my-4   ">
          <button
            className=" w-[50%] block main_btn main_btn_color  py-[0.60rem] text-white text-sm  capitalize tracking-widest  "
            // onClick={redirect_to_login}
          >
            Let's give us Try
          </button>
        </div>
        {/* WIDTH INFO */}
        <div className="w-full flex gap-3 justify-between items-center p-4 px-4  bg-[#D3E7FF]  mt-8 ">
          <h4 className="text-sm text-[#0079FA] font-medium  ">300,000+</h4>
          <div className="flex-1 border-r-[1px] border-l-[1px] border-[#0079FA] self-center px-2  ">
            <div className="">
              <h3 className="text-sm text-[#0079FA] font-medium">1 Million+</h3>
              <p className="text-xs">Applicants interviewed</p>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm text-[#0079FA] font-medium">5000+</h3>
            <p className="text-xs">Hired per month using</p>
          </div>
        </div>

        <div className="px-8 md:px-12 ">
          <Overviews />
          <CustomerReviews />
        </div>
        <div className="-translate-y-8">
          <HomeCaraousel />
        </div>
        <div className="px-6 md:px-10">
          <SimpleCard />
        </div>
        <Footer />
      </div>

      {/* Cookies Modal */}
      <div
        className={cn(
          " fixed bottom-0 left-0 right-0  cookies-box-shadow   rounded-t-xl bg-[#FFEDED] p-3 pb-6 transition duration-300 opacity-100 gap-2 z-[2] ",
          {
            "translate-y-[150%] opacity-0 ": !openModal,
          }
        )}
      >
        <CookiesLogo />
        <p className="text-[#4F2C2C] text-xs tracking-wider text-center ">
          This website uses cookies to ensure you get the best experience
        </p>
        <div className="mt-4 flex justify-around">
          <button
            className="bg-[#966A5C] hover:bg-[#755247] transition duration-200 ease-in py-2  w-[9rem] text-xs text-white font-light tracking-wider rounded-2xl"
            onClick={() => setModal(false)}
          >
            Got it
          </button>
          <button
            className="border-[#966A5C] border-[0.3px] w-[9rem] py-2  text-xs text-[#966A5C] bg-white hover:opacity-80  tracking-wider rounded-2xl"
            onClick={() => navigation("/cookies")}
          >
            Learn more
          </button>
        </div>
      </div>

      {/* SIDEBAR ITEM */}
      <div
        // onClick={() => setHam(true)}
        className={cn(" transition duration-200 fixed  ", {
          "-translate-x-full z-[-1] pointer-events-none ": ham,
          "-translate-x-0  inset-0 w-full bg-[rgba(0,0,0,0.8)] z-[1] pointer-events-auto ":
            !ham,
        })}
      >
        <div className="sidebar-gradient transition duration-200 w-[35%] h-full py-4  z-[2] fixed   ">
          <div className="justify-end flex px-4">
            <button
              onClick={() => setHam(true)}
              className="w-6 h-6 bg-white rounded-full p-1 shadow-md"
            >
              <Icon
                className="w-full h-full"
                icon={"clarity:close-line"}
                color={"#FF3E3E"}
              />
            </button>
          </div>
          <ul className="flex flex-col justify-between gap-6 mt-4">
            <li className="w-full">
              <Link className="sidebar-link " to="">
                Home
              </Link>
            </li>
            <li className="">
              <Link className="sidebar-link" to="">
                About
              </Link>
            </li>
            <li className="">
              <Link className="sidebar-link" to="">
                Contact
              </Link>
            </li>
            <li className="">
              <Link className="sidebar-link" to="">
                Webinars
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
