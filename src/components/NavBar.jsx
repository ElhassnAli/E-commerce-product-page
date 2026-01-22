import { NavLink } from "react-router-dom";

function NavBar({ Open, IsOpen }) {
  return (
    <nav
      className={`absolute md:static -translate-x-[150%] transition duration-300 md:translate-x-0 top-0  ${Open ? "open" : undefined}`}
    >
      <img
        src="/images/icon-close.svg"
        alt="icon-close"
        onClick={() => IsOpen(false)}
        className="md:hidden mb-10"
      />

      <ul className="flex flex-col gap-4  md:flex-row md:justify-between md:gap-5 ">
        <li onClick={() => IsOpen(false)}>
          <NavLink to="/">Man</NavLink>
        </li>
        <li onClick={() => IsOpen(false)}>
          <NavLink to="/woman">Woman</NavLink>
        </li>
        <li onClick={() => IsOpen(false)}>
          <NavLink to="/collection">Collection</NavLink>
        </li>
        <li onClick={() => IsOpen(false)}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={() => IsOpen(false)}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
