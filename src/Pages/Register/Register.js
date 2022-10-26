import React from 'react';
import img1 from '../../assets/register/img-1.svg';
import img2 from '../../assets/register/img-2.svg';
import img3 from '../../assets/register/img-3.svg';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const Register = () => {
    return (
        <div>
            <div className='h-[304px] w-[100%] bg-gradient-to-r from-[#6cc17e] to-[#098b99] mt-[25px] flex justify-between items-center'>
                <img className='h-[286px] w-[286px] relative top-24 left-24 animate-pulse' src={img1} alt="" />
                <p className='text-6xl text-white font-bold text-center relative left-36'>Authentication</p>
                <img className='w-[174px] h-[105px] relative top-8 left-40 animate-pulse' src={img2} alt="" />
                <img className='relative bottom-36 left-16 animate-pulse' src={img3} alt="" />
            </div>
            <RegistrationForm></RegistrationForm>
        </div>
    );
};

export default Register;