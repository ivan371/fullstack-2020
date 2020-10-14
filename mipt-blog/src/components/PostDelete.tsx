import React from "react";
import { useHistory } from "react-router-dom";

interface IPostDeleteProps {
  postId: string;
  onCancel: () => void;
}

const PostDelete: React.FC<IPostDeleteProps> = ({ postId, onCancel }) => {
  const history = useHistory();

  const handlePostDelete = async () => {
    await fetch(`http://localhost:3000/posts/${postId}`, {
      method: "DELETE",
    });
    history.push("/");
  };

  return (
    <div>
      <h3>Вы действительно хотите удалить пост?</h3>
      <div className="buttonCouple">
        <button onClick={handlePostDelete}>Удалить</button>
        <button onClick={onCancel}>Отмена</button>
      </div>
    </div>
  );
};

export default PostDelete;
