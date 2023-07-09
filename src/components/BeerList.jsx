import { useEffect, useState } from "react";
import Card from "../layout/Card"
import axios from "axios"

function BeerList({ searchTerm }) {
  const [beers, setBeers] = useState([]);

  const url = 'https://api.punkapi.com/v2/beers';

  useEffect(() => {
    const getBeers = async () => {
      try {
        let response;

        if(searchTerm) {
          response = await axios.get(`${url}?beer_name=${searchTerm}`)
        } else {
          response = await axios.get(url)
        }
      
        setBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getBeers();
  }, [searchTerm])

  return (
    <div class="grid grid-cols-4 gap-4">
      {beers.map((beer) => (
        <Card key={beer.id} beers={beer} />
      ))}
    </div>
  )
}

export default BeerList