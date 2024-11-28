import React from "react";
import { UNSAFE_ErrorResponseImpl } from "react-router-dom";


const Error = () => {
  return (
    <div className="text-center mt-5 pt-5">
      <img className="img-fluid" src={UNSAFE_ErrorResponseImpl} alt="" />
    </div>
  );
};

export default Error;
