import {all} from "redux-saga/effects"
import  { waitforfetchPosts} from "./sagas/post.saga";

export default function* rootSaga()
{
  yield all([waitforfetchPosts()]);
}