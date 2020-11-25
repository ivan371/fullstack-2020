import {Dispatch} from 'redux'
import {postsNormalize} from '../schema/posts'
import { ApiClient } from '../services'

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

export function fetchPosts(page: number) {
  return async (dispatch: Dispatch) => {
    let posts;

    try {
      dispatch(postsFetch())
      
      let response = await ApiClient(`posts/?page=${page}`);

      if (response.status !== 200) {
        const refresh = window.localStorage.getItem('refresh')
        response = await ApiClient("token/refresh/", {
          method: 'POST',
          headers: {
            "Content-Type": "Application/json",
          }, body: JSON.stringify({ refresh })
        });
        const data = await response.json()
        
        window.localStorage.setItem('auth', data.access)
        response = await ApiClient(`posts/?page=${page}`);
      }

      posts = await response.json();

      dispatch(postsFetchSuccess(postsNormalize(posts.results)))

    } catch(err) {
      dispatch(postsFetchError())
    }
  }

}