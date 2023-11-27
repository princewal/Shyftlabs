import { useEffect } from 'react'
import ProductList from './components/product/ProductList'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, updatePagination } from './features/cart/cartSlice'
import Button from './components/button/Button'

function App() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.displayList)
  const loading = useSelector(state => state.cart.loading)
  const donePagination = useSelector(state => state.cart.donePagination)
  const fetchedData = useSelector(state => state.cart.fetchedData)

  useEffect(() => {
    if(fetchedData) return
    dispatch(fetchProducts())
   }, [dispatch])
  
  const handleMore = () => {
    dispatch(updatePagination())
  }
  
  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <h2>Loading...</h2>
        </div>
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
            {!donePagination && 
              <div className="more-container">
              <Button classname='more-btn' onClick={handleMore}>
                More &#62;&#62;
              </Button>
            </div>
            }
            
          </article>
        </main>
      </div>
     
    </>
  )
}

export default App
