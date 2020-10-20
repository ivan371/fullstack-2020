/// <reference types="react-scripts" />

interface IPost {
  title: string;
  description: string;
  date: string;
  id: number;
}

interface ModalState {
  modalName: string
}

interface PostState {
  posts: any
  postList: []
  isLoading: boolean
  isError: boolean
}

interface State {
  modal: ModalState
  post: PostState
}