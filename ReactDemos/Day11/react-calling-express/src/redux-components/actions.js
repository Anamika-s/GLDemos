
// export const increment =()=>
// {
//   return {
//      type: "INC"
//   }
// }

import axios from "axios"
import postService from "./services/post.service"
import { FETCH_POSTS, SET_POSTS } from "./types/posts.types"; 
// export const decrement =()=>
// {
//   return {
//      type: "DEC"
//   }
// }

// export const fetchPosts= async ()=>
// {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
//   return{
//     type:'FETCH_POSTS',
//     payload : res.data
//   }
// }



// export const fetchPosts= ()=>
// {
//   return async (dispatch , getState)=>
//   {
//    // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     const res = await postService.fetchPosts();

//     console.log("  DATA IS" + res)
//     dispatch(setPosts(res));
//   }
// }

export const fetchPosts= ()=>
{
  // return async (dispatch , getState)=>
  // {
  //  // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   const res = await postService.fetchPosts();

  //   console.log("  DATA IS" + res)
    return { type : FETCH_POSTS};
  // }
}


 export const  setPosts  = (posts ) =>
  {
    if(posts)
    {
      console.log("Within Set Post ")
      // console.log("INSIDE POST ACTION IT'S" , posts)
      console.log(posts)
      return{
        type:SET_POSTS,
        payload:posts,
      };
    }
 
  // const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  // return{
  //   type:'FETCH_POSTS',
  //   payload : res.data
  // }
}

