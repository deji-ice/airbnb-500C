import { LuSettings2 } from "react-icons/lu";
import { BsSearch, BsGlobe } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";

const Nav = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {};

  return (
    <>
      <div className="hidden border-b-[1px] pb-5 md:flex items-center lg:justify-between lg:mt-1  md:gap-5 lg:gap-0 mt-5 px-8 ">
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
        <div className=" flex border lg:ml-20 shadow-lg rounded-full py-3 pl-5 pr-2 justify-start gap-5 w-fit items-center">
          <div className=" flex items-center gap-4 justify-start">
            <p className="font-semibold cursor-pointer">Anywhere</p>{" "}
            <span className="text-gray-400">|</span>
            <p className="cursor-pointer font-semibold">Any week</p>
            <span className="text-gray-400">|</span>
            <p className="cursor-pointer  text-gray-500">Add guests</p>
          </div>
          <span
            className="cursor-pointer w-fit text-xs text-white bg-[#ff385c] rounded-full
          p-2 "
          >
            <BsSearch className="font-bold" />
          </span>
        </div>
        <div className=" md:ml-8 lg:ml-0 flex items-center gap-4 justify-end">
          <p className=" font-medium">Airbnb your home</p>
          <BsGlobe className="  cursor-pointer" />
          <div>
            <div className="relative  cursor-pointer border flex gap-4 rounded-full px-3 py-2 items-center">
              <GiHamburgerMenu />
              <FaCircleUser
                onClick={() => setShow((prev) => !prev)}
                className="text-3xl text-gray-600"
              />
              <div
                className={
                  show
                    ? `text-[15px] font-normal right-0 w-56 top-14 z-20 rounded-xl drop-shadow-md py-5 
                 bg-white border flex absolute flex-col gap-4`
                    : `hidden`
                }
              >
                <div className="flex pl-3 w-full flex-col gap-3">
                  <p className="font-semibold">Sign Up</p>
                  <p>Log In</p>
                </div>
                <hr />
                <div className="flex pl-3 flex-col px-1 w-full gap-3">
                  <p>Gift cards</p>
                  <p>Airbnb your home</p>
                  <p>Help center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small screen */}
      <div className=" md:hidden flex items-center justify-center mt-5 px-5 gap-3">
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
