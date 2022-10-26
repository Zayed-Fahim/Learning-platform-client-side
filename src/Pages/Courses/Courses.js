import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import img1 from "../../assets/register/img-1.svg";
import img2 from "../../assets/register/img-2.svg";
import img3 from "../../assets/register/img-3.svg";

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/courses")
            .then(res => res.json())
            .then(data => setCourses(data))
    },[])
    return (
        <div>
            <div>
            <div className='h-[304px] w-[100%] bg-gradient-to-r from-[#6cc17e] to-[#098b99] mt-[25px] flex justify-between items-center'>
                <img className='h-[286px] w-[286px] relative top-24 left-24 animate-pulse' src={img1} alt="" />
                <p className='text-6xl text-white font-bold text-center relative left-36'>Courses</p>
                <img className='w-[174px] h-[105px] relative top-8 left-40 animate-pulse' src={img2} alt="" />
                <img className='relative bottom-36 left-16 animate-pulse' src={img3} alt="" />
            </div>
            </div>
            <div className='text-center m-12'>
                <p className='text-4xl font-bold'>Our Courses</p>
            </div>
        <div className="grid grid-cols-[500px_1fr] mb-[100px]">
          <div>
            <h1>side nav</h1>
          </div>
          <div className="grid grid-cols-3">
                {courses.map((course) => (
                    <>
                        <Course key={course.id} course={course}></Course>
                    </>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Courses;