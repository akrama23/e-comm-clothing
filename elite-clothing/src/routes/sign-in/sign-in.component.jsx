import { signInWithGooglepopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

  const logGoogleUser = async () =>{
    const response = await signInWithGooglepopup();
    console.log(response);
  }

  return (
    <div>
      <h1>Sign-In</h1>
    </div>
  );
};


export default SignIn;
