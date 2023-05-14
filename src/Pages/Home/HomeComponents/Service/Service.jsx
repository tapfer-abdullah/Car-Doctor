/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return (
        <div className="flex flex-col">
            <div className="lg:w-1/2 text-center mx-auto mb-12">
                <p className="font-bold text-xl text-my-primary">Service</p>
                <h3 className="text-5xl font-bold my-5">Our Service Area</h3>
                <p className="text-base text-dark-3">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="md:grid md:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard 
                        key={service._id}
                        service = {service}
                    ></ServiceCard>)
                }
            </div>
            <button className="btn btn-outline font-semibold text-my-primary mx-auto mt-12 hover:bg-my-primary hover:border-my-primary"> More Services </button>
        </div>
    );
};

export default Service;