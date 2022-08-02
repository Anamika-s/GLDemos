import {takeEvery, call , put, throttle } from "redux-saga/effects";
import { setPosts } from "./controller/action";
import postService from "./Service/post.service";
import { FETCH_POSTS } from "./types/post.types";
const fetchPosts =  async() =>
{
         const response = await postService.fetchPosts();
         return response;
}


// Generator Function
function* fetchAllPosts(action)
{
    
   try{
         const posts = yield call (fetchPosts);
         yield put(setPosts(posts))   
   } 
   catch(error)
   {  
    console.log(error)

   }
}
// watcher function, which keeps watching action types 
export function* waitforfetchPosts()
{
  yield takeEvery(FETCH_POSTS, fetchAllPosts)
}