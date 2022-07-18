console.log('Generator functions')

function* steps() {
  let a = 10
  let b = 20
  console.log(a + b)
  yield 'step 1 cpmpleted'
  console.log(a - b)
  yield 'step 2 cpmpleted'
  console.log(a * b)
  yield 'step 3 cpmpleted'
  console.log(a + b)
  yield 'step 1 cpmpleted'
  return 'all steps completed'
}

let stp = steps()
function getSteps() {
  console.log(stp.next().value)
}
getSteps()
