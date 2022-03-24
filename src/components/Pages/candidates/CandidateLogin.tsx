import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import LogoSvg from "../../svgs/logoSvg";
const CandidateLogin = () => {
  return (
    <div className="px-8 bg-[#F4FAFF]  py-4 h-full sm:min-h-0 min-h-screen  ">
      <h2 className="flex  flex-wrap  ">
        <div className=" font-medium text-[#C623FF] text-3xl tracking-wide w-full  ">
          Let's
        </div>
        <div className=" w-12  "></div>
        <div className="font-medium text-xl mr-auto ">
          get login for new updates
        </div>
      </h2>
      {/* <svg
        height="80"
        viewBox="0 0 155 124"
        className="w-full mt-4 "
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M56.6087 0L105.633 93H7.58413L56.6087 0Z" fill="#00E0FF" />
        <path
          d="M115.913 28.3044L149.763 93.0001H82.0628L115.913 28.3044Z"
          fill="#6B00F2"
        />
      </svg> */}
      <div className=" flex flex-col justify-center items-center mt-6    ">
        <LogoSvg height={"80"} />
        <div className="w-full m ">
          <div className="flex flex-col gap-5 mb-5">
            <input
              type="text"
              className="w-full py-3 px-3 rounded-lg font-medium text-sm input-shadow"
              placeholder="Enter your email"
            />
            <input
              type="text"
              className="w-full py-3 px-3 rounded-lg font-medium text-sm input-shadow"
              placeholder="Enter your password"
            />
          </div>

          <div className="w-full  ">
            <button className=" block main_btn main_btn_color  py-3 text-white text-sm w-full capitalize tracking-widest  ">
              Login
            </button>

            {/* Forgot password */}
            <p className="flex gap-2 w-full justify-center mt-3 ">
              {" "}
              <span className="capitalize text-[#5A5A5A] text-xs font-semibold tracking-wide">
                {" "}
                forgot password ?
              </span>{" "}
              <a
                href="/candidates/forgot_password"
                className="capitalize  text-xs font-semibold tracking-wide text-second"
              >
                Reset
              </a>{" "}
            </p>
            <div className="flex items-center gap-6 my-4">
              <div className="w-full h-[0.2px] bg-[#9DCDFF]"></div>
              <div className="text-purple-500 font-semibold">Or</div>
              <div className="w-full h-[0.2px] bg-[#9DCDFF]"></div>
            </div>

            {/* SOCIAL BUTTONS */}
            <div className="flex flex-col gap-5 ">
              <button className=" bg-white w-full rounded-2xl     text-sm flex     items-center ">
                <div className=" p-[0.35rem] px-4 border_with_boxshadow bg-white rounded-l-2xl google-border   ">
                  <Icon
                    icon="flat-color-icons:google"
                    fontSize={27}
                    // className="bg-green"
                  />{" "}
                </div>
                <div className="bg-google py-[9px]  w-full h-full rounded-r-2xl ">
                  <span className="text-white  tracking-wider font-light capitalize text-xs">
                    Login with google
                  </span>
                </div>
              </button>
              {/* Github icon */}
              <button className=" w-full rounded-2xl     text-sm flex      items-center ">
                <div className=" p-[0.35rem] px-4 bg-white rounded-l-2xl github-border   ">
                  <Icon
                    icon="logos:github-icon"
                    fontSize={27}
                    className="bg-transparent"
                  />{" "}
                </div>
                <div className="bg-gray-800 py-[9px]  w-full h-full rounded-r-2xl ">
                  <span className="text-white  tracking-wider font-light capitalize text-xs">
                    Login with github
                  </span>
                </div>
              </button>
              <button className=" w-full rounded-2xl    text-sm flex       bg-white ">
                <div className=" p-[0.35rem] px-4 bg-white rounded-l-2xl linkedin-border   ">
                  <Icon icon="logos:linkedin-icon" fontSize={27} className="" />{" "}
                </div>
                <div className="bg-linked-in py-[9px]  w-full h-full rounded-r-2xl ">
                  <span className="text-white  tracking-wider font-light capitalize text-xs">
                    Login with linkedin
                  </span>
                </div>
              </button>
            </div>

            {/* Create new Account */}
            <p className="flex  w-full justify-center mt-3 gap-1 ">
              {" "}
              <span className="capitalize text-[#5A5A5A] text-xs font-semibold tracking-wide">
                {" "}
                Don't have an account?
              </span>{" "}
              <Link
                to="/candidates/email_verification"
                className="capitalize   font-semibold tracking-wide text-xs text-second"
              >
                Create new account
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateLogin;
