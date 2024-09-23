import Carousel from "../components/Carousel";
import FooterWhite from "../components/Footers/FooterWhite";
import NavbarWhite from "../components/Navbars/NavbarWhite";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarWhite />
      <div className="w-auto h-[648px] flex justify-between items-center ">
        {/* LAYER 1 */}
        <div className="justify-start ml-[80px] mr-[80px]">
          <h1
            className="font-poppins font-bold text-6xl mb-16"
            style={{ color: "#7181A7" }}
          >
            About Us
          </h1>
          <p className="font-poppins text-xl" style={{ color: "#7181A7" }}>
            At Water-up, we’re revolutionizing the way you hydrate! Our
            vitamin-infused water is designed to give you a healthy boost in
            every sip, making it easier and more enjoyable to stay refreshed
            throughout the day. With four invigorating flavors—classic,
            strawberry, peach, and lemon—there’s something for every taste, and
            we’re constantly innovating to bring you more. <br></br>
            <br></br>
            <br></br>
            We believe hydration should be both healthy and delicious, which is
            why we only use natural flavors and essential vitamins to elevate
            your water experience. Whether you’re at the gym, on the go, or just
            need a flavorful pick-me-up, Water-up is your perfect hydration
            partner. Elevate your water, elevate your life!
          </p>
        </div>
      </div>

      <div
        className="w-auto h-[500px] flex justify-between items-center "
        style={{ backgroundColor: "#CFE4F4" }}
      >
        {/* LAYER 2 */}
        <div className="justify-start ml-[80px] mr-[80px]">
          <h1
            className="font-poppins font-bold text-6xl mb-16"
            style={{ color: "#7181A7" }}
          >
            Mission
          </h1>
          <p className="font-poppins text-xl" style={{ color: "#7181A7" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            mollis ligula vitae lorem vestibulum maximus. Nulla pretium semper
            tortor non porta. Donec convallis ante finibus rutrum pretium. Morbi
            sagittis condimentum neque nec imperdiet. Etiam vel aliquet dui. Ut
            vel ex eget tellus ultrices auctor. Sed maximus libero erat, ac
            rhoncus sem mattis et. Donec volutpat lacinia lectus vel efficitur.
          </p>
        </div>
      </div>

      <div className="w-auto h-[500px] flex justify-between items-center ">
        {/* LAYER 3 */}
        <div className="justify-start ml-[80px] mr-[80px]">
          <h1
            className="font-poppins font-bold text-6xl mb-16"
            style={{ color: "#7181A7" }}
          >
            Vision
          </h1>
          <p className="font-poppins text-xl" style={{ color: "#7181A7" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            mollis ligula vitae lorem vestibulum maximus. Nulla pretium semper
            tortor non porta. Donec convallis ante finibus rutrum pretium. Morbi
            sagittis condimentum neque nec imperdiet. Etiam vel aliquet dui. Ut
            vel ex eget tellus ultrices auctor. Sed maximus libero erat, ac
            rhoncus sem mattis et. Donec volutpat lacinia lectus vel efficitur.
          </p>
        </div>
      </div>
      <div className="" style={{ backgroundColor: "#CFE4F4" }}>
        <Carousel />
      </div>
      <FooterWhite />
    </div>
  );
};

export default AboutUs;
