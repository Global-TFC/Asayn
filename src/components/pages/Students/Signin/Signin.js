import React from "react";
import SigninForm from "../../../includes/signin/Student-SignIn/SignIn";
import HomePage from "../../../screens/StuScreens/HomePage";

function Signin({ student }) {
  return <div>{student ? <HomePage student={student} /> : <SigninForm />}</div>;
}

export default Signin;
