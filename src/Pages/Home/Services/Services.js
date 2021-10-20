import React from 'react';
import useService from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const {services} = useService();

    return (
        <div id="services" className="container">
            <h2 className="text-warning my-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;