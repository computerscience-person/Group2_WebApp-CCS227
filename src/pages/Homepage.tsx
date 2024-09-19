import FooterBlue from "../components/Footers/FooterBlue";
import NavbarBlue from "../components/Navbars/NavbarBlue";
import wu_classic from "../assets/products/waterup_classic.png";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarBlue />
      {/* LAYER 1 */}
      <div
        className="h-[648px] flex items-center justify-between"
        style={{ backgroundColor: "#CFE4F4" }}
      >
        {/* Text Description */}
        <div className="h-[200px] w-[1000px] pl-[80px] font-poppins">
          <h1 className="font-poppins text-6xl font-bold pb-5">
            WATER-UP: <br /> Water made better.
          </h1>
          <button
            className="h-10 w-40 text-2xl rounded-2xl transition-transform duration-80 ease-in-out hover:scale-105"
            style={{ backgroundColor: "#7181A7" }}
          >
            <a className="font-poppins font-bold text-white" href="/about">
              Learn More
            </a>
          </button>
        </div>
        {/* Product Image */}
        <img
          src={wu_classic}
          className="w-auto h-[500px] pr-[80px] transition-transform duration-700 ease-in-out hover:scale-105 "
          alt="Water-Up Classic"
        />
      </div>
      <FooterBlue />
    </div>
  );
};

export default Homepage;
