import { Icon } from "@iconify/react";
import classNames from "classnames";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeLogoLink from "../../logoLinks/HomeLogoLink";

const UploadResume = () => {
  const navigation = useNavigate();

  const [resume, setResume] = useState<any>();
  const submitPass = () => {
    navigation(-1);
  };
  const changePassword = () => {
    navigation("/candidates/resume");
  };

  const extractFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setResume(e.target.files[0]);
    }
  };
  return (
    <div className="px-8 bg-[#F4FAFF]  py-2 h-full sm:min-h-0 min-h-screen ">
      {/* <div className=" flex justify-center w-full"> */}
      <h2 className="flex  flex-wrap  ">
        <div className=" font-medium text-[#C623FF] text-3xl tracking-wide w-full  ">
          Let's
        </div>
        <div className=" w-12  "></div>
        <div className="font-medium text-xl mr-auto ">Upload your Resume</div>
      </h2>
      <div className="flex justify-center mt-4">
        <HomeLogoLink height={"80"} className=" inline-block h-20 w-20   " />
      </div>

      <div className=" flex flex-col justify-center items-center  gap-2 mt-5 ">
        <div className="w-full m ">
          <div className=" block mx-auto w-[80%] h-[15rem] bg-white rounded-lg p-5 upload-box-shadow relative">
            <div className="w-full h-full bg-blue-50  rounded-md border-dashed border-blue-500 border-[0.8px] flex flex-col justify-center items-center p-6">
              <input
                type="file"
                onChange={extractFile}
                name=""
                className="absolute -translate-x-[500%]"
                id="resume"
              />
              <label htmlFor="resume" className="w-12 h-[3rem] cursor-pointer ">
                <Icon
                  icon="fluent:image-20-filled"
                  color="#0358FF"
                  className="w-full h-full"
                />
              </label>
              <div className="mt-4">
                <h4 className="text-xs text-center text-[#858dff] ">
                  Drag your resume in pdf, jpeg format for start uploading
                </h4>
              </div>
              <button className="mt-6 py-1 rounded-lg px-5 bg-[#0358FF] text-white text-xs cursor-pointer">
                <label htmlFor="resume">Browse files</label>
              </button>
            </div>

            <div
              className={classNames(
                "absolute  bg-white left-8 right-8 text-xs  z-10 p-3 rounded-md shadow-md  flex flex-col gap-1 pointer-events-none transition duration-200",
                {
                  "opacity-100  pointer-events-auto upload-box-shadow-bottom translate-y-[1rem] ":
                    resume,
                  "opacity-0 pointer-events-none -translate-y-full": !resume,
                }
              )}
            >
              <div className=" rounded-xl h-2 bg-blue-100 w-full mb-[0.4rem]">
                <div className="w-1/2 bg-blue-600 h-full rounded-xl"></div>
              </div>
              <p className="text-center text-xs text-blue-600 font-medium">
                Upload Successfully
              </p>
            </div>
          </div>

          <div className="w-full mt-24  ">
            <button
              className=" block main_btn main_btn_color  py-[0.85rem] text-white text-sm w-full capitalize tracking-widest hover:-translate-y-1 transition duration-200 hover:shadow-lg  "
              onClick={changePassword}
            >
              Submit
            </button>
          </div>

          <button
            className="w-full  flex justify-center mt-10 bg-[#03C8A4] rounded-lg text-white py-[0.4rem] items-center hover:-translate-y-1 transition duration-200 hover:shadow-lg "
            onClick={submitPass}
          >
            <Icon icon="ep:back" fontSize={17} className="bg-transparent" />{" "}
            <span className="inline-block ml-3"> Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;
