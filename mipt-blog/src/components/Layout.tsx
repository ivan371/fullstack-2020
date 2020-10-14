import React from "react";
import { Link } from "react-router-dom";

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
        <div className="right-block">правый блок</div>
      </div>
    </div>
  );
};

export default Layout;
