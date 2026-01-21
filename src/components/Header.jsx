import NavBar from "./NavBar";
function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex justify-between items-center gap-5">
        <button className="md:hidden">
          <img src="/images/icon-menu.svg" alt="icon-menu" />
        </button>
        <img src="/images/logo.svg" alt="Sneakers logo" />
      </div>
      <NavBar />
      <div className="flex justify-between items-center gap-5">
        <button>
          <img src="/images/icon-cart.svg" alt="" />
        </button>
        <button className="">
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
