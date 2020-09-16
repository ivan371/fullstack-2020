const postKey = "post";

function postCreate() {
  const button = document.querySelector(".form-button");
  const inputs = document.querySelectorAll("input");
  const postList = JSON.parse(window.sessionStorage.getItem(postKey)) || [];

  const post = {};

  button.addEventListener("click", function (event) {
    event.preventDefault();
    inputs.forEach(function (input) {
      post[input.name] = input.value;
    });

    postList.push(post);

    window.sessionStorage.setItem(postKey, JSON.stringify(postList));
    window.location.href = "index.html";
  });
}

postCreate();
