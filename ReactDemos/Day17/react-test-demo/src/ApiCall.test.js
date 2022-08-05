import {shallow} from "enzyme"

import ApiCall from "./ApiCall"
import mockAxios from "axios"

import * as math from './Mat';

jest.mock('axios')


describe("testing api ", ()=>
{
  it("testcase1", ()=>
  {
  let wrapper = shallow(<ApiCall/>)
  console.log(wrapper.state())
  jest.spyOn(mockAxios, 'default').mockResolvedValue(
    {
      
        title:'title1',
        body:"body1"
       
    }
  )
  console.log(wrapper.state())
  // console.log({data})
  return wrapper.instance().func().then(data=> 
    {
     
      console.log(wrapper.state())
      expect(wrapper.state()).toEqual({title:'title1', body:'body1'})
    })
   
})

it('math function' , ()=>
{

  math.add = jest.fn().mockImplementation(add =>25);
  math.subtract = jest.fn().mockImplementation(subtract =>10);

  expect(math.add(12,12)).toEqual(25)
  expect(math.subtract(10,12)).toEqual(10)
})
})