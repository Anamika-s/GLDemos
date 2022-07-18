console.log('Closure')

let x = 100
setTimeout(function () {
  console.log(x)
}, 1000)

x = 11

function outer() {
  let a = 10
  var b = 20
  let inner = function () {
    console.log('Inner ', a, b)
  }
  return inner
}

let res = outer()
console.log(res)
res()
// console.log(a)
// console.log(b)
