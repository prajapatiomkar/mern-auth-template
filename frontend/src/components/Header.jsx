import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
  const userInfo = false;

  return (
    <header className="flex justify-between p-5 shadow-sm text-md">
      <Link className="capitalize">Logo</Link>
      <nav className="child:capitalize flex gap-5">
        {userInfo ? (
          <>
            <Link>Home</Link>
            <button>Logout</button>
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
