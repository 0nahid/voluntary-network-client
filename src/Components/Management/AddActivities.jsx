import { useForm } from 'react-hook-form';
export default function AddActivities() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 container mx-auto">
      <div className="m-5 w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control p-5">
            <label class="input-group input-group-vertical">
              <span>Email</span>
              <input type="email" placeholder="info@email.com" {...register("email", {})} />
            </label>
          </div>
          <div class="form-control p-5">
            <label class="input-group input-group-vertical">
              <span>Title</span>
              <input type="text" placeholder="Title" {...register("title", { min: 2 })} />
            </label>
          </div>
          <div class="form-control p-5">
            <label class="input-group input-group-vertical">
              <span>Image</span>
              <input type="text" placeholder="Image URL" {...register("img", { min: 2 })} />
            </label>
          </div>
          <button type="submit" className='btn btn-primary m-4 p-5'>Submit</button>
        </form>
      </div>
    </div>
  )
}
