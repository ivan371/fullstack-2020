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
        postList: [...state.postList, ...action.payload.result],
        posts: { ...state.posts, ...action.payload.entities.post},
        isLoading: false,
        isError: false
      }
    case POSTS_FETCH: 
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case POSTS_FETCH_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false
      }
  }

  return state
}