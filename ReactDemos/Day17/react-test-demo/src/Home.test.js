import  {shallow}  from "enzyme";
import Home from './Home';

describe("testing home com ", ()=>
{
  it('testcase1forhome', ()=>
  {
    let wrapper =  shallow(<Home/>)
    console.log(wrapper.debug())
    expect(wrapper.exists('.hmlclass')).toEqual(true)
  })
})

