import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/register/footer-shape-1.png';
import img2 from '../../assets/register/footer-shape-2.png';

const Footer = () => {
    return (
        <div className='bg-[#f6fafb]'>
            <div className='flex relative flex-row-reverse right-32 bottom-10 animate-pulse'>
                <img src={img1} alt="" />
            </div>
            <div className='flex justify-center w-[1600px] gap-8 mx-24 pb-[70px]'>
                <div className='w-full'>
                    <Link to='/' className="normal-case text-3xl font-bold"><span className='text-3xl mr-2 text-accent font-bold'>Active</span>Learning</Link>
                    <p className='text-[#646464] mt-6'>
                        In our website, we offer some engineering course at best price.You can buy it at very low cost.Build up your carrier with us.
                    </p>
                </div>
                <div className='flex flex-col w-full'>
                    <h2 className='text-2xl font bold mb-6'>Quick Links</h2>
                    <Link to='/'>Home</Link>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/aboutus'>About Us</Link>
                </div>
                <div className='w-full flex flex-col'>
                    <h1 className='text-2xl font bold mb-6'>Help Center</h1>
                    <Link>Support</Link>
                    <Link>Get Help</Link>
                    <Link>Privacy Policy</Link>
                </div>
                <div className='w-full'>
                    <h1 className='text-2xl font bold mb-6'>Contact Info</h1>
                    <p>Call us: <span>+880 18814***02</span></p>
                    <address>Address: <span>Hazaribagh, Dhaka-1209</span></address>
                    <p>Mail us: <span>nirob.fahim.1000.bf@gmail.com</span></p>
                </div>
            </div>
            <div className='absolute left-[200px] animate-pulse'>
                <img src={img2} alt="" />
            </div>
            <div className='flex justify-center mt-16 '>
                <hr className='border w-[1350px]' />
            </div>
            <div className='text-center mt-14'>
                <small>© Active Learning 2022 is Proudly Owned by <span className='text-[#098b99]'>Zayed Fahim</span></small>
            </div>
        </div>
    );
};

export default Footer;