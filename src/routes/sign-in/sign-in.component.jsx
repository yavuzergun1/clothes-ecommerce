import { signInWithGooglePopup } from "../../utils/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
      const response = await signInWithGooglePopup();
      console.log(response);
  };
    return (
      <div>
        <div>signIn</div>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      </div>
    );
}

export default SignIn;
