import {all} from "redux-saga/effects";
import {waitforfetchPosts} from './postSagas'

export default function* rootSaga()
{
  yield all ([waitforfetchPosts()]);
}