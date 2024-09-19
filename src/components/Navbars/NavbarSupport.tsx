import w_blue from "../../assets/logos/w_blue.png";

const NavbarSupports = () => {
  return (
    <nav className="bg-white p-5 h-30 w-full shadow-lg m-0 flex justify-between items-center">
      <img src={w_blue} alt="Logo" className="h-10" />

      <ul className="flex space-x-8 ml-auto">
        <li>
          <a
            href="/home"
            className="block px-4 py-2 transition-transform duration-80 ease-in-out hover:scale-105"
          >
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarSupports;
