import React from "react";
import { useParams } from "react-router-dom";
import PostEdit from "./PostEdit";
import PostDelete from "./PostDelete";
import Layout from "./Layout";
import Modal from "./Modal";

const Post: React.FC = () => {
  const params = useParams<{ postId: string }>();
  const [isPostEditModalOpen, setIsPostEditModalOpen] = React.useState(false);
  const [isPostDeleteModalOpen, setIsPostDeleteModalOpen] = React.useState(
    false
  );
  const [post, setPost] = React.useState<IPost | null>();

  const postId = params.postId;

  const fetchPost = async () => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`);
    const postData: IPost = await response.json();

    setPost(postData);
  };

  React.useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Layout>
      <Modal
        isModalOpen={isPostEditModalOpen}
        setIsModalOpen={setIsPostEditModalOpen}
      >
        <PostEdit />
      </Modal>
      <Modal
        isModalOpen={isPostDeleteModalOpen}
        setIsModalOpen={setIsPostDeleteModalOpen}
      >
        <PostDelete
          postId={postId}
          onCancel={() => setIsPostDeleteModalOpen(false)}
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
              onClick={() => setIsPostEditModalOpen(true)}
            >
              Редактировать пост
            </button>
            <button
              className="delete-button"
              onClick={() => setIsPostDeleteModalOpen(true)}
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
