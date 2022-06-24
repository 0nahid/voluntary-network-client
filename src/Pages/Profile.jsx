import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

export default function Profile() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <div class="card w-96 mx-auto glass">
        <figure><img src={user.photoURL} alt={user.displayName} /></figure>
        <div class="card-body">
          <h2 class="card-title font-bold">Name:{user.displayName}</h2>
          <p>Email: {user.email}</p>
          <p>Last Login: {user.metadata.lastSignInTime}</p>
        </div>
      </div>
    </div>
  )
}
