const postKey = "post";

function posts() {
  const postContainer = document.querySelector(".post-wrapper");
  const posts = JSON.parse(window.sessionStorage.getItem(postKey));

  posts.forEach(function (post) {
    const postNode = document.createElement("div");
    const firstNode = postContainer.firstChild;
    postNode.className = "post";

    postNode.innerHTML = `
    <div class="post-title">
    <h2>${post.title}</h2>
    <div class="post-title__date">
      <p>2 декабря 2020</p>
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
  </div>`;
    postContainer.insertBefore(postNode, firstNode);
  });
}

posts();
