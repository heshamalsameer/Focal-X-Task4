import React from "react";

import styles from "./MakePoint.module.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Apointment from "../../components/Apointment/Apointment";
const MakePoint = () => {
  return (
    <div className={styles.bgf7f}>
      <div className="container">
        <SectionTitle
          title="MAKE AN APPOINTMENT"
          text="Necessitatibus eius consequatur ex aliquid fuge eum quidem sint consectetur velit"
        />
        <div>
          <div className="container text-center">
            <div className="row gap-3">
              <div className="col-12 col-md">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-100 border-1 border-secondary-subtle"
                />
              </div>
              <div className="col-12 col-md">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-100 border-1 border-secondary-subtle"
                />
              </div>
              <div className="col-12 col-md">
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-100 border-1 border-secondary-subtle"
                />
              </div>
            </div>
          </div>

          <div className="container text-center mt-3">
            <div className="row gap-3">
              <div className="col-12 col-md">
                <input
                  type="date"
                  className="w-100 border-1 border-secondary-subtle"
                />
              </div>
              <div className="col-12 col-md">
                <select className="w-100 border-1 border-secondary-subtle">
                  <option selected>Select Department</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-12 col-md">
                <select className="w-100 border-1 border-secondary-subtle">
                  <option selected>Select Doctor</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>

          <div className="container text-center mt-3">
            <div className="row">
              <div className="col">
                <textarea
                  placeholder="Your Name"
                  className="w-100 border-1 border-secondary-subtle"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Apointment />
        </div>
      </div>
    </div>
  );
};

export default MakePoint;
