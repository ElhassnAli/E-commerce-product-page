import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Man</NavLink>
        </li>
        <li>
          <NavLink to="/woman">Woman</NavLink>
        </li>
        <li>
          <NavLink to="/collection">Collection</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
