import { LuSettings2 } from "react-icons/lu";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { tabImages } from "../assets/data";

const FilterSection = () => {
  return (
    <div className=" flex items-center justify-between pt-8 px-8">
      <div className="flex-[9] flex items-center gap-10 ">
        <BiChevronLeft className="text-2xl border rounded-full cursor-pointer text-black" />

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

        <BiChevronRight className="text-2xl cursor-pointer   border rounded-full text-black" />
      </div>
      <div className=" flex flex-[3] items-center gap-4">
        <button className=" text-sm border rounded-xl border-slate-300 p-3 flex items-center justify-center gap-2">
          {" "}
          <LuSettings2 /> Filters
        </button>
        <span className=" text-sm p-3 border rounded-xl border-slate-300 ">
          Display tottal before taxes
        </span>
      </div>
    </div>
  );
};

export default FilterSection;
