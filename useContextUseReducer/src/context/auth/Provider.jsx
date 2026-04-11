import { useReducer, useEffect } from "react";
import AuthReducerContext from "./context.js";

const initialState = {
  user: null,
  isLogin: false,
};

export const AuthReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, { type, payload }) => {
    switch (type) {
      case "LOGIN":
        return { user: payload.user, isLogin: true };
      case "LOGOUT":
        return { user: null, isLogin: false };
      case "EDIT_PROFILE":
        return { ...state, user: { ...state.user, payload } };
      default:
        return state;
    }
  }, initialState);
  useEffect(() => {});

  return (
    <AuthReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthReducerContext.Provider>
  );
};
