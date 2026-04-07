import { Outlet } from "react-router";
import Header from "../components/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <h1>Hallo dunia</h1>
      <Outlet />
    </>
  );
};

export default Homepage;
