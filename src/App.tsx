import "./App.css";
import Nav from "./components/Nav";
import FilterSection from "./components/FilterSection";
import Cards from "./components/Cards";
import { BsMapFill } from "react-icons/bs";

function App() {
  return (
    <div className="relative">
      <Nav />
      <FilterSection />
      <Cards />
      <button
        className="bg-slate-950 rounded-full  text-sm font-semibold gap-2 left-[47%] text-white px-5 py-4 flex items-center justify-center 
            fixed bottom-6 text-center"
      >
        Show Map
        <BsMapFill className="text-sm mt-1 " />
      </button>
    </div>
  );
}

export default App;
