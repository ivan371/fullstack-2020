const postKey = "post";

function postCreate() {
  const button = document.querySelector(".form-button");
  const inputs = document.querySelectorAll("input");
  const postList = JSON.parse(window.sessionStorage.getItem(postKey)) || [];

  const post = {};

  button.addEventListener("click", async function (event) {
    event.preventDefault();
    inputs.forEach(function (input) {
      post[input.name] = input.value;
    });

    postList.push(post);
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

    window.location.href = "index.html";
  });
}

postCreate();
