import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
  const userInfo = true;

  return (
    <header className="flex justify-between p-5">
      <div className="capitalize">Logo</div>
      <nav className="child:capitalize flex gap-3">
        {userInfo ? (
          <>
            <Link>Home</Link>
            <Link>About</Link>
          </>
        ) : (
          <>
            <Link>Login</Link>
            <Link>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
