const assert = require ('chai').assert;
const app  = require('../hello').helloMsg;
const add = require("../hello").add;
// Test Suite which will conatin test cases
// describe('MESSAGE', function() 
// {
      
// it('MESSAGE' ,functions()
// {

// })

// }) 

// TESTING
// AAA
//  A > Arrange , create env , create objects by which we can call methods  that need to be tested
//  A > Act  > Calling the method under test
//  A > Assert  > Checking whether we get exp res or not

describe('This is a test suite', function()
{
  it('Testing Hello Method with static values', function()
  {
    assert.equal('hello' , 'hello');

  })
  it('Testing helloMsg Method', function()
  {
    var res = app();
    assert.equal(res , 'hello');
    assert.typeOf(res,'string');

  })
  
  it('Testing helloMsg Method return type', function()
  {
    var res = app();
    
    assert.typeOf(res,'string');

  })
})

describe('This is for testing add method', function()
{
  it('3 and 5 shud return 8', function()
  {
    var res = add(3,5);
    assert.equal(res, 8);
  })
  it('add function should return integer', function()
  {
    var res = add(3,5);
    assert.typeOf(res, 'number');
  })
  it('sum of 3 and 5 shud be more than 3', function()
  {
    var res = add(3,5);
    assert.isAbove(res, 3);
  })


})


