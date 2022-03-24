import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CandidateEmailVerification = () => {
  const [openModal, setModal] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const navigation = useNavigate();

  const submitEmail = () => {
    setModal((prev) => !prev);
    if (openModal) {
      navigation("/candidates/set_password");
    }
  };
  return (
    <>
      <div className="px-8 bg-[#F4FAFF]  py-4 h-full sm:min-h-0 min-h-screen  ">
        <h2 className="flex  flex-wrap  ">
          <div className=" font-medium text-[#C623FF] text-3xl tracking-wide w-full  ">
            Let's
          </div>
          <div className=" w-12  "></div>
          <div className="font-medium text-xl mr-auto ">
            Pick up a signUp options
          </div>
        </h2>

        <svg
          height="80"
          viewBox="0 0 155 124"
          className="w-full my-8 "
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M56.6087 0L105.633 93H7.58413L56.6087 0Z" fill="#00E0FF" />
          <path
            d="M115.913 28.3044L149.763 93.0001H82.0628L115.913 28.3044Z"
            fill="#6B00F2"
          />
        </svg>

        <div className=" flex flex-col justify-center items-center  gap-2 ">
          <div className="w-full m ">
            <div className="flex flex-col gap-5 mb-5">
              <input
                type="text"
                className="w-full py-3 px-3 rounded-lg font-medium text-sm input-shadow"
                placeholder="Enter your email"
              />
            </div>

            <div className="w-full  ">
              <button
                onClick={submitEmail}
                className=" block main_btn main_btn_color  py-[0.9rem] text-white text-xs w-full capitalize tracking-widest font-medium  "
              >
                Submit email
              </button>

              {/* Create new Account */}
              <p className="flex gap-2 sm:gap-2 w-full justify-center mt-3 ">
                {" "}
                <span className=" text-[#5A5A5A] text-xs font-semibold tracking-wide">
                  {" "}
                  Already have an account?
                </span>{" "}
                <Link
                  to="/candidates/login"
                  className="  text-xs font-semibold tracking-wide text-second"
                >
                  Login
                </Link>{" "}
              </p>
              <div className="flex items-center gap-6 mt-8">
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
                    <Icon
                      icon="logos:linkedin-icon"
                      fontSize={27}
                      className=""
                    />{" "}
                  </div>
                  <div className="bg-linked-in py-[9px]  w-full h-full rounded-r-2xl ">
                    <span className="text-white  tracking-wider font-light capitalize text-xs">
                      Login with linkedin
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        onClick={() => {
          setModal(false);
        }}
        className={`${
          openModal ? "fixed inset-0   bg-[rgba(0,0,0,0.7)] z-[1]" : ""
        } `}
      ></div> */}
      <div
        className={`fixed bottom-0 policies-box-shadow ${
          !openModal && "translate-y-[150%] opacity-0 "
        }  rounded-t-xl bg-policies p-3 pb-5 transition duration-300 opacity-100 flex items-center gap-2 z-[2] `}
      >
        <button
          className={`w-[4.7rem] h-6  ${
            toggle ? "bg-blue-700 shadow-xl" : "bg-blue-900"
          }  rounded-2xl flex items-center `}
          onClick={() => {
            setToggle((prev) => !prev);
            console.log(toggle);
          }}
        >
          <div
            className={`w-4 h-4 rounded-xl bg-gray-400 transition duration-200 ${
              toggle ? "ml-auto mr-1 bg-gray-100" : "ml-1 "
            }`}
          ></div>
        </button>
        <p className="text-white text-xs tracking-wider font-light">
          By clicking on this button you agree to our terms of services and
          privacy policy
        </p>
        <button
          onClick={() => setModal(false)}
          className="bg-red-500 w-6 h-6 p-2 rounded-xl"
        >
          <Icon
            icon="bytesize:close"
            fontSize={9}
            color={"white"}
            className="bg-transparent"
          />
        </button>
      </div>
    </>
  );
};

export default CandidateEmailVerification;
