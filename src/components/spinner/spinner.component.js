import React from "react";
import { Spinner } from "react-bootstrap";

import "./spinner.component.scss";

const CustomSpinner = ({ animation = "border", ...props }) => (
  <div className="custom_spinner">
    <Spinner animation="border" {...props} />
  </div>
);

export default CustomSpinner;
