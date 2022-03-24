import { useState } from "react";
import cn from "classnames";
import CookiesLogo from "../svgs/CookiesLogo";
import LogoSvg from "../svgs/logoSvg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [openModal, setModal] = useState<boolean>(true);
  const navigation = useNavigate();
  return (
    <>
      <div className="px-8">
        <LogoSvg height={"80"} />
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
        {/* <button
          onClick={() => setModal(false)}
          className="bg-red-500 w-6 h-6 p-2 rounded-xl"
        >
          <Icon
            icon="bytesize:close"
            fontSize={9}
            color={"white"}
            className="bg-transparent"
          />
        </button> */}
      </div>
    </>
  );
};

export default Home;
