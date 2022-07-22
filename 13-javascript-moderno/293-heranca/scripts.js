class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

class ProductWithAtributes extends Product {
    constructor(name, price, colors) {
        //Método super para utilizar props herdadas
        super(name, price)
        this.colors = colors
    }

    ShowColors() {
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAtributes("Chapéu", 45.99, ["Preto", "Verde", "Azul",])

console.log(hat.name)

console.log(hat.productWithDiscount(10))

hat.ShowColors()