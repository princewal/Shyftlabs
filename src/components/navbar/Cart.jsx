import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems)
  return (
    <div className="cart-number" data-cartitems={cartItems.length}>
      <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Cart
