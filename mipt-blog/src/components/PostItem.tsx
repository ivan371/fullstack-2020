import React from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import PostDelete from "./PostDelete";
import Modal from "./Modal";
import {openModal, closeModal} from '../actions/modal'
import {ModalNames} from '../constants/modalNames'

interface IProps {
  postId: string;
}

const PostItem: React.FC<IProps> = (props) => {
  const { postId } = props;
  const dispatch = useDispatch()
  const post = useSelector((state: State) => state.post.posts[postId])
  const modalName = useSelector((state: State) => state.modal.modalName)

  return (
    <div className="post">
      <Modal isModalOpen={modalName === ModalNames.DELETE}>
        <PostDelete
          postId={post.id.toString()}
          onCancel={() => dispatch(closeModal())}
        />
      </Modal>
      <Link to={"/post/" + post.id}>
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
          <button
            className="post-footer__delete-button"
            onClick={(event) => {
              event.preventDefault();
              dispatch(openModal(ModalNames.DELETE));
            }}
          >
            Удалить пост
          </button>
        </div>
      </Link>
    </div>
  );
};

export default PostItem
