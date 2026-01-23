import { NavLink } from "react-router-dom";

function NavBar({ Open, IsOpen }) {
  return (
    <nav
      className={`absolute md:static -translate-x-[150%] transition duration-300 md:translate-x-0 top-0 lg:text-[16px] z-50 ${Open ? "open" : undefined}`}
    >
      <img
        src="/images/icon-close.svg"
        alt="icon-close"
        onClick={() => IsOpen(false)}
        className="md:hidden mb-10"
      />

      <ul className="flex flex-col gap-4  md:flex-row md:justify-between md:gap-4 ">
        <li onClick={() => IsOpen(false)}>
          <NavLink to="/" className="md:pb-5">
            Man
          </NavLink>
        </li>
        <li onClick={() => IsOpen(false)}>
          <NavLink to="/woman" className="md:pb-5">
            Woman
          </NavLink>
        </li>
        <li onClick={() => IsOpen(false)}>
          <NavLink to="/collection" className="md:pb-5">
            Collection
          </NavLink>
        </li>
        <li onClick={() => IsOpen(false)}>
          <NavLink to="/about" className="md:pb-5">
            About
          </NavLink>
        </li>
        <li onClick={() => IsOpen(false)}>
          <NavLink to="/contact" className="md:pb-5">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
