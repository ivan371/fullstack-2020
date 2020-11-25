import React from "react";
import { Link } from "react-router-dom";
import AuthButton from './AuthButton'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div className="wrapper">
        <div className="left-block">
          <Link to="/post-create">
            <button>Разместить пост</button>
          </Link>
          <Link to="/">
            <button>На главную</button>
          </Link>
        </div>
        <div className="center-block">{children}</div>
        <div className="right-block"><AuthButton /></div>
      </div>
    </div>
  );
};

export default Layout;
