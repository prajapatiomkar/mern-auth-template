import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useLoginMutation } from "../features/users/usersSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../features/authSlice";

export default function LoginScreen() {
  const [userLogin, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (data) => {
    try {
      const res = await userLogin(data).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(`/`);
    }
  }, [navigate, userInfo]);

  return (
    <section className="mt-7">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full md:mt-0 relative z-10 shadow-md "
      >
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font border-b pb-2 text-center">
          Login
        </h2>
        <div className="relative mb-4 mt-5">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            {...register("email", { required: true })}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            {...register("password", { required: true })}
          />
        </div>

        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Login
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Not have account ?{" "}
          <Link className="hyperlink" to="/register">
            Register
          </Link>
        </p>
      </form>
    </section>
  );
}
