import {POSTS_FETCH_SUCCESS, POSTS_FETCH, POSTS_FETCH_ERROR} from '../actions/posts'

const initialState: State['post'] = {
  postList: [],
  posts: {},
  isLoading: false,
  isError: false,
}

export default function posts(state = initialState, action: any) {
  switch(action.type) {
    case POSTS_FETCH_SUCCESS:
      return {
        postList: action.payload.result,
        posts: action.payload.entities.post,
        isLoading: false,
        isError: false
      }
    case POSTS_FETCH: 
      return {
        isLoading: true,
        isError: false
      }
    case POSTS_FETCH_ERROR:
      return {
        isError: true,
        isLoading: false
      }
  }

  return state
}