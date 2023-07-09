import { useState } from "react";
import Header from "./layout/Header";
import BeerList from "./components/BeerList";
import BeerSearch from "./components/BeerSearch";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
      <Header />
      <BeerSearch onSearch={handleSearch}/>
      <BeerList searchTerm={searchTerm}/>
    </>
  );
}

export default App;
