import React from "react";
import { Spinner } from "react-bootstrap";

import "./spinner.component.scss";

const CustomSpinner = ({ animation = "border", ...props }) => (
  <div className="custom_spinner">
    <Spinner animation={animation} {...props} />
  </div>
);

export default CustomSpinner;
