console.log('Generator Functions')

//  Array > 1 Billion numbers
// We do not want to reserve that much memory
// We want to generate numbers on the fly

function* numbersGen() {
  let i = 0
  while (true) yield ++i
  //  yield 1;
  //  yield 2;
  //  yield 3;
  //  yield 4;
}

let gen = numbersGen()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
