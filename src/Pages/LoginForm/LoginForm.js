import React from 'react';
import { Link } from 'react-router-dom';
import img4 from "../../assets/register/register-img.png";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
const LoginForm = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }
    return (
    <div>
    <div className="flex justify-center gap-4">
        <div className="mt-[200px]">
        <img src={img4} alt="" />
        </div>
        <div className="mt-[200px]">
        <p className="text-4xl font-bold mb-4">
            Sign in to Active <span className='text-accent'>Learning</span>
        </p>
        <div className="relative flex flex-col justify-center overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl">
            <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email" name='email'
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 font-semibold bg-white border rounded-md  focus:border-[#098b99] focus:outline-none "
                    required
                />
                </div>
                <div className="mb-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password" name='password'
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 font-semibold bg-white border rounded-md  focus:border-[#098b99] focus:outline-none "
                    required
                />
                </div>
                <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none bg-gradient-to-r from-[#6cc17e] to-[#098b99]">
                    Login Now
                </button>
                <p className="text-center m-2">OR</p>
                <button className="flex items-center justify-center gap-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none bg-gradient-to-r from-[#6cc17e] to-[#098b99]">
                    <FcGoogle></FcGoogle>
                    <span>Google</span>
                </button>
                <p className="text-center m-2">OR</p>
                <button className="flex items-center justify-center gap-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none bg-gradient-to-r from-[#6cc17e] to-[#098b99]">
                    <BsGithub></BsGithub>
                    <span>Github</span>
                </button>
                </div>
            </form>
            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                New user?{" "}
                <Link
                to="/register"
                className="font-medium text-[#098b99] hover:underline"
                >
                Register Here
                </Link>
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
    );
};

export default LoginForm;