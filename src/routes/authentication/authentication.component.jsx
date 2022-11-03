import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

const Authentication = () => {

  // SIGN IN BY GOOGLE REDIRECT (SIGNING IN A DIFFERENT PAGE, NOT POPUP)
  // async function redirectResultFunc() {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }
  // useEffect(() => {
  //   redirectResultFunc();
  // }, []);



  return (
    <div>
      <div>signIn Page</div>
      <SignInForm/>
      <SignUpForm />
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default Authentication;
