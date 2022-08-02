import axios from "axios";
function Service()
{
  const fetchPosts1 =  async () =>
  {
      const res =  await  axios.get("https://jsonplaceholder.typicode.com/posts");
      // console.log(res.data)
      return res.data;
  }
   


return{
  fetchPosts1
}; 
}

const postService  = Service();
export default postService;