import { useState } from "react";
import { Property } from "../assets/data";

interface Card {
  data: Property[];
}

const Card: React.FC<Card> = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const currentImages = data.map((data) => {
    return data.images;
  });
  const currentImage = currentImages.map((data) => data);

  const cuu = currentImage[currentImageIndex];
  console.log(cuu[currentImageIndex]);
  return (
    <>
      {data?.map((item) => (
        <div className="mt-5 flex flex-col" key={item.id}>
          <img
            className="rounded-xl object-cover h-64 w-full"
            src={item.images[currentImageIndex]}
          />
          <p className="font-semibold mt-2">
            {item.city}, {item.country}
          </p>
          <div className="flex flex-col text-gray-600 leading-6">
            <p>{item.hectares} Hectares</p><p>{item.availability}</p>
          </div>

          <p className="mt-1"> <span className="font-semibold">${item.price}</span> night</p>
        </div>
      ))}
    </>
  );
};

export default Card;
