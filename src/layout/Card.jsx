function Card({ beers }) {
  return (
    <div class="m-20 max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
            <div class="text-center font-bold text-base mb-2">{beers.name}</div>
            <p class="text-center text-gray-700 text-sm">{beers.tagline}</p>
            <img class="mx-auto w-16 pt-10" src={beers.image_url} alt="beer image"></img>
        </div>
    </div>
  )
}

export default Card