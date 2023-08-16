import React from "react";
import Inside from "./Inside";
import Outside from "./Outside";
import { useSelector } from "react-redux";

export default function Body() {
  const { userInfo } = useSelector((state) => state.auth);

  return <>{userInfo ? <Inside /> : <Outside />}</>;
}
