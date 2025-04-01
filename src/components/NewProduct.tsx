import { useState } from 'react'
import { Link } from 'react-router'

function NewProduct() {
  const [name, setName] = useState<string>('')

  const handleClick = () => {
    fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },    
      body: JSON.stringify({product: {name}})
    })
  };

  return (
    <>
      <form>
        <label>Name</label>
        <input value={name} onChange={e => setName(e.target.value)}/>
      </form>
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
      <Link to="/">Back</Link>
    </>
  )
}

export default NewProduct
