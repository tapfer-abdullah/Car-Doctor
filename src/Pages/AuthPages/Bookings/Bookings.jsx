/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import Header from "../../SharedPages/Header";
import { AuthContext } from "../AuthPorvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const [update, setUpdate] = useState(0);
  const navigate = useNavigate();

  // before 
  // useEffect(() => {
  //   fetch(`http://localhost:5000/bookings?email=${user?.email}` )
  //     .then((res) => res.json())
  //     .then((data) => setBooking(data));
  // }, [update]);

  // after jwt 
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`,{
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`
      }
    } )
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
          setBooking(data)
        }
        else{
          navigate("/");
        }
      });
  }, [update, navigate]);


  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted");
            const remaining = booking.filter((rm) => rm._id != id);
            setBooking(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Confirmed Successfully");

          const remaining = booking.filter((rm) => rm._id != id);
          const updated = booking.find(up => up._id == id);
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setBooking(newBooking);

        //   my own way 
        //   setUpdate(update+1);

        }
      });
  };

  return (
    <div className="mb-10">
      <Header></Header>
      <div className="text-center mb-20">
        <h3 className="text-3xl font-bold">Card Details</h3>
        <h3 className="text-base text-my-primary mt-2">
          Home - Product Details
        </h3>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              {/* <th>
                <button className="btn btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </th> */}
              <th></th>
              <th>Image</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {booking.map((b) => (
              <BookingRow
                key={b._id}
                b={b}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
