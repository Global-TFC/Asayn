import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/Authentication/Apps/Firebase";

import SignUpForm from "../../../includes/signup/Student-SignUp/SignUp";
import HomePage from "../../../screens/StuScreens/HomePage";

function SignUp() {
  const [student] = useAuthState(auth);
  return <div>{student ? <HomePage student={student} /> : <SignUpForm />}</div>;
}

export default SignUp;
