import React from "react";
import LabelInput from "./LabelInput";
import Input from "./Input";

export const FormInput = ({ name, type, labelName, error, ...props }) => {
  return (
    <div>
      <LabelInput nameLabel={name} children={labelName} />
      <Input nameInput={name} typeInput={type} error={error} {...props} />
    </div>
  );
};
