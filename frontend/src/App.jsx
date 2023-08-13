import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
}
