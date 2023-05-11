/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const AboutUS = () => {
    return (
        <div className='flex my-32'>
            <div className='w-1/2 mr-16 relative'>
                <img src={person} alt="" className='w-4/5 rounded-lg'/>
                <img src={parts} alt="" className='w-1/2 rounded-lg absolute right-10 top-1/2 border-4 border-white'/>
            </div>

            <div className='w-1/2'>
                <h4 className='text-lg font-semibold text-my-primary mb-5'>About Us</h4>
                <h3 className='text-5xl font-semibold '>We are qualified & of experience in this field</h3>
                <p className='mt-6 mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='mb-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn btn-error bg-my-primary text-white hover:text-my-primary hover:bg-white mr-5">Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUS;