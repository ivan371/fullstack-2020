import React from "react";
import { withRouter, Link } from "react-router-dom";

const PostCreate = (props: any) => {
  function postCreate() {
    const button = document.querySelector(".form-button");
    const inputs = document.querySelectorAll("input");

    const post = {} as any;

    button!.addEventListener("click", async function (event) {
      event.preventDefault();
      inputs.forEach(function (input) {
        post![input.name] = input.value;
      });

      const date = new Date();
      post.date =
        date.getDate() + " " + date.getMonth() + " " + date.getFullYear();

      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(post),
      });

      props.history.push("/");
    });
  }

  React.useEffect(() => {
    postCreate();
  }, []);

  return (
    <div className="wrapper">
      <div className="left-block">
        <Link to="/">
          <button>На главную</button>
        </Link>
      </div>
      <div className="center-block">
        <div className="post">
          <form>
            <h3>Разместить пост</h3>
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
        </div>
        <div className="post-wrapper"></div>
      </div>
      <div className="right-block">правый блок</div>
    </div>
  );
};

export default withRouter(PostCreate);
