import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import PostCreate from "./components/PostCreate";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post-create">
          <PostCreate />
        </Route>
        <Route path="/post/:postId">
          <Post />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/">
          <div>Страница не найдена</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
