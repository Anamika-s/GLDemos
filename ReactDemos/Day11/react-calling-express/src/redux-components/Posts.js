import { Button } from '@material-ui/core'
import axios from 'axios'
import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './actions'
// import { fetchPosts1} from  './services/post.service';
 
 
const Posts = () => {
  const dispatch = useDispatch()
   const posts = useSelector(state => state.postReducers.posts);
  //  console.log(first)
  console.log("NOW POST IS " + posts);
  useEffect(()=>
  { 
      dispatch(fetchPosts())
   },[])
    
  console.log("IN POST FILE  " + posts) 
  console.log("INSIDE POST THIS IS NOW " + posts)
  return (<> <div>
     Posts :  {posts.map((post=>
      (<h2> {post.title} </h2>)))} </div>
       
     
     
 </>
  )
}

export default Posts