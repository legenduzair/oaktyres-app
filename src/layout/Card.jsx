function Card({ beers }) {
  return (
    <div class="m-20 max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{beers.name}</div>
            <p class="text-gray-700 text-base">{beers.tagline}</p>
            <img class="w-24" src={beers.image_url} alt="beer image"></img>
        </div>
    </div>
  )
}

export default Card