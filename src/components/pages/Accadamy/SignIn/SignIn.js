import React from "react";
import SignInForm from "../../../includes/signin/Teacher-SignIn/SignIn";
import Accadamypage from "../Accadamypage";

function SignIn({ teacher }) {
  return <div>{teacher ? <Accadamypage teacher={teacher} /> : <SignInForm />}</div>;
}

export default SignIn;
