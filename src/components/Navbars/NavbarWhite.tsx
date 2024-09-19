import HamburgerButton from "../HamburgerButton";
import Cart from "../Cart";

const NavbarWhite = () => {
  return (
    <nav className="bg-white p-5 h-30 w-full shadow-lg m-0 flex justify-between items-center">
      <HamburgerButton />
      <Cart />
    </nav>
  );
};

export default NavbarWhite;
