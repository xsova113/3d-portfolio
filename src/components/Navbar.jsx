import { NavLink } from "react-router-dom";

const routes = [
  { name: "About", pathname: "/about" },
  { name: "Project", pathname: "/project" },
];

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to={"/"}
        className={
          "bg-whtie flex h-10 w-10 items-center bg-white justify-center rounded-lg font-bold shadow-md"
        }
      >
        <p className="blue-gradient_text">GC</p>
      </NavLink>
      <nav className="flex gap-7 text-lg font-medium">
        {routes.map((r) => (
          <NavLink
            key={r.pathname}
            to={r.pathname}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            {r.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
