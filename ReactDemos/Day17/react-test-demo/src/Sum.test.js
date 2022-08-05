
const sum = require("./Sum");


describe("test suite 1", ()=>
{
it("testcase1", ()=>
{
  let data = 10;
  expect(data).toBe(10)
})
})

describe('Testing Sum File', () => { 
// it("testcase1", ()=>
// {
//   var actual = sum(2,3);
//   expect(actual).toBe(5)
// })
// it("testcase2", ()=>
// {
//   var actual = sum(1,3);
//   expect(actual).not.toBe(5)
// })

it("testcase3", ()=>
{
  var actual = sum(1,3);
  expect(actual).toEqual({name:'ajay'})
})

})