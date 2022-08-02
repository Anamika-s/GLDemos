import React ,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {fetchPosts} from './action';

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector( state => state.postReducer.posts);
  
useEffect(() => 
{
 dispatch(fetchPosts())
} , []);  

console.log("POST COM " + posts)

  return (
    <div> 
    
     Posts : {posts.map((post=>
     (
      <h2> {post.title} </h2>)))} 
     

      


    </div>
  )
}

export default Post