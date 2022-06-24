import useActivities from "../hooks/useActivities"

export default function Home() {
    const [activities] = useActivities()
    return (
        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto bg-base-100  image-full ">
            {
                activities.map(activity => {
                    return (
                        <div key={activity._id} className="m-2 shadow-xl">
                            <figure><img src={activity?.img} className="rounded" alt={activity.title} /></figure>
                            <div class="card-body">
                                <div class="card-actions justify-center">
                                    <button class="btn btn-primary">{activity.title}</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
