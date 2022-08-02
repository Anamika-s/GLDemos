import axios from "axios";
function PostService()
{
  const fetchPosts = async() =>
  {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response.data)
    return response.data;
  }


return{
  fetchPosts
};
}

const postService = PostService();
export default postService; 