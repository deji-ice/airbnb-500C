
import { airbnbData } from "../assets/data";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="grid  lg:grid-cols-4 grid-cols-1 gap-6 px-8 mt-44 md:mt-44  items-center">
      <Card data={airbnbData} />
    </div>
  );
};

export default Cards;
