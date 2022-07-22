// Utilizado em arrays e objetos para construir novos valores dessees dados em outros objetos ou arrays.
// Podemos unir vários, ou adicionar valores de um objetoa outro.

//Em arrays

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)

const arr4 = [0, ...arr1, 4]

console.log(arr4)

//Em objetos

const carName = { name: "Gol" }
const carBrand = { brand: "VW" }
const otherInfos = { km: 100000, price: 49000 }

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 }

console.log(car)