import React from "react";
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import PostCreate from "./components/PostCreate";
import Post from "./components/Post";
import initStore from './store'

function App() {
  return (
    <Provider store={initStore()}>
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
    </Provider>
  );
}

export default App;
