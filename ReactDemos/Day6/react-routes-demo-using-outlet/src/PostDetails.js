import { useParams } from "react-router-dom";
const PostDetails =()=>
{
  let {category} = useParams();
  return(
    <h1> PostDetails 
      Details of {category} </h1>
  )
}

export default PostDetails;