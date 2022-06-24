import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import auth from "../../firebase.init";
import Loading from '../Loader/Loader';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/manage";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(user);
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    <Loading />
  }
  return (
    <div className="flex h-screen justify-center items-center px-4 lg:px-12">
      <div className="card w-full max-w-md bg-base-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline border-primary flex items-center content-center rounded-full hover:btn-primary"
          >
            <FcGoogle className="text-2xl mr-2"></FcGoogle>Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}
