import w_blue from "../../assets/logos/w_blue.png";
const NavbarWhite = () => {
  return (
    <nav className="bg-white p-5 h-30 w-full shadow-lg m-0 flex justify-between items-center ">
      <button>
        <a href="/home">
          <img
            src={w_blue}
            alt="Logo"
            className="h-10 transition-transform duration-150 ease-in-out hover:scale-110"
          />
        </a>
      </button>

      <ul className="flex space-x-8 ml-auto">
        <li>
          <a
            href="/home"
            className="font-poppins block px-4 py-2 transition-transform duration-80 ease-in-out hover:scale-105"
            style={{ color: "#7181A7" }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/product"
            className="font-poppins block px-4 py-2 transition-transform duration-80 ease-in-out hover:scale-105"
            style={{ color: "#7181A7" }}
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="font-poppins block px-4 py-2 transition-transform duration-80 ease-in-out hover:scale-105"
            style={{ color: "#7181A7" }}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="/support"
            className="font-poppins block px-4 py-2 transition-transform duration-80 ease-in-out hover:scale-105"
            style={{ color: "#7181A7" }}
          >
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarWhite;
