import React from "react";
import { redBin, edit } from "../../../images";

const Address = ({ name, number, street, address }) => {
  return (
    <div className="box gap-2 d-flex align-items-start">
      <input type="radio" style={{ scale: "1.5", marginTop: "8px" }} />
      <div className="d-flex flex-column">
        <span className="text-capitalize">
          <strong>hello john smith</strong>
        </span>
        <span>number</span>
        <span>
          <strong>street</strong>
        </span>
        <span>
          <strong>address</strong>
        </span>
        <span className="d-flex justify-content-between mt-2 gap-4">
          <span className="d-flex gap-1">
            <img src={edit} alt="edit" />
            <span style={{ color: "#0395E7" }}>Edit</span>
          </span>
          <span className="d-flex gap-1">
            <img src={redBin} alt="delete" />
            <span style={{ color: "#C70000" }}>Delete</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Address;
