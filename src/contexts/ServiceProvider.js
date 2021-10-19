import React, { createContext, useState, useEffect } from "react";
export const ServiceContext = createContext();
const ServiceProvider = ({ children }) => {

    const [services, setServices] = useState([]);
    useEffect(() => {
            fetch('./services.json')
                .then(response => response.json())
                .then(data => setServices(data));
    }, []);
    return (
        <ServiceContext.Provider value={{ services }}>
            {children}
        </ServiceContext.Provider>
    );
}
export default ServiceProvider;
