import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
export default function AddActivities() {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    axios.post('https://gentle-escarpment-02444.herokuapp.com/api/activities', data)
      .then(res => {
        if (res.status === 200) {
          toast.success('Activity added successfully');
        }
        reset();
      });
  }
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 container mx-auto">
      <div className="m-5 w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control p-5">
            <label className="input-group input-group-vertical">
              <span>Email</span>
              <input type="email" value={user.email} {...register("email", {})} />
            </label>
          </div>
          <div className="form-control p-5">
            <label className="input-group input-group-vertical">
              <span>Title</span>
              <input type="text" required placeholder="Title" {...register("title", { min: 2 })} />
            </label>
          </div>
          <div className="form-control p-5">
            <label className="input-group input-group-vertical">
              <span>Image</span>
              <input type="url" required placeholder="Image URL" {...register("img", { min: 2 })} />
            </label>
          </div>
          <button type="submit" className='btn btn-primary m-4 p-5'>Submit</button>
        </form>
      </div>
    </div>
  )
}
