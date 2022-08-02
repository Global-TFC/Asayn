import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/Authentication/Apps/Firebase";
import SignUpForm from "../../../includes/signup/Teacher-SignUp/SignUp";
import Accadamypage from "../Accadamypage";

function SignUp() {
  const [teacher] = useAuthState(auth);
  return <div>{teacher ? <Accadamypage teacher={teacher} /> : <SignUpForm />}</div>;
}

export default SignUp;
