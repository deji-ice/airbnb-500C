import { useEffect, useState } from "react";
import { Property } from "../assets/data";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface Card {
  data: Property[];
}

const Card: React.FC<Card> = ({ data }) => {
  // const [propertyIndex, setPropertyIndex] = useState<number>(0);
  // const [imageIndex, setImageIndex] = useState<number>(0);
  // const currentImages = data.map((data) => {
  //   return data.images;
  // });
  // const currentImage = currentImages.map((data) => data);

  // const cuu = currentImage[currentImageIndex];
  // console.log(cuu[currentImageIndex]);

  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    data.map(() => 0)
  );
  const [hidden, setHidden] = useState<boolean>(false)


  useEffect(()=>{
console.log("first")
  },[hidden])


  const nextImage = (propertyIndex) => {
    const property = data[propertyIndex];
    const newIndexes = [...currentImageIndexes];
    if (newIndexes[propertyIndex] < property.images.length - 1) {
      newIndexes[propertyIndex]++;
      setCurrentImageIndexes(newIndexes);
    }
  };



  const previousImage = (propertyIndex) => {
    const newIndexes = [...currentImageIndexes];
    if (newIndexes[propertyIndex] > 0) {
      newIndexes[propertyIndex]--;
      setCurrentImageIndexes(newIndexes);
    }
  };
  return (
    <>
      {data?.map((item, propertyIndex) => (
        //   <div key={item.id} className="bg-white p-4 shadow-md rounded-md">
        //   <h2>{item.price}</h2>
        //   <div className="max-h-48 overflow-y-auto">
        //     <img
        //       src={item.images[currentImageIndexes[propertyIndex]]}
        //       alt={`Image ${currentImageIndexes[propertyIndex]}`}
        //       className="h-48 w-auto mx-auto"
        //     />
        //   </div>
        //   <div className="flex justify-between mt-4">
        //     <button
        //       onClick={() => previousImage(propertyIndex)}
        //       disabled={currentImageIndexes[propertyIndex] === 0}
        //       className="bg-gray-300 p-2 rounded-md w-1/3"
        //     >
        //       Previous
        //     </button>
        //     <button
        //       onClick={() => nextImage(propertyIndex)}
        //       disabled={
        //         currentImageIndexes[propertyIndex] ===
        //         item.images.length - 1
        //       }
        //       className="bg-blue-500 text-white p-2 rounded-md w-1/3"
        //     >
        //       Next
        //     </button>
        //   </div>
        // </div>
        <div className="mt-5 flex flex-col" key={item.id}>
          <div className=" overflow-y-auto">
            <div className={`group/item  relative overflow-y-auto`} >
              <BiChevronLeft          
                onClick={() => previousImage(propertyIndex)}
                className={currentImageIndexes[propertyIndex] === 0 ? `hidden`  : `   transition duration-1000 ease-in-out invisible group-hover/item:visible absolute top-1/2 z-20 left-2 bg-white text-2xl border rounded-full cursor-pointer text-black `}
              />
              <BiChevronRight
                onClick={() => nextImage(propertyIndex)}
                disabled={
                currentImageIndexes[propertyIndex] === item.images.length - 1
                }
                className=" invisible group-hover/item:visible absolute top-1/2 right-2  transition duration-1000 ease-in-out   bg-white z-20 text-2xl border rounded-full cursor-pointer text-black"
              />
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
