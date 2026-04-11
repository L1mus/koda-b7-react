import React, { Children } from "react";

const LabelInput = ({ nameLabel, children }) => {
  return <label htmlFor={nameLabel}>{children}</label>;
};

export default LabelInput;
