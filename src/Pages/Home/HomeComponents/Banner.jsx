/* eslint-disable no-unused-vars */
import React from "react";

import ban1 from "../../../assets/images/banner/1.jpg"
import ban2 from "../../../assets/images/banner/2.jpg"
import ban3 from "../../../assets/images/banner/3.jpg"
import ban4 from "../../../assets/images/banner/4.jpg"
import ban5 from "../../../assets/images/banner/5.jpg"
import ban6 from "../../../assets/images/banner/6.jpg"

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">

        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={ban1}
            className="w-full h-[600px] rounded-lg"
          />
            <div className="absolute top-0 left-0 w-full h-full flex items-center text-white rounded-lg"
            style={{background: "rgba(0, 0, 0, .5)"}}>
                <div className="w-1/2 ml-24">
                <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                <p className="my-6 text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-error bg-my-primary text-white hover:text-my-primary hover:bg-white mr-5 hover:border-my-primary">Discover More</button>
                <button className="btn btn-outline border-2 border-my-primary text-my-primary hover:bg-my-primary hover:border-my-primary">Latest Project</button>
                </div>
                </div>
            </div>
            
          <div className="absolute flex transform -translate-y-1/2 right-5 space-x-4 bottom-0">
            <a href="#slide6" className="btn btn-circle hover:bg-my-primary hover:text-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle hover:bg-my-primary hover:text-white">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
        <img
            src={ban2}
            className="w-full h-[600px] rounded-lg"
          />
            <div className="absolute top-0 left-0 w-full h-full flex items-center text-white rounded-lg"
            style={{background: "rgba(0, 0, 0, .5)"}}>
                <div className="w-1/2 ml-24">
                <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                <p className="my-6 text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-error bg-my-primary text-white hover:text-my-primary hover:bg-white mr-5">Discover More</button>
                <button className="btn btn-outline border-2 border-my-primary text-my-primary hover:bg-my-primary">Latest Project</button>
                </div>
                </div>
            </div>
            
          <div className="absolute flex transform -translate-y-1/2 right-5 space-x-4 bottom-0">
            <a href="#slide1" className="btn btn-circle hover:bg-my-primary hover:text-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle hover:bg-my-primary hover:text-white">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
        <img
            src={ban3}
            className="w-full h-[600px] rounded-lg"
          />
            <div className="absolute top-0 left-0 w-full h-full flex items-center text-white rounded-lg"
            style={{background: "rgba(0, 0, 0, .5)"}}>
                <div className="w-1/2 ml-24">
                <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                <p className="my-6 text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-error bg-my-primary text-white hover:text-my-primary hover:bg-white mr-5">Discover More</button>
                <button className="btn btn-outline border-2 border-my-primary text-my-primary hover:bg-my-primary">Latest Project</button>
                </div>
                </div>
            </div>
            
          <div className="absolute flex transform -translate-y-1/2 right-5 space-x-4 bottom-0">
            <a href="#slide2" className="btn btn-circle hover:bg-my-primary hover:text-white">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle hover:bg-my-primary hover:text-white">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
        <img
            src={ban4}
            className="w-full h-[600px] rounded-lg"
          />
            <div className="absolute top-0 left-0 w-full h-full flex items-center text-white rounded-lg"
            style={{background: "rgba(0, 0, 0, .5)"}}>
                <div className="w-1/2 ml-24">
                <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                <p className="my-6 text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-error bg-my-primary text-white hover:text-my-primary hover:bg-white mr-5">Discover More</button>
                <button className="btn btn-outline border-2 border-my-primary text-my-primary hover:bg-my-primary">Latest Project</button>
                </div>
                </div>
            </div>
            
          <div className="absolute flex transform -translate-y-1/2 right-5 space-x-4 bottom-0">
            <a href="#slide3" className="btn btn-circle hover:bg-my-primary hover:text-white">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle hover:bg-my-primary hover:text-white">
              ❯
            </a>
          </div>
        </div>

        <div id="slide5" className="carousel-item relative w-full">
        <img
            src={ban5}
            className="w-full h-[600px] rounded-lg"
          />
            <div className="absolute top-0 left-0 w-full h-full flex items-center text-white rounded-lg"
            style={{background: "rgba(0, 0, 0, .5)"}}>
                <div className="w-1/2 ml-24">
                <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                <p className="my-6 text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-error bg-my-primary text-white hover:text-my-primary hover:bg-white mr-5">Discover More</button>
                <button className="btn btn-outline border-2 border-my-primary text-my-primary hover:bg-my-primary">Latest Project</button>
                </div>
                </div>
            </div>
            
          <div className="absolute flex transform -translate-y-1/2 right-5 space-x-4 bottom-0">
            <a href="#slide4" className="btn btn-circle hover:bg-my-primary hover:text-white">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle hover:bg-my-primary hover:text-white">
              ❯
            </a>
          </div>
        </div>

        <div id="slide6" className="carousel-item relative w-full">
        <img
            src={ban6}
            className="w-full h-[600px] rounded-lg"
          />
            <div className="absolute top-0 left-0 w-full h-full flex items-center text-white rounded-lg"
            style={{background: "rgba(0, 0, 0, .5)"}}>
                <div className="w-1/2 ml-24">
                <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                <p className="my-6 text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-error bg-my-primary text-white hover:text-my-primary hover:bg-white mr-5">Discover More</button>
                <button className="btn btn-outline border-2 border-my-primary text-my-primary hover:bg-my-primary">Latest Project</button>
                </div>
                </div>
            </div>
            
          <div className="absolute flex transform -translate-y-1/2 right-5 space-x-4 bottom-0">
            <a href="#slide5" className="btn btn-circle hover:bg-my-primary hover:text-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle hover:bg-my-primary hover:text-white">
              ❯
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
