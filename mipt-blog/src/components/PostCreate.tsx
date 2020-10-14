import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "./Layout";

const PostCreate = () => {
  const history = useHistory();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = React.useCallback(
    async (event: React.SyntheticEvent) => {
      event.preventDefault();
      const date = new Date();

      if (!title || !description) {
        return;
      }

      const post: Omit<IPost, "id"> = {
        date: date.getDate() + " " + date.getMonth() + " " + date.getFullYear(),
        title,
        description,
      };

      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(post),
      });

      history.push("/");
    },
    []
  );

  return (
    <Layout>
      <div className="post">
        <form>
          <h3>Разместить пост</h3>
          <div className="form-wrapper">
            <div className="form-item">
              <label>
                <p>Название</p>
              </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              ></input>
            </div>
            <div className="form-item">
              <label>
                <p>Описание</p>
              </label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              ></input>
            </div>
          </div>
          <button type="submit" className="form-button" onClick={handleSubmit}>
            Разместить
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default PostCreate;
