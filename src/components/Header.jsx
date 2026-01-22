import NavBar from "./NavBar";
function Header({ isOpen, setIsOpen }) {
  return (
    <header className="flex items-center justify-between md:p-3 p-2">
      <div className="flex justify-between items-center gap-3 ">
        <img
          src="/images/icon-menu.svg"
          alt="icon-menu"
          onClick={() => setIsOpen(true)}
          className={`md:hidden ${isOpen ? "hidden" : undefined}`}
        />

        <img
          src="/images/logo.svg"
          alt="Sneakers logo"
          className={isOpen ? "pl-5" : undefined}
        />
      </div>
      <NavBar Open={isOpen} IsOpen={setIsOpen} />
      <div className="flex justify-between items-center gap-5 ">
        <button>
          <img src="/images/icon-cart.svg" alt="icon-cart" />
        </button>
        <button>
          <img
            src="/images/image-avatar.png"
            alt="image-avatar"
            className="w-7.5"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
