import { LuSettings2 } from "react-icons/lu";
import { BsSearch, BsGlobe } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";

const Nav = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div className="hidden border-b-[1px] pb-5 md:flex md:fixed top-0 z-40 w-screen bg-white items-center lg:justify-between md:mt-0 pt-3  md:gap-5 lg:gap-0 mt-5 px-8 ">
        <div className="cursor-pointer">
          <img
            className="h-10 md:flex lg:hidden "
            src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1698756814/airbnb/airbnb_vesudn.png"
            alt="Airbnb logo"
          />

          <img
            className="h-16 lg:flex hidden"
            src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1698758660/airbnb/pngwing.com_1_kficfc.png"
            alt="Airbnb logo"
          />
        </div>
        <div className=" flex border lg:ml-20 shadow-lg rounded-full py-3 justify-start gap-5 w-fit items-center">
          <div className=" flex items-center gap-4 justify-start  pl-5  ">
            <p className="font-semibold cursor-pointer">Anywhere</p>{" "}
            <span className="text-gray-400">|</span>
            <p className="cursor-pointer font-semibold">Any week</p>
            <span className="text-gray-400">|</span>
            <p className="cursor-pointer  text-gray-500">Add guests</p>
          </div>
          <span
            className="cursor-pointer w-fit text-xs text-white bg-[#ff385c] rounded-full mr-5
          p-2 "
          >
            <BsSearch className="font-bold" />
          </span>
        </div>
        <div className=" md:ml-8 lg:ml-0 flex items-center gap-4 justify-end">
          <p className=" font-medium rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            Airbnb your home
          </p>
          <BsGlobe className="  rounded-full  hover:bg-gray-200  cursor-pointer" />
          <div>
            {" "}
            <div
              onClick={() => setShow((prev) => !prev)}
              className="relative  cursor-pointer border flex gap-4 rounded-full px-3 py-2 items-center"
            >
              <GiHamburgerMenu />
              <FaCircleUser className="text-3xl text-gray-600" />
              <div
                className={
                  show
                    ? `text-[15px] font-normal right-0 w-56 top-14 z-20 rounded-xl drop-shadow-md py-1
   bg-white border flex absolute flex-col gap-3`
                    : `hidden`
                }
              >
                <div className="flex  w-full flex-col gap-1">
                  {" "}
                  <p className="font-semibold hover:bg-gray-100 py-3 pl-3">
                    Sign Up
                  </p>
                  <p className="hover:bg-gray-100 pl-3 py-3">Log In</p>{" "}
                </div>
                <hr />
                <div className="flex flex-col  w-full gap-1">
                  <p className="hover:bg-gray-100 pl-3 py-3">Gift cards</p>
                  <p className="hover:bg-gray-100 pl-3 py-3">
                    Airbnb your home
                  </p>{" "}
                  <p className="hover:bg-gray-100 pl-3 py-3">Help center</p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small screen */}
      <div className=" z-40 bg-white fixed top-0 w-full md:hidden flex items-center justify-center pt-5 px-5 gap-3">
        <div className=" flex border shadow-lg rounded-full py-2 px-5 justify-start gap-5 w-full items-center">
          <span className="cursor-pointer text-xl font-semibold">
            <BsSearch />
          </span>
          <div className=" flex flex-col justify-start">
            <p className="font-semibold">Anywhere</p>
            <div className="flex gap-2 font-medium text-xs items-center text-gray-500">
              <p className="cursor-pointer">Any week</p>.
              <p className="cursor-pointer">Add guests</p>
            </div>
          </div>
        </div>
        <div className=" rounded-full cursor-pointer border p-3 border-slate-400">
          <LuSettings2 />
        </div>
      </div>
    </>
  );
};

export default Nav;
