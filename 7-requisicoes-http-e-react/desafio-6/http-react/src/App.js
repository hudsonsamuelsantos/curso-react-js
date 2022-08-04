import { useState } from 'react';
import './App.css';
import { useFecth } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {

  //Hook customizado
  const { data: items, httpConfig, loading, error } = useFecth(url)

  //const [products, setProducts] = useState([])
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
    
    /*const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //Transformando o obj em json
      body: JSON.stringify(product)
    })

    const addedProduct = await res.json()

    setProducts((prevProducts) => [...prevProducts, addedProduct])*/

    httpConfig(product, "POST")
    
    setName("")
    setPrice("")
  }

  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>

      {error && <p>{error}</p>}

      {loading && <p>Carregando produtos...</p>}

      {!loading && 
      <ul>
        {items && items.map(product => (
          <div className='product'>
            <li key={product.id}>{product.name} - R$: {product.price}
            <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          </div>
        ))}
      </ul>}
      
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

          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Adicionar" />}
          
        </form>
      </div>
    </div>
  );
}

export default App;
