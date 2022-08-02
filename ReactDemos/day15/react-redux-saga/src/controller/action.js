import { FETCH_POSTS, SET_POSTS } from "../types/post.types"

export const fetchPosts = ()=>
{  
  return { type : FETCH_POSTS};
  
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
  }