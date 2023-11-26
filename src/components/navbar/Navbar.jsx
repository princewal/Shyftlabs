import { Link } from "react-router-dom"
import Cart from "./Cart"

function Navbar() {
  return <>
    <nav className="nav-container">
      <div className="company-name"><Link to="/">My Products</Link></div>
      <div className="cart">
        <Cart />
      </div>
    </nav>
  </>
}

export default Navbar