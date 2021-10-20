import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <div className="service pb-3">
            <Card className="bg-light shadow-lg pb-3 mb-5 bg-body rounded">
            <img src={img} alt="service" className="img-fluid"/>
            <h3 className="pt-3">{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/service/${id}`}>
                <button className="btn btn-warning">Learn more </button>
            </Link>
            </Card>
        </div>
    );
};

export default Service;