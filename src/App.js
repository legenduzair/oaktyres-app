import Header from "./layout/Header";
import BeerList from "./components/BeerList";
import BeerSearch from "./components/BeerSearch";

function App() {
  return (
    <>
      <Header />
      <BeerSearch onSearch={handleSearch}/>
      <BeerList />
    </>
  );
}

export default App;
