import React from "react";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  const [postList, setPostList] = React.useState();

  async function posts() {
    let posts;

    try {
      const response = await fetch("http://localhost:3000/posts", {
        headers: {
          "Content-Type": "Application/json",
        },
      });
      posts = await response.json();

      setPostList(posts);
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    posts();
  }, []);

  return (
    <div className="wrapper">
      <div className="left-block">
        <Link to="/post-create">
          <button>Разместить пост</button>
        </Link>
      </div>
      <div className="center-block">
        <div className="post-wrapper">
          {postList
            ? (postList! as any).map((post: any) => (
                <div className="post" key={post.id}>
                  <Link to={"/post/" + post.id}>
                    <div className="post-title">
                      <h2>{post.title}</h2>
                      <div className="post-title__date">
                        <p>{post.date}</p>
                      </div>
                    </div>
                    <div>
                      <p>{post.description}</p>
                    </div>
                    <div className="post-footer">
                      <img className="post-footer__image" src="images/me.jpg" />
                      <p className="post-footer__author">Нагайко Иван</p>
                    </div>
                  </Link>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="right-block">правый блок</div>
    </div>
  );
};

export default Main;
