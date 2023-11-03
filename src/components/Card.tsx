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
  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      Math.min(prevIndex + 1, data.length - 1)
    );
  };
  return (
    <>
      {data?.map((item) => (
        <div className=" flex flex-col" key={item.id}>
          <img
            className="rounded-xl object-cover h-64 w-full"
            src={item.images[currentImageIndex]}
          />
          <p className="font-semibold">
            {item.city}, {item.country}
          </p>
          <div className="flex flex-col">
            <p>{item.hectares} Hectares</p>
            <p>{item.availability}</p>
          </div>

          <p className="font-semibold">${item.price} night</p>
        </div>
      ))}
    </>
  );
};

export default Card;
