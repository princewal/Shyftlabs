import { useEffect, useState } from 'react'
import ProductList from './components/product/ProductList'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from './features/cart/cartSlice'

function App() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.productList)
  const loading = useSelector(state => state.cart.loading)
   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])
  
  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    )
  }
  
  return (   
    <>
      <div className="container">        
        <main>
          <article>
            <header>
              <h1>All Products</h1>
            </header>
            <ProductList items={items} />
          </article>
        </main>
      </div>
     
    </>
  )
}

export default App
