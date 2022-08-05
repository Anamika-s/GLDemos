import {shallow} from "enzyme"
import Blog from './Blog';

describe.skip('first', () => {
  
  it('testcase1' , ()=>
  {
  let wrapper = shallow(<Blog/>)
  console.log(wrapper.debug())
   expect(wrapper.find('.liClass').length).toBe(3)
  })

  it('testcase2' , ()=>
  {
  let wrapper = shallow(<Blog/>)
  
  expect(wrapper.find('.liClass').at(0).key()).toBe("key1")
  })
  // testing span element
  it('testcase3' , ()=>
  {
  let wrapper = shallow(<Blog/>)
  expect(wrapper.find('.numbers').childAt(0).type()).toBe('span'); 
  })
  it('testcase4' , ()=>
  {
  let wrapper = shallow(<Blog/>)
  expect(wrapper.find('ul').children().length).toBe(3) 
  })
  it('testcase5' , ()=>
  {
  let wrapper = shallow(<Blog/>)
  expect(wrapper.find('.my-button').hasClass('disabled')).toBe(true) 
  })

 })