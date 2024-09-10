import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaMedkit } from "react-icons/fa";
import { FaStaffSnake } from "react-icons/fa6";
import { FaLungs } from "react-icons/fa";

import "./Features.css";
const Features = () => {
  return (
    <div className="container d-flex flex-column flex-sm-row gap-5 my-5 overflow-hidden">
      <img src="/imgs/features.jpg" className="w-40 align-self-sm-stretch" />
      <div className="d-flex flex-column gap-5">
        <div>
          <h4 className="fw-bold w-75">
            Enim quis est voluptatibus aliquid consequatur fugiat
          </h4>
          <span className="underline bg-maincolor rounded-pill"></span>
          <p>
            Esse voluptas cumque vel exercitationem.Reiciendis est hic
            accusamus.Non ipsam et sed minima temporibus laudantium.Soluta
            voluptate sed facere corporis dolores excepturi
          </p>
        </div>
        <div className="d-flex flex-column  gap-5 px-3">
          <div className="d-flex align-items-start gap-3">
            <FaHandHoldingMedical
              style={{ width: "90px", height: "60px" }}
              className="text-maincolor shadow px-3 rounded align-self-start "
            />
            <div>
              <h5 className="fw-bold">Lorem Ipsum</h5>
              <p className="m-0">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepture sint occaecati cupiditate non provident
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-3">
            <FaMedkit
              style={{ width: "90px", height: "60px" }}
              className="text-maincolor shadow p-3 rounded "
            />
            <div>
              <h5 className="fw-bold">Nemo Enim</h5>
              <p className="m-0">
                At vero eos et accusamus et iusto odio digissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-3">
            <FaStaffSnake
              style={{ width: "90px", height: "60px" }}
              className="text-maincolor shadow p-3 rounded "
            />
            <div>
              <h5 className="fw-bold">Dine Pad</h5>
              <p className="m-0">
                Explicabo est voluptatum asperiores consequatur magnam.Et
                veritatis odit.Sunt aut deserunt minus aut eligendi omnis
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-3">
            <FaLungs
              style={{ width: "90px", height: "60px" }}
              className="text-maincolor shadow p-3 rounded "
            />
            <div>
              <h5 className="fw-bold">Tride clov</h5>
              <p className="m-0">
                Est voluptatem labore deleniti quis a delectus et.Saepe dolorem
                libero sit non aspernatur odit amet.Et eligendi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
