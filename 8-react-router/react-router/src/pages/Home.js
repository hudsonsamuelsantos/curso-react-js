import React from 'react'
import { useFecth } from '../hooks/useFetch'

import './Home.css'

const url = "http://localhost:3000/products"

function Home() {

  const { data: items, loading, error } = useFecth(url)

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <div>
        <ul className="products">
          {items && items.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home