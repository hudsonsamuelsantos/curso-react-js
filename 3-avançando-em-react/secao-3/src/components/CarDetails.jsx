import React from 'react'

function CarDetails({ brand, km, color }) {
    return (
        <div>
            <h2>Detalhes do carro:</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>KM: {km}</li>
                <li>Cor: {color}</li>
            </ul>
            {km === 0 && <p>Esse carro é novo!</p>}
        </div>
    )
}

export default CarDetails