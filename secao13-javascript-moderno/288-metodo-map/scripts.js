//Map percorre todos elementos do array com intenção de modificá-los.

const products = [
    { name: "Camisa", price: 10.99, category: "Roupas" },
    { name: "Cafeteira", price: 88.99, category: "Eletro" },
    { name: "Fogão", price: 1090.99, category: "Eletro" },
    { name: "Calça", price: 90.99, category: "Roupas" }
]

console.log(products)

products.map(product => {
    if (product.category === "Roupas") {
        product.onSale = true
    }
})

console.log(products)