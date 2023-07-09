import { useState } from "react";
import Header from "./layout/Header";
import BeerList from "./components/BeerList";
import BeerSearch from "./components/BeerSearch";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <BeerSearch onSearch={handleSearch}/>
      <BeerList searchTerm={searchTerm}/>
    </Router>
    </>
  );
}

export default App;
