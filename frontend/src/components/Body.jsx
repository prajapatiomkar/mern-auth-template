import React from "react";
import Inside from "./Inside";
import Outside from "./Outside";

export default function Body() {
  const userInfo = true;

  return <>{userInfo ? <Inside /> : <Outside />}</>;
}
