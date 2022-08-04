import { shallow } from "enzyme"
import Api from './Api'
import mockAxios from 'axios';
jest.mock('axios');
describe("test", ()=>
{
  it("testing api" , ()=>
  {
    let wrapper = shallow(<Api/>)
    jest.spyOn(mockAxios,'default').mockResolvedValue({
      data:
      {
        studentAge:90
      }
    })
  return wrapper.instance().func().then(data=>
    {
      console.log(wrapper.state())
     // expect (data).toEqual({me:20})
      
      console.log(wrapper.state())
    })
  })
})