import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../Loader/Loader';

export default function Manage() {
  const [loading, setLoading] = useState(false);
  const [activities, setActivities] = useState([])
  useEffect(() => {
    axios(`http://localhost:5500/api/activities`)
      .then(res => setActivities(res.data))
  }, [])

  // delete activity
  const deleteActivity = (id) => {
    const url = `http://localhost:5500/api/activities/${id}`;
    axios.delete(url)
      .then(res => {
        setActivities(activities.filter(activity => activity.id !== id))
      }
      );
  }


  return (
    <div>
      {loading ? <Loading /> : (<div class="overflow-x-auto container mx-auto">
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
                        onClick={() => deleteActivity(activity.id)}
                        className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>)}
    </div>
  )
}
