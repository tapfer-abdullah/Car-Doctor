/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../SharedPages/Header";
import { AuthContext } from "../AuthPages/AuthPorvider";
import Swal from 'sweetalert2';

const Checkout = () => {
  const { _id, title, price, img } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.price.value;

    const customerInfo = { name, email, date, price, img, service: title };
    console.log(customerInfo);

    fetch("http://localhost:5000/booking", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerInfo)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.acknowledged){
        Swal.fire({
          icon: 'success',
          title: 'Your booking has been added',
          showConfirmButton: false,
          timer: 1500
        })
        form.reset();
      }
    })

  };

  return (
    <div>
      <Header></Header>
      <h3 className="text-3xl font-semibold text-center">Book Now</h3>
      <h3 className="text-lg font-semibold text-center">
        Booking item: <span className="text-my-primary">{title}</span>
      </h3>
      <div>
        <form onSubmit={handleBooking}>
          <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={user?.displayName}
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={user?.email}
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Choose Date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                defaultValue={"$ " + price}
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control px-8 mx-auto">
            <input
              type="submit"
              value="Book Now"
              className="btn bg-my-primary hover:bg-white hover:text-my-primary hover:border-my-primary"
            />
            {/* <Link
            to=""
            className="btn bg-my-primary hover:bg-white hover:text-my-primary hover:border-my-primary"
          ></Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
