import Product from "./Product"

function ProductList({ items }) {
  return <>
    <div className="product-container">
      {items.map(product => {
        
        return (
          <Product key={product.id} product={product} />
        )
      })}
    </div>
  </>
}

export default ProductList