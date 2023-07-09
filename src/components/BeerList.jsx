import { useEffect, useState } from "react";
import Card from "../layout/Card"
import axios from "axios"

function BeerList() {
  const [beers, setBeers] = useState([]);

  const url = 'https://api.punkapi.com/v2/beers?page=3&per_page=8';

  useEffect(() => {
    const getBeers = async () => {
      try {
        const response = await axios.get(url)
        setBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getBeers();
  }, [])

  return (
    <div class="grid grid-cols-4 gap-4">
      {beers.map((beer) => (
        <Card key={beer.id} beers={beer} />
      ))}

    </div>
  )
}

export default BeerList