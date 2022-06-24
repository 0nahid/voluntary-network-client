import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        axios(`http://localhost:5500/api/activities`)
            .then(res => {
                setActivities(res.data)
            })
    }, [])
    return (
        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto bg-base-100  image-full ">
            {
                activities.slice(0, 8).map(activity => {
                    return (
                        <div key={activity.id} className="m-2 shadow-xl">
                            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" className="rounded" alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="card-actions justify-center">
                                    <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
