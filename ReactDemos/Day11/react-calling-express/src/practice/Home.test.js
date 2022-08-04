
import Home from './Home'

import {shallow} from "enzyme"

describe("Home Page Testing", ()=>
{
it('se', ()=>
{
  let wrapper = shallow(<Home/>)
//  console.log(wrapper.debug())
 expect(wrapper.exists(".Home")).toEqual(true)
})  

})