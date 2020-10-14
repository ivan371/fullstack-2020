import React from "react";
import Layout from "./Layout";
import PostItem from "./PostItem";

const Main: React.FC = () => {
  const [postList, setPostList] = React.useState<IPost[]>([]);

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
    <Layout>
      <div className="post-wrapper">
        {postList.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Main;
