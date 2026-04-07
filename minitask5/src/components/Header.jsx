import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="p-4 bg-blue-700">
      <nav className="text-base text-black">
        <ol className="flex gap-4 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "active active bg-amber-300 text-black"
                    : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pokemon"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "active active bg-amber-300 text-black"
                    : ""
              }
            >
              Pokemon
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addproduct"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending bg-amber-950 text-white"
                  : isActive
                    ? "active bg-amber-300 text-black"
                    : ""
              }
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/counter"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "active  bg-amber-300 text-black"
                    : ""
              }
            >
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="rickmorty"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                    ? "active  bg-amber-300 text-black"
                    : ""
              }
            >
              RickMorty
            </NavLink>
          </li>
        </ol>
      </nav>
    </header>
  );
}
