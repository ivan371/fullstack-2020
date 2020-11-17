import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import Layout from "./Layout";
import PostItem from "./PostItem";
import {fetchPosts} from '../actions/posts'

const Main: React.FC = () => {
  const dispatch = useDispatch()
  const {postList, isLoading} = useSelector((state: State) => state.post)

  React.useEffect(() => {
    dispatch(fetchPosts())
  }, []);

  if (isLoading || !postList) {
    return <div className="loader">Loading...</div>
  }


  return (
    <Layout>
      <div className="post-wrapper">
        {postList.map((postId) => (
          <PostItem postId={postId} key={postId} />
        ))}
      </div>
    </Layout>
  );
};

export default Main;
