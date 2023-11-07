import { LuSettings2 } from "react-icons/lu";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { tabImages } from "../assets/data";

const FilterSection = () => {
  return (
    <div className=" fixed md:top-20 md:w-screen top-[78px] z-30 drop-shadow-md md:drop-shadow-none bg-white flex items-center overflow-x-scroll scrollbar-hide justify-between pt-8 md:pb-5 px-8">
      <div className="  relative flex items-center gap-5 ">
        <div className=" bg-gradient-to-r  from-[#ffffff]  z-20 h-16  w-[5rem] absolute -left-[24px] " />
        <div className=" bg-gradient-to-l  from-[#ffffff]  z-20 h-16  w-[5rem] absolute -right-[24px] md:-right-[5px]  " />
        <BiChevronLeft className="text-3xl hidden md:flex z-20 border rounded-full cursor-pointer text-black" />

        <div className="relative cursor-pointer flex gap-16 w-[80%] md:w-[90%] md:gap-12   justify-center overflow-x-clip scrollbar-hide items-center">
          {tabImages?.map((i, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer justify-center"
            >
              <img className="h-6 text-[#717171] grayscale" src={i.img} />
              <p className="text-xs font-semibold">{i.name}</p>
            </div>
          ))}
        </div>

        <BiChevronRight className="text-3xl hidden md:flex z-20 cursor-pointer border rounded-full text-black" />
      </div>
      <div className=" hidden md:flex items-center gap-4">
        <button className=" text-xs border  font-semibold  rounded-xl border-slate-300 p-3 flex items-center justify-center gap-2">
          <LuSettings2 className="text-lg" /> Filters
        </button>
        <span className=" text-xs p-3 border font-semibold flex items-center  gap-2 rounded-xl border-slate-300 ">
          Display total before taxes <input type="checkbox" className="toggle"  />
        </span>
      </div>
    </div>
  );
};

export default FilterSection;
