import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
export default function Manage() {
  const [activities, setActivities] = useState([])
  useEffect(() => {
    axios(`http://localhost:5500/api/activities`)
      .then(res => setActivities(res.data))
  }, [])

  // delete activity
  const deleteActivity = (_id) => {
    // add user confirmation for delete
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5500/api/activities/${_id}`)
        .then((data) => {
          data.status === 200 ? Swal.fire("Deleted!", "Your file has been deleted.", "success") : Swal.fire("Error", "Product not deleted", "error");
          setActivities(activities.filter(activity => activity._id !== _id))
        });
      }
    });
  };

  return (
    <div>
      <div class="overflow-x-auto container mx-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              activities.map(activity => {
                return (
                  <tr key={activity._id}>
                    <td>{activity.title}</td>
                    <td>{activity.email}</td>
                    <td>
                      <button className="btn btn-primary mr-2">Edit</button>
                      <button
                        onClick={() => deleteActivity(activity._id)}
                        className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>)
    </div>
  )
}
