import { SET_POSTS } from "./types/post.types";
const postReducer = (state ={}, action)=>
{ console.log("MY STATE IS " + action.type)
    switch(action.type)
    { 
     case SET_POSTS: 
     {
       console.log(action.payload)
     
    //  action.payload;
    //  console.log(this.posts);
  
    // console.log(action.posts)
     return {...state, posts: action.payload};
      
      } // return action.payload
        default : return state;
    }
}

export default postReducer;