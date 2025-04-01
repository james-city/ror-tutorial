import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router';

interface Product {
  id: number
  name: string
  created_at: string
}

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then(json => setProducts(json))
  }, [])

  return (
    <>
    <h1>Products</h1>

    <Link to="/product/new">New Product</Link>

    <div id="products">
      <div>
        {products.map(product => <div key={product.id}><Link to={`/product/${product.id}`}>{product.name}</Link></div>)}
      </div>
    </div>
    </>
  )
}

export default App
