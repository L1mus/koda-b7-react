import { useContext } from "react";
import Button from "./Button";
import authReducerContext from "../context/auth/context";

export const DropdownMenu = () => {
  const { dispatch } = useContext(authReducerContext);
  return (
    <>
      <div className="w-12 h-12 absolute top-0 left-0 border-2 rounded-2xl border-gray-500">
        <Button children="Edit Profile" />
        <Button children="Logout" onClick={dispatch({ type: "LOGOUT" })} />
        <Button />
      </div>
    </>
  );
};
