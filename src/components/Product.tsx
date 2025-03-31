import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router';

interface ProductType {
  id: number;
  name: string;
  created_at: string;
}

function Product() {
  const { productId } = useParams();

  const [product, setProduct] = useState<ProductType | null>(null)

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then(r => r.json())
      .then(json => setProduct(json))
  }, [])

  return (
    <>
    { product ? <ProductWithData product={product} /> : <></>}
    </>
  )
}

function ProductWithData({product} : {product: ProductType}) {
  return (
    <>
    <h1>{product.name}</h1>
    <Link to="/">Back</Link>
    </>
  )
}

export default Product
