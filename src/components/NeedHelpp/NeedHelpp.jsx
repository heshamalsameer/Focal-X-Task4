import React from "react";
import Apointment from "../Apointment/Apointment";

const NeedHelpp = () => {
  return (
    <div className=" bg-maincolor py-5">
      <div className=" container d-flex flex-column justify-content-center align-items-center text-center bg-maincolor text-white">
        <h4>In an emergency? Need help now?</h4>
        <p>
          Duis aute irure dolor in reprehnderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non
          proident,sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <Apointment />
      </div>
    </div>
  );
};

export default NeedHelpp;
