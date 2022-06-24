import axios from "axios";
import { useEffect, useState } from "react";

const useActivities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('https://gentle-escarpment-02444.herokuapp.com/api/activities')
            .then(data => setActivities(data.data));
    }, []);
    return [activities, setActivities]
}

export default useActivities;