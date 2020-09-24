const postKey = "post";

async function posts() {
  const postContainer = document.querySelector(".post-wrapper");
  let posts;

  try {
    const response = await fetch("http://localhost:3000/posts", {
      headers: {
        "Content-Type": "Application/json",
      },
    });
    posts = await response.json();
  } catch (err) {
    console.log(err);
  }

  posts.forEach(function (post) {
    const postNode = document.createElement("div");
    const firstNode = postContainer.firstChild;

    postNode.className = "post";

    postNode.innerHTML = `
    <a href="post.html?post=${post.id}">
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
  </div></a>`;
    postContainer.insertBefore(postNode, firstNode);
  });
}

posts();
