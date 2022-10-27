import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img4 from "../../assets/register/register-img.png";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";
import { useState } from "react";
const LoginForm = () => {
  const { signIn, handleGoogleSignIn, handleGithubSignIn } =
    useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(() => {})
      .catch((error) => setError(error.message));
      form.reset();
      navigate(from, {replace: true})
  };
  const googleSignIn = () => {
    handleGoogleSignIn().then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  const gitHubSignIn = () => {
    handleGithubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="flex justify-center gap-4 mb-[100px]">
        <div className="mt-[100px]">
          <img src={img4} alt="" />
        </div>
        <div className="mt-[100px]">
          <p className="text-4xl font-bold mb-4">
            Sign in to Active <span className="text-accent">Learning</span>
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
                    type="email"
                    name="email"
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
                    type="password"
                    name="password"
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 font-semibold bg-white border rounded-md  focus:border-[#098b99] focus:outline-none "
                    required
                  />
                </div>
                <p className="text-[#FF0000]">{error}</p>
                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none bg-gradient-to-r from-[#6cc17e] to-[#098b99]">
                    Login Now
                  </button>
                </div>
              </form>
              <div>
                <p className="text-center m-2">OR</p>
                <button className="flex items-center justify-center gap-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none bg-gradient-to-r from-[#6cc17e] to-[#098b99]">
                  <FcGoogle></FcGoogle>
                  <span onClick={googleSignIn}>Google</span>
                </button>
                <p className="text-center m-2">OR</p>
                <button className="flex items-center justify-center gap-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none bg-gradient-to-r from-[#6cc17e] to-[#098b99]">
                  <BsGithub></BsGithub>
                  <span onClick={gitHubSignIn}>Github</span>
                </button>
              </div>
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
