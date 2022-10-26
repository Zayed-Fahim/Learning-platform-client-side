import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

const Course = ({ course }) => {
  const { photoURL, course_title } = course;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-[25px]">
      <figure>
        <img
          className="scale-100 hover:scale-125 ease-out duration-500"
          src={photoURL}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {course_title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
      </div>
      <div className="flex items-center mx-auto gap-[60px]">
        <div className="flex items-center">
          <img
            className="w-[50px] rounded-[50%] mr-2"
            src={course.author.authorURL}
            alt=""
          />
          <p className="font-semibold"> By {course.author.authorName}</p>
        </div>
        <p>Price: ${course.price}</p>
      </div>
      <div>
        <div className="flex mt-3 justify-center gap-10">
          <button
            type="submit"
            className="btn bg-gradient-to-r from-[#6cc17e] to-[#098b99] outline-none border-none mb-4 card-actions items-center"
          >
            View Courses
            <FaArrowRight></FaArrowRight>
          </button>
          <button
            type="submit"
            className="btn bg-gradient-to-r from-[#6cc17e] to-[#098b99] outline-none border-none mb-4 card-actions items-center"
          >
            Add To Cart
            <HiShoppingCart></HiShoppingCart>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
