import axios from "axios";
import { useEffect, useState } from "react";

const useActivities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5500/api/activities')
            .then(data => setActivities(data.data));
    }, []);
    return [activities, setActivities]
}

export default useActivities;