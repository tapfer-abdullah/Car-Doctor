/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const ServiceCard = ({service}) => {
    const {title, price, img} = service;
    return (
        <div className="border-2 border-dark-3 p-6 mb-6 mx-auto rounded-lg ">
            <div className="w-80 h-52"><img className="w-full h-full rounded-lg" src={img} alt="" /></div>
            <h4 className="text-2xl text-dark-2 my-5 font-bold">{title}</h4>
            <div className="flex justify-between items-center">
            <h5 className="font-semibold text-my-primary text-xl">Price: ${price}</h5>
            <button className="btn btn-outline font-semibold text-my-primary hover:bg-my-primary hover:border-my-primary"> Details </button>
            </div>
        </div>
    );
};

export default ServiceCard;