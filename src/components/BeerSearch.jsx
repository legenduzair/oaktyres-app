import { useState } from "react"

function BeerSearch() {
  const [searchBeer, setSearchBeer] = useState('');

  const handleChange = (e) => setSearchBeer(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(searchBeer === '') {
        alert('Please enter something', 'error')
    } else {
        setSearchBeer('')
    }
}

  return (
    <div className='m-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div>
              <input type="text" className='w-96 pr-40 bg-gray-200 input input-lg text-black border-slate-600' placeholder="Search" value={searchBeer} onChange={handleChange}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BeerSearch