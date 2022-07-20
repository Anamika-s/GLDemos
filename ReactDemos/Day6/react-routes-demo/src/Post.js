import { useParams , useSearchParams } from "react-router-dom";
const Post =()=>
{
  let {category, id} = useParams();
  let [searchParams, setsearchParams] = useSearchParams();
console.log(searchParams)
console.log(searchParams.get('price'))
console.log(searchParams.get('sort'))
  return(
    <>
    
    <h1> Data is received {category} 
    ID is {id} </h1></>
  )
}

export default  Post;