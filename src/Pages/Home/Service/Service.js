import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" className="img-fluid"/>
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/service/${id}`}>
                <button className="btn btn-secondary">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;