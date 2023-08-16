import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../features/users/usersSlice.js";
import { logout } from "../features/authSlice.js";

export default function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  const [userLogout, { isLoading }] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await userLogout().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="flex justify-between p-5 shadow-sm text-md">
      <Link className="capitalize">Logo</Link>
      <nav className="child:capitalize flex gap-5">
        {userInfo ? (
          <>
            <Link>Home</Link>
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
