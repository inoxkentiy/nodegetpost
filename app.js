/*let rannums = [5, 9, 1, 5, 6, 12, 8, 6, 24, 2, 8]
let sum = 0
rannums.map(item => {
        sum += item
})
console.log(sum)
let word = 'казeк'
let isPalindrom = true
for (let i = 0, k = word.length - 1; i < word.length, k > 0; i++, k--) {
    if (word[i] != word[k]) {
isPalindrom=false
    }
}
console.log(isPalindrom)*/
const http = require("http")
function handler(request, response) {
    if (request.method === "GET") {
        response.end("Привет,мир!")
    } else if (request.method === "POST") {

        response.end("Как делишки?")
    }
}
let server = http.createServer(handler)

let port = process.argv[2]

server.listen(port, function () {
    console.log(`Сервер запущен на порту ${port}`)
})
/*let math = require("./modules/math")
let first = math.plus(15, 46)
console.log(first)
let second = math.minus(15, 46)
console.log(second)
let third = math.divide(15, 46)
console.log(third)
let fourth = math.umnozh(15, 46)
console.log(fourth)*/
