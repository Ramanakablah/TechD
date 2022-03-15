import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <div className="button">
      <Link to="sign-up">
        <button className="btn signup">SignUp</button>
      </Link>
      <Link to="login">
        <button className="btn login">LogIn</button>
      </Link>
    </div>
  );
}
