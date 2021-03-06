/** @format */

import React from "react";
import Icon from "assets/voteIcon.png";
import SideImage from "components/SideImage";
import LoginHeader from "components/LoginHeader";
import LoginForm from "components/LoginForm";
import { Page } from "constants/general";

import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();

  const handleCreate = () => {
    history.push("/signup");
  };

  const handleLogin = (e) => {
    history.push("/home");
  };

  return (
    <Page>
      <SideImage primaryImage={Icon} marketingText={"SimplyVote"} />
      <LoginHeader
        fadedText="DON'T HAVE AN ACCOUNT?"
        actionText="CREATE ACCOUNT"
        onClick={handleCreate}
      />
      <LoginForm
        header="Welcome back!"
        showConfirmPassword={false}
        showUsername={false}
        onClick={handleLogin}
        loginText="Login"
        snackBar="Login Successful."
        login={true}
      />
    </Page>
  );
};

export default Login;
