import React, { useEffect } from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import { fetchPosts } from './action';
const Posts = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  console.log(state)
  useEffect(()=>
  {
    dispatch(fetchPosts())
  },[])

  const renderMethod = () =>
  {
 if(state.loading){
     return <h1> Loading Records </h1>
  }
  else 
  if(state.error)
  {
    return <h3> ERROR  </h3>
  }
  return state.posts.map((post)=>
  {
       return <h3> {post.title} </h3>
  })
};
  return (   <> 
  {renderMethod()}
  </>
    // <div> List of Posts  
    //   {posts.map(post => {
    //     return <h3> {post.title} </h3>
    //   })} </div>
  )
}

export default Posts