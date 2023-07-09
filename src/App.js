import Header from "./layout/Header";
import BeerList from "./components/BeerList";
import BeerSearch from "./components/BeerSearch";

function App() {
  return (
    <>
      <Header />
      <BeerSearch />
      <BeerList />
    </>
  );
}

export default App;
