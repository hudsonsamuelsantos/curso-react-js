const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = name => {
    if (name) {
        return "Olá " + name + "!"
    } else {
        return "Olá"
    }
}

console.log(greeting("Hudson"))
console.log(greeting())

const arrowTest = () => console.log("Ok!")

arrowTest()

//Erro comum com o this perdendo a referência do pai.

const userTest = {
    name: "Hudson",
    sayUserName() {
        setTimeout(function () {
            console.log(this)
            console.log("Username: " + this.name)
        })
    }
}

userTest.sayUserName()

//Solução com JS puro e com Arrow

const user = {
    name: "Hudson",
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log("Username: " + self.name)
        }, 500)
    },

    //Na Arrow Function o this referencia corretamente o pai.

    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log("Username: " + this.name)
        }, 700)
    }

}

user.sayUserName()
user.sayUserNameArrow()