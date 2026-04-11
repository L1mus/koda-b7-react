import { useState, useContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import { FormInput } from "../component/FormInput";
import Button from "../component/Button";
import authReducerContext from "../context/auth/context";

const Login = () => {
  const { dispatch } = useContext(authReducerContext);
  const [, setUsername] = useLocalStorage("user", "");
  const [show, setShow] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setpassword] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [setErrorMsg] = useState("");
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // useEffect(() => {
  //   console.log(emailRef.current.value);
  //   console.log(passwordRef.current.value);
  // });
  const onSubmit = (e) => {
    e.preventDefault();
    const validCreds = {
      email: "koda@mail.com",
      password: "12345",
    };
    let isValid = true;
    if (validCreds.email !== form.email) {
      isValid = false;
    }
    if (validCreds.password !== form.password) {
      isValid = false;
    }
    if (!isValid) {
      setErrorMsg("email/password is wrong");
      return;
    }
    setUsername({
      email: form.email,
      profileUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(form.email.split("@")[0])}&background=random`,
    });
    dispatch({ type: "LOGIN", payload: form.email });
  };
  const changeHandler = (e) => {
    setForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <h1 className="">Login</h1>
      <div className="grid min-h-screen place-items-center">
        <div className="p-8 border-2 border-amber-500 rounded-3xl shadow-2xl shadow-black">
          <form className="flex gap-12 items-center" onSubmit={onSubmit}>
            <FormInput
              name="email"
              type="email"
              labelName="Email"
              value={form.email}
              onChange={changeHandler}
            />
            <FormInput
              name="password"
              type={show ? "text" : "password"}
              labelName="Password"
              value={form.password}
              onChange={changeHandler}
            />

            <p
              className={`${form.password.length == 0 || form.password.length >= 5 ? "invisible" : ""} text-red-400 text-sm text-right`}
            >
              Panjang password tidak boleh kurang dari 5 karakter
            </p>
            <Button
              children="Login"
              isFullwidth={true}
              variant="rectangelBlue"
              className={"mt-8"}
            />
            <div className="flex-1 flex gap-1 items-center select-none">
              <input
                type="checkbox"
                id="show"
                className="cursor-pointer"
                onChange={() => {
                  setShow((show) => !show);
                }}
              />
              <label htmlFor="show" className="cursor-pointer">
                Show Password
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
