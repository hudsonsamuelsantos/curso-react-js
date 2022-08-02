import { useEffect, useState } from 'react';
import './App.css';
import { useFecth } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {

  //Hook customizado
  const { data: items } = useFecth(url)

  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  //useEffect é usado para que certas ações sejam tomadas apenas uma vez e não sempre que o react "re-renderizar"
  /*useEffect(() => {
    async function fetchProducts() {
      
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }

    fetchProducts()
  }, [])
  
  console.log(products)*/

  //Add novos produtos
  const handleSubmit = async (e) => {
    //Impedir que form seja enviado da maneira tradicional
    e.preventDefault()

    const product = {
      name,
      price,
    }
    
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //Transformando o obj em json
      body: JSON.stringify(product)
    })

    const addedProduct = await res.json()

    setProducts((prevProducts) => [...prevProducts, addedProduct])
    setName("")
    setPrice("")
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {items && items.map(product => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>
      <div className='add_product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço:
            <input type="text" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="Adicionar" />
        </form>
      </div>
    </div>
  );
}

export default App;
