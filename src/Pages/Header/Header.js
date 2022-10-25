import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-[25px] ml-[50px] flex justify-between'>
            <div className='flex justify-between w-[750px]'>
                <Link to='/' className="normal-case text-3xl font-bold"><span className='text-3xl mr-2 text-accent font-bold'>Active</span>Learning</Link>
                <div className="form-control">
                    <input type="text" placeholder="Search your courses here" className="input input-bordered w-[500px] focus:outline-none focus:outline-offset-0 focus:border-[#098b99]"/>
                </div>
            </div>
            <div className='flex mr-[50px]'>
                <Link to='/' className="normal-case text-xl pr-6 mt-2 font-semibold hover:text-[#098b99]">Home</Link>
                <Link to='/courses' className="normal-case text-xl pr-6 mt-2 font-semibold hover:text-[#098b99]">Courses</Link>
                <Link to='/login' className="btn normal-case text-xl pr-6 font-semibold mr-4 bg-gradient-to-r from-[#6cc17e] to-[#098b99] hover:to-yellow-500 border-none">Log in</Link>
                <Link to='/register' className="btn normal-case text-xl pr-6 font-semibold bg-gradient-to-r from-[#6cc17e] to-[#098b99] hover:to-yellow-500 border-none">Register</Link>
            </div>
        </div>
    );
};

export default Header;