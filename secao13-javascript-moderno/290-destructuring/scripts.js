// O destructuring pode transfor itens de um array ou objeto em variáveis, simplificando isso em uma linha.

const fruits = ["Maçã", "Banana", "Limão"]

const [f1, f2, f3] = fruits

console.log(f2)
console.log(f3)

const productDetails = {
    name: "Mouse",
    price: 59.99,
    category: "Periféricos",
    color: "cinza"
}

const { name: productName, price, category: productCategory, color } = productDetails

console.log(`O nome do produto é ${productName}, ele custa R$${price}, é da categoria ${productCategory}, e tem a cor ${color}.`)
