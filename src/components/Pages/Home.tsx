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
const Home = () => {
  const [openModal, setModal] = useState<boolean>(true);
  const [ham, setHam] = useState<boolean>(true);
  const navigation = useNavigate();
  return (
    <>
      <div className="  bg-main-light   w-full     ">
        <header className="flex justify-between items-center px-6 ">
          <div className="w-[28px] h-[28px]"></div>
          <LogoSvg height={"50"} />
          <button
            onClick={() => setHam((prev) => !prev)}
            className="transition duration-200"
          >
            <Icon fontSize={28} icon={"ci:menu-alt-02"} color={"#005ECE"} />
          </button>
        </header>

        {/* HEADINGS */}
        <h2 className="px-6 flex  flex-wrap my-4  ">
          <div className=" font-medium text-[#C623FF] text-2xl tracking-wide w-full  ">
            RecruiterX is a
          </div>
          <div className=" w-12  "></div>
          <div className="font-medium  mr-auto ">
            Candidate Empowerment Platform
          </div>
          <div className="font-medium text-[#00D1EE] text-xl tracking-wide w-full  ">
            <div className=" w-3 h-2   inline-block  "></div>
            designed to flip recruitment table
          </div>
        </h2>

        {/* SVG1 */}
        <HomeLogo1 />

        {/* WIDTH INFO */}
        <div className="w-full flex justify-between items-center p-2  bg-[#D3E7FF]  ">
          <h4 className="text-sm text-[#0079FA] font-medium w-[25%]">
            300,000+
          </h4>
          <div className="flex-1">
            <h3 className="text-sm text-[#0079FA] font-medium">1 Million+</h3>
            <p className="text-xs">Applicants interviewed</p>
          </div>
          <div className="flex-1">
            <h3 className="text-sm text-[#0079FA] font-medium">5000+</h3>
            <p className="text-xs">Hired per month using</p>
          </div>
        </div>

        <div className="px-6 mt-4">
          <div className="flex justify-center ">
            <button
              className=" w-[70%] block main_btn main_btn_color  py-[0.68rem] text-white text-sm  capitalize tracking-widest  "
              // onClick={redirect_to_login}
            >
              Let's give us Try
            </button>
          </div>
        </div>

        <div className="px-6">
          <Overviews />
          <CustomerReviews />
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
