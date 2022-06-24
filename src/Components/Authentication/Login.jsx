import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="flex h-screen justify-center items-center px-4 lg:px-12">
      <div className="card w-full max-w-md bg-base-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <button
            // onClick={() => signInWithGoogle()}
            className="btn btn-outline border-primary flex items-center content-center rounded-full hover:btn-primary"
          >
            <FcGoogle className="text-2xl mr-2"></FcGoogle>Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}
