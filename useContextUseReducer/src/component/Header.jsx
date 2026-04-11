import { useContext, useState } from "react";
import Button from "./Button";
import authReducerContext from "../context/auth/context";
import useLocalStorage from "../hooks/useLocalStorage";
import { DropdownMenu } from "./DropdownMenu";
import iconDropDown from "../assets/down.svg";

const Header = () => {
  const { state } = useContext(authReducerContext);
  const [data] = useLocalStorage("user", "");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {state.isLogin ? (
        <header className="h-18 bg-red-500 flex items-center p-6 justify-between">
          <nav>
            <ul className="flex gap-9">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="flex  gap-6">
            <p>{data.email}</p>
            <div>
              <img src={data.profileUrl} />
            </div>
            <Button
              children="V"
              onClick={() => {
                setIsOpen(true);
              }}
            />
            {isOpen && <DropdownMenu />}
          </div>
        </header>
      ) : (
        <header className="h-18 bg-red-500 flex items-center p-6 justify-between">
          <nav>
            <ul className="flex gap-9">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="flex  gap-6">
            <Button children="SingIn" />
            <Button children="SingIUp" />
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
