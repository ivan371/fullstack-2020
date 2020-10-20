import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from "react-router-dom";
import PostEdit from "./PostEdit";
import PostDelete from "./PostDelete";
import Layout from "./Layout";
import Modal from "./Modal";
import {openModal, closeModal} from '../actions/modal'
import {ModalNames} from '../constants/modalNames'

const Post: React.FC = () => {
  const params = useParams<{ postId: string }>();
  const dispatch = useDispatch()
  const postId = params.postId;

  const modalName = useSelector((state: State) => state.modal.modalName)
  const oldPost = useSelector((state: State) => state.post.posts[postId])
  const [post, setPost] = React.useState<IPost | null>(oldPost);

  

  const fetchPost = async () => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`);
    const postData: IPost = await response.json();

    setPost(postData);
  };

  React.useEffect(() => {
    if (!oldPost) {
      fetchPost();
    }
  }, []);

  return (
    <Layout>
      <Modal isModalOpen={modalName === ModalNames.EDIT}>
        <PostEdit />
      </Modal>
      <Modal isModalOpen={modalName === ModalNames.DELETE}>
        <PostDelete
          postId={postId}
          onCancel={() => dispatch(closeModal())}
        />
      </Modal>
      <div className="post-wrapper">
        {post ? (
          <div className="post">
            <div className="post-title">
              <h2>{post.title}</h2>
              <div className="post-title__date">
                <p>{post.date}</p>
              </div>
            </div>
            <div>
              <p>{post.description}</p>
            </div>
            <div className="post-footer">
              <img className="post-footer__image" src="images/me.jpg" />
              <p className="post-footer__author">Нагайко Иван</p>
            </div>
            <button
              className="edit-button"
              onClick={() => dispatch(openModal(ModalNames.EDIT))}
            >
              Редактировать пост
            </button>
            <button
              className="delete-button"
              onClick={() => dispatch(openModal(ModalNames.DELETE))}
            >
              Удалить пост
            </button>
          </div>
        ) : (
          <div className="loader">Loading...</div>
        )}
      </div>
    </Layout>
  );
};

export default Post;
