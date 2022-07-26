import React from 'react'

import styles from "./CarDetails.module.css"

function CarDetails({ car }) {
    return (
        <div className={styles.car_card}>
            <h3>{car.name}</h3>
            <p>Marca: {car.brand}</p>
            {car.km === 0 && (<p>Esse carro é novo!</p>)}
        </div>
    )
}

export default CarDetails