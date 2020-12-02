import React from "react";

const PostEdit: React.FC = () => {
  return (
    <form>
      <h3>Редактировать пост</h3>
      <div className="form-wrapper">
        <div className="form-item">
          <label>
            <p>Название</p>
          </label>
          <input type="text" name="title"></input>
        </div>
        <div className="form-item">
          <label>
            <p>Описание</p>
          </label>
          <input type="text" name="description"></input>
        </div>
      </div>
      <button type="submit" className="form-button">
        Разместить
      </button>
    </form>
  );
};

export default PostEdit;
