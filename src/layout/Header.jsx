import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="bg-sky-700 text-center">
      <Link to="/">
        <h2 className="text-white p-8 font-bold text-xl">Oaktyres Test</h2>
      </Link>
    </div>
  )
}

export default Header