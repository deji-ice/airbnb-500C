import { LuSettings2 } from "react-icons/lu";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { tabImages } from "../assets/data";

const FilterSection = () => {
  return (
    <div className=" flex items-center justify-between pt-8 px-8">
      <div className=" flex items-center gap-5 ">
        <BiChevronLeft className="text-3xl border rounded-full cursor-pointer text-black" />

        <div className=" flex items-center gap-12">
          {tabImages?.map((i, index) => (
            <div className="flex flex-col items-center cursor-pointer justify-center">
              <img
                className="h-6 text-[#717171] grayscale"
                src={i.img}
                key={index}
              />
              <p className="text-xs font-semibold">{i.name}</p>
            </div>
          ))}
        </div>

        <BiChevronRight className="text-3xl cursor-pointer   border rounded-full text-black" />
      </div>
      <div className=" flex  items-center gap-4">
        <button className=" text-xs border  font-semibold  rounded-xl border-slate-300 p-3 flex items-center justify-center gap-2">
          <LuSettings2 className='text-lg' /> Filters
        </button>
        <span className=" text-xs p-3 border font-semibold  rounded-xl border-slate-300 ">
          Display total before taxes
        </span>
      </div>
    </div>
  );
};

export default FilterSection;
