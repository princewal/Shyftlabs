import { useEffect, useState } from "react"
import Button from "../button/Button"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../features/cart/cartSlice"

function Product({ product }) {
  const [added, setAdded] = useState(false)
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  useEffect(() => {
    const itemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    )

    if (itemIndex !== -1) {
      setAdded(true)
    }
  }, [cartItems, product.id])  

  const handleClick = () => {
     dispatch(addToCart(product))
  }

  return <>
    <div className="product">
      <div className="image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="rating">
        {product.rating.rate} <span>({product.rating.count} reviews)</span> 
      </div>
      <div className="title">
        {product.title} - <span>${ product.price }</span>
      </div>
      <div className="desc">
        {product.description}
      </div>
      <div className="button-container">
        <Button onClick={handleClick} >{ added ? 'In Cart' : 'Add to Cart'}</Button>
      </div>
    </div>
  </>
}

export default Product
/* {
  category:"jewelery"
  description:"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection."
  id:5
  image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
  price:695
  rating:{rate: 4.6, count: 400}
  title:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
} */