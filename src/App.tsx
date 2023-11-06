import {
  Route,
  Routes,
} from "react-router-dom";

import './App.css'
import Nav from "./components/Nav";
import FilterSection from "./components/FilterSection";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";
import { BsMapFill} from "react-icons/bs";

interface Listing {
  id: number;
  imageUrl: string;
  lat: number;
  lng: number;
  name: string;
  price: number;
  priceCurrency: string;
}

function App() {

  const [data, setData] = useState<Listing[]>([]);

  useEffect(() => {

    axios
      .get("https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="relative">
    <Nav/>
    <FilterSection/>
    <Cards/>
    <button
        className="bg-slate-950 rounded-full  text-sm font-semibold gap-2 left-[47%] text-white px-5 py-4 flex items-center justify-center 
            fixed bottom-6 text-center"
      >
        Show Map
        <BsMapFill className='text-sm mt-1 '/>
      </button>
    </div>
  )
}

export default App
