import React from 'react'; 
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import toast from 'react-hot-toast'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const logoOnClick=() => {
        toast('You are not sign in.')
    }
    const handleLogOut = () => {
            logOut()
            .then(() => { })
        .catch(error=>{console.error(error)})
    }
    return (
        <div className='mt-[25px] ml-[60px] flex justify-between sticky top-0 left-0'>
            <div className='flex justify-between w-[750px]'>
                <Link to='/' className="normal-case text-3xl font-bold"><span className='text-3xl mr-2 text-accent font-bold'>Active</span>Learning</Link>
                <div className="form-control">
                    <input type="text" placeholder="Search your courses here" className="input input-bordered w-[500px] focus:outline-none focus:outline-offset-0 focus:border-[#098b99]"/>
                </div>
            </div>
            <div className='flex mr-[60px]'>
                <Link to='/' className="normal-case text-xl pr-6 mt-2 font-semibold hover:text-[#098b99]">Home</Link>
                <Link to='/courses' className="normal-case text-xl pr-6 mt-2 font-semibold hover:text-[#098b99]">Courses</Link>
                <Link to='/blog' className="normal-case text-xl pr-6 mt-2 font-semibold hover:text-[#098b99]">Blog</Link>
                {
                    user?.photoURL?
                        <>  
                            <p className='mt-[10px] ml-2'>{user?.displayName}</p>
                            <img className='w-[50px] rounded-[50%] ml-3' src={user.photoURL} alt="" />
                            <Link to='/'><button onClick={handleLogOut} className='btn ml-2'>Log out</button></Link>
                        </>
                        :
                        <>
                            <Link to='/login' className="btn normal-case text-xl pr-6 font-semibold mr-4 bg-gradient-to-r from-[#6cc17e] to-[#098b99] hover:to-yellow-500 border-none">Log in</Link>
                            <Link to='/register' className="btn normal-case text-xl pr-6 font-semibold bg-gradient-to-r from-[#6cc17e] to-[#098b99] hover:to-yellow-500 border-none">Register</Link>
                            <FaUser className='ml-6 h-[40px]'onClick={logoOnClick}></FaUser>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;