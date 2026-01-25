import { useState } from "react";
import NavBar from "./NavBar";
import Cart from "./Cart";
function Header({ isOpen, setIsOpen, cartItems }) {
  const [profileClicked, setProfileClicked] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);
  return (
    <header className="flex items-center justify-between md:p-4.5 px-4 pt-3 md:border-b border-gray-300 mb-5">
      <div className="flex justify-between items-center gap-5 ">
        <img
          src="/images/icon-menu.svg"
          alt="icon-menu"
          onClick={() => setIsOpen(true)}
          className={`md:hidden ${isOpen ? "hidden" : undefined}`}
        />

        <img
          src="/images/logo.svg"
          alt="Sneakers logo"
          className={` ${isOpen ? "pl-5" : undefined}`}
        />
        <NavBar Open={isOpen} IsOpen={setIsOpen} />
      </div>
      <div className="flex justify-between items-center gap-5 ">
        <button onClick={() => setCartClicked((e) => !e)}>
          <img src="/images/icon-cart.svg" alt="icon-cart" />
        </button>
        <button onClick={() => setProfileClicked((e) => !e)}>
          <img
            src="/images/image-avatar.png"
            alt="image-avatar"
            className={` w-7.5 rounded-2xl ${profileClicked ? "border-2 border-orange-600 " : ""}`}
          />
        </button>
      </div>
      {cartClicked && <Cart cartItems={cartItems} />}
    </header>
  );
}

export default Header;
