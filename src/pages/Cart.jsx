import { useDispatch, useSelector } from "react-redux"
import { addToCart, clearCart, reduceFromCart, removeFromCart } from "../features/cart/cartSlice"
import Button from "../components/button/Button"
import { Link } from "react-router-dom"


function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  const addMore = (product) => {
    dispatch(addToCart(product))
  }

  const reduceQuantity = (product) => {
    dispatch(reduceFromCart(product))
  }
  
  const removeProduct = (product) => (
    dispatch(removeFromCart(product))
  )

  const removeAllProducts = () => {
    dispatch(clearCart())
  }
  
  
  if (cartItems.length < 1) {
    return (
      <div className="empty-cart">
        <div className="back-to-products">
         <Link to="/"> back to products</Link>
        </div>
        <h2>Your cart is empty</h2>
      </div>
    )
  } 
  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="back-to-products">
        <Link to="/"> back to all products</Link>
      </div>
      {
        cartItems.map(product => {
          return <div className="cart-list" key={product.id}>
            <div className="product">
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="title">
                {product.title}
                <div>
                  <Button classname="remove" onClick={() => removeProduct(product)}>
                    Remove
                  </Button>
                </div>
              </div>
            </div>
            <div className="total">
              <div className="quantity">
                <button className="less-btn" onClick={() => reduceQuantity(product)}>&#45;</button>
                <span>{product.quantity}</span>
                <button className="more-btn" onClick={() => addMore(product)}>+</button>
              </div>  
              <div className="price">${ product.price }</div>
            </div>
          </div>
          
        })
      }
      <div className="cart-total">
        <div className="remove-all">
          <Button classname="remove-all" onClick={() => removeAllProducts()}>Remove All</Button>
        </div>
        <div className="calculation">
           Total: ${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}
        </div>
      </div>
    </div>
  )
}

export default Cart
