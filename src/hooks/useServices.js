import { useEffect, useState } from "react"

const useServices = () => {
    // state for services
    const [services, setServices] = useState([]);

    // fetching sevices data
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return services;
}
export default useServices;