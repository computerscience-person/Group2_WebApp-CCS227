import HamburgerButton from "../HamburgerButton";
import Cart from "../Cart";

const NavbarSupport = () => {
  return (
    <nav className="bg-blue-300 p-5 h-30 w-full shadow-lg m-0 flex justify-between items-center">
      <HamburgerButton />
      <Cart />
    </nav>
  );
};

export default NavbarSupport;
