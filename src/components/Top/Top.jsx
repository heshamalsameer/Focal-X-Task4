import React from "react";
import "./Top.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuSmartphone } from "react-icons/lu";

const Top = () => {
  return (
    <div className=" bg-maincolor text-white p-1 " id="Home">
      <div className="container d-flex justify-content-center justify-content-sm-between">
        <div className="d-none d-sm-flex justify-content-center align-items-center gap-1">
          <MdOutlineWatchLater size={20} />
          <p className="m-0">Monday-Saturday, 8AM to 10PM</p>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-1">
          <LuSmartphone size={20} />
          <p className="m-0 ">Call us now +1 5589 55488 55</p>
        </div>
      </div>
    </div>
  );
};

export default Top;
