import useActivities from '../hooks/useActivities'

export default function Manage() {
  const [activities] = useActivities()
  return (
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
                <tr key={activity.id}>
                  <td>{activity.title}</td>
                  <td>{activity._id}</td>
                  <td>
                    <button className="btn btn-primary mr-2">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
