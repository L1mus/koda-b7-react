import React from "react";
import { FormInput } from "../component/FormInput";
import LabelInput from "../component/LabelInput";
import Input from "../component/Input";
import Button from "../component/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import authschemaValidation from "../schema/authSchema";
// import { data } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authschemaValidation),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="">Register</h1>
      <div className="grid min-h-screen place-items-center">
        <div className="p-8 border-2 border-amber-500 rounded-3xl shadow-2xl shadow-black">
          <form
            className="flex gap-12 items-center"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormInput
              {...register("email")}
              name="email"
              type="email"
              labelName="Email"
              error={errors.email?.message}
            />
            <FormInput
              {...register("password")}
              name="password"
              type="password"
              labelName="Password"
              error={errors.password?.message}
            />
            <FormInput
              {...register("confirmpassword")}
              name="confirmpassword"
              type="password"
              labelName="Confirm Password"
              error={errors.confirmpassword?.message}
            />

            <Button
              children="Submit"
              isFullwidth={true}
              variant="rectangelBlue"
              className={"mt-8"}
              type="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
