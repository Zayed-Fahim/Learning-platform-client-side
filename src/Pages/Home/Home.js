import React from "react";
import { useLoaderData } from "react-router-dom";
import img1 from "../../assets/home/banner-img-1.png";
import img2 from "../../assets/home/shape-1.svg";
import img3 from "../../assets/home/shape-2.svg";
import img4 from "../../assets/home/shape-3.svg";
import { FaArrowRight } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

const Home = () => {
  const allCourses = useLoaderData();
  const handleInsideBannerSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchValue = form.search.value;
    console.log(searchValue);
    form.reset();
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-[#8ed89e] to-[#44b1bd] mt-[25px]">
        <img
          className="absolute left-[800px] top-[200px] animate-pulse"
          src={img2}
          alt=""
        />
        <img
          className="absolute top-[86%] left-[100px] animate-pulse"
          src={img3}
          alt=""
        />
        <img
          className="absolute left-[85%] top-[80%] animate-pulse"
          src={img4}
          alt=""
        />
        <div className="flex justify-center items-center p-44 gap-20 h-auto">
          <div className="">
            <img className="w-[798px] " src={img1} alt="" />
          </div>
          <div className="">
            <div>
              <h1 className="text-6xl font-bold text-white leading-snug">
                Improve Your Online <br />
                Learning Experience <br />
                Better Instantly
              </h1>
            </div>
            <div>
              <p className="text-white font-semibold text-xl mt-6">
                We have <span className="text-[#fec400]">40k+</span> Online
                courses & <span className="text-[#fec400]">500K+</span> Online
                registered student. Find your desired Courses from them.
              </p>
            </div>
            <div>
              <form className="flex mt-10" onSubmit={handleInsideBannerSearch}>
                <input
                  className="w-[450px] focus:outline-none p-3 rounded-l-lg focus:border-[#098b99]"
                  type="text"
                  placeholder="Search courses"
                  name="search"
                />
                <button
                  className="p-3 bg-amber-600 rounded-r-lg w-[100px] text-white font-semibold"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-[100px]">
        <small className="text-[#098b99] text-[16px] font-semibold">
          Popular Courses
        </small>
      </div>
      <div>
        <p className="text-4xl text-center leading-snug font-bold mt-4">
          Expand Your Career Opportunity <br /> With Our Courses
        </p>
      </div>
      <div className="grid grid-cols-4 mb-[100px]">
        {allCourses.map((course) => (
          <>
            <div className="card w-96 bg-base-100 shadow-xl mt-[100px] mx-auto">
              <figure>
                <img
                  className="scale-100 hover:scale-125 ease-out duration-500"
                  src={course.photoURL}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {course.course_title}
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
                  <p className="font-semibold">
                    {" "}
                    By {course.author.authorName}
                  </p>
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
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
