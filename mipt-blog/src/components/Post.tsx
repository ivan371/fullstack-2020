import React from "react";
import { withRouter, Link } from "react-router-dom";

interface IPost {
  title: string;
  description: string;
  id: string;
  date: string;
}

const Post: React.FC = (props: any) => {
  async function post() {
    const postId = props.match.params.postId;

    const response = await fetch(`http://localhost:3000/posts/${postId}`);
    const post: IPost = await response.json();

    const postContainer = document.querySelector(".post-wrapper");
    const postNode = document.createElement("div");
    postNode.className = "post";

    postNode.innerHTML = `
      
      <div class="post-title">
      <h2>${post.title}</h2>
      <div class="post-title__date">
        <p>${post.date}</p>
      </div>
    </div>
    <div>
      <p>
        ${post.description}
      </p>
    </div>
    <div class="post-footer">
      <img class="post-footer__image" src="images/me.jpg" />
      <p class="post-footer__author">Нагайко Иван</p>
    </div>
    <button class="edit-button">Редактировать пост</button>
    <button class="delete-button">Удалить пост</button>`;
    postContainer!.appendChild(postNode);

    const editButton = document.querySelector(".edit-button");
    const modal = document.querySelector(".modal");
    const modalInner = document.querySelector(".modal__inner");

    editButton!.addEventListener("click", async function () {
      modal!.classList.remove("modal-hidden");
    });

    const deleteButton = document.querySelector(".delete-button");

    deleteButton!.addEventListener("click", async function () {
      await fetch(`http://localhost:3000/posts/${postId}`, {
        method: "DELETE",
      });

      window.location.href = "index.html";
    });

    modal!.addEventListener("click", function () {
      modal!.classList.add("modal-hidden");
    });

    modalInner!.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }

  React.useEffect(() => {
    post();
  }, []);

  return (
    <div>
      <div className="modal modal-hidden">
        <div className="modal__inner">
          <div className="post">
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
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="left-block">
          <a href="post-create.html">
            <button>Разместить пост</button>
          </a>
          <Link to="/">
            <button>На главную</button>
          </Link>
        </div>
        <div className="center-block">
          <div className="post-wrapper"></div>
        </div>
        <div className="right-block">правый блок</div>
      </div>
    </div>
  );
};

export default withRouter(Post);
