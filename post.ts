interface Post {
  title: string;
  description: string;
  id: string;
  date: string;
}

async function post() {
  const postId = window.location.search.substr(6, 1);

  const response = await fetch(`http://localhost:3000/posts/${postId}`);
  const post: Post = await response.json();

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
  postContainer.appendChild(postNode);

  const editButton = document.querySelector(".edit-button");
  const modal = document.querySelector(".modal");
  const modalInner = document.querySelector(".modal__inner");

  editButton.addEventListener("click", async function () {
    modal.classList.remove("modal-hidden");
  });

  const deleteButton = document.querySelector(".delete-button");

  deleteButton.addEventListener("click", async function () {
    await fetch(`http://localhost:3000/posts/${postId}`, {
      method: "DELETE",
    });

    window.location.href = "index.html";
  });

  modal.addEventListener("click", function () {
    modal.classList.add("modal-hidden");
  });

  modalInner.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

post();
