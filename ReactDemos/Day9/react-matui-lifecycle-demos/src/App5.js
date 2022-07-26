import Error from './Error'
import img1 from  './logo192.png'
import img2 from './logo512.png'
import Image from './Image';
 function App5()
{
return (
   <>
   <Error>
   <Image name={img1} width="100px"  height="100px"/>
   </Error>
   <Error>
  <Image name={img2}  width="50px"  height="50px"/>
  </Error>
  <Error>
  <Image name="noimage"  width="100px"  height="100px"/></Error>
   <Error> <Alert message="aaaa"/>
</Error> </>)
}


function Alert({message})
{ 
  if(typeof(message)!=='string' || !message)
  throw new Error("mesaage shud be string")
  return (<h1> Hello  {message} </h1>)

}


export default App5
