import React from "react";
import { Link } from "react-router-dom";
import PostDelete from "./PostDelete";
import Modal from "./Modal";

interface IProps {
  post: IPost;
}

const PostItem: React.FC<IProps> = (props) => {
  const { post } = props;
  const [isPostDeleteModalOpen, setIsPostDeleteModalOpen] = React.useState(
    false
  );

  return (
    <div className="post">
      <Modal
        isModalOpen={isPostDeleteModalOpen}
        setIsModalOpen={setIsPostDeleteModalOpen}
      >
        <PostDelete
          postId={post.id.toString()}
          onCancel={() => setIsPostDeleteModalOpen(false)}
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
              setIsPostDeleteModalOpen(true);
            }}
          >
            Удалить пост
          </button>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
