import { useState } from "react";
import { Property } from "../assets/data";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";

interface Card {
  data: Property[];
}

const Card: React.FC<Card> = ({ data }) => {
  const initialIndexes: number[] = data.map(() => 0);
  const [currentImageIndexes, setCurrentImageIndexes] =
    useState(initialIndexes);

  const nextImage = (propertyIndex: number) => {
    const property = data[propertyIndex];
    const newIndexes = [...currentImageIndexes];
    if (newIndexes[propertyIndex] < property.images.length - 1) {
      newIndexes[propertyIndex]++;
      setCurrentImageIndexes(newIndexes);
    }
  };

  const previousImage = (propertyIndex: number) => {
    const newIndexes = [...currentImageIndexes];
    if (newIndexes[propertyIndex] > 0) {
      newIndexes[propertyIndex]--;
      setCurrentImageIndexes(newIndexes);
    }
  };
  return (
    <>
      {data?.map((item, propertyIndex) => (
        <div className="mt-5 flex flex-col" key={item.id}>
          <div className=" overflow-y-auto">
            <div className={`group/item  relative overflow-y-auto`}>
              <BiChevronLeft
                onClick={() => previousImage(propertyIndex)}
                className={
                  currentImageIndexes[propertyIndex] === 0
                    ? `hidden`
                    : `   transition duration-1000 ease-in-out invisible group-hover/item:visible absolute top-1/2 z-20 left-2 bg-white text-2xl border rounded-full cursor-pointer text-black `
                }
              />
              <BiChevronRight
                onClick={() => nextImage(propertyIndex)}
                disabled={
                  currentImageIndexes[propertyIndex] === item.images.length - 1
                }
                className=" invisible group-hover/item:visible absolute top-1/2 right-2  transition duration-1000 ease-in-out   bg-white z-20 text-2xl border rounded-full cursor-pointer text-black"
              />
              <BsFillHeartFill className="text-slate-800 hover:text-red-500 hover:opacity-100 cursor-pointer text-2xl opacity-50 z-20 absolute top-5 right-4" />
              <img
                src={item.images[currentImageIndexes[propertyIndex]]}
                alt={`Image ${currentImageIndexes[propertyIndex]}`}
                className="rounded-xl object-cover h-72  w-full mx-auto"
              />
            </div>
          </div>
          <p className="font-semibold mt-2">
            {item.city}, {item.country}
          </p>
          <div className="flex flex-col text-gray-600 leading-6">
            <p>{item.hectares} Hectares</p>
            <p>{item.availability}</p>
          </div>

          <p className="mt-1">
            <span className="font-semibold">${item.price}</span> night
          </p>
        </div>
      ))}
    </>
  );
};

export default Card;
