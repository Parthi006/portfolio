import React from "react";
import Contact from "./Contact";
import { CampCanvas } from "./canvas";
const ContactAnd3D = () => {
  return (
    <div className="relative w-full h-screen mx-auto">
      <Contact />
      <div className="absolute inset-0 z-[-1]">
        <CampCanvas />
      </div>
    </div>
  );
};

export default ContactAnd3D;
