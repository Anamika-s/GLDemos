import postService from "../services/post.service";
import { FETCH_POSTS, SET_POSTS } from "../types/posts.types";
import {takeEvery, call, put} from  'redux-saga/effects';
import { setPosts } from "../actions";
import axios from "axios";
const fetchPosts1 =   async () =>
  {
      const res =   await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data)
      return res.data;
  }
   


function* fetchPosts(action)
{
  console.log("action" + action.type)
  
  try{
 
const posts = yield call(fetchPosts1);
// yield put({type: SET_POSTS, posts})
console.log("IN SAGA "  + posts)
 
yield put(setPosts(posts))
  }
  catch(e)
  {
    console.log(e)

  }
}
export function* waitforfetchPosts()
{
  yield takeEvery(FETCH_POSTS, fetchPosts);
}