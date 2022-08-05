import {shallow} from "enzyme"
import About from './About';


describe('test stuite for about', () => { 
it('testcase1', ()=>
{
  let wrapper=   shallow(<About/>)
  expect(wrapper.state()).toEqual({name:'ajay',age:20})
})  

it('testcase2', ()=>
{
  let wrapper=   shallow(<About/>)
  console.log("test case 2")
  expect(wrapper.contains(<div>About</div>)).toEqual(true) 
})  

it('testcase3', ()=>
{
  let wrapper=   shallow(<About/>)
  expect(wrapper.containsMatchingElement(<div>About</div>)).toEqual(true) 
})  
it('testcase4', ()=>
{
  let wrapper=   shallow(<About/>)
  expect(wrapper.containsAnyMatchingElements([(<div>About</div>),(<div>About1</div>)])).toEqual(true) 
}) 
})