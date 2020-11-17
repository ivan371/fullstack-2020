import {Dispatch} from 'redux'
import {postsNormalize} from '../schema/posts'

export const POSTS_FETCH = 'POSTS_FETCH'
export const POSTS_FETCH_SUCCESS = 'POSTS_FETCH_SUCCESS'
export const POSTS_FETCH_ERROR = 'POSTS_FETCH_ERROR'

function postsFetchSuccess(posts: any) {
  return {
    type: POSTS_FETCH_SUCCESS,
    payload: posts
  }
}

function postsFetch() {
  return {
    type: POSTS_FETCH,
  }
}

function postsFetchError() {
  return {
    type: POSTS_FETCH_ERROR
  }
}

export function fetchPosts() {
  return async (dispatch: Dispatch) => {
    let posts;

    try {
      dispatch(postsFetch())
      
      const response = await fetch("http://localhost:3000/posts");

      posts = await response.json();

      dispatch(postsFetchSuccess(postsNormalize(posts)))

    } catch(err) {
      dispatch(postsFetchError())
    }
  }

}