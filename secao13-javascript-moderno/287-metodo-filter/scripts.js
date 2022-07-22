const arr = [1, 2, 3, 4, 5]

console.log(arr)

//Passa por cada posição do array filtrando.

const HighNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(HighNumbers)

const users = [
    { name: "Hudson", available: true },
    { name: "Samuel", available: false },
    { name: "Soares", available: false },
    { name: "Santos", available: true },
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)