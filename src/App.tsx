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
    <>
    <Nav/>
    <FilterSection/>
    <Cards/>
      <Routes>
        <Route />
      </Routes>
    </>
  )
}

export default App
