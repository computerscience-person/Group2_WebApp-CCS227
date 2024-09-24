import Carousel from "../components/Carousel";
import FooterWhite from "../components/Footers/FooterWhite";
import NavbarWhite from "../components/Navbars/NavbarWhite";
import w_blue from "../assets/logos/w_blue.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarWhite />
      <div className="w-auto h-[648px] flex justify-between items-center">
        {/* LAYER 1 */}
        <div className="flex flex-col items-center text-center mx-[80px] gap-2">
        <img src= {w_blue} alt="" className="h-14 w-14"/> 
          <h1
            className="font-poppins font-bold text-6xl mb-16 justify-center mx-[80px]"
            style={{ color: "#7181A7" }}>
            About Us
          </h1>
          <p className="text-start font-poppins text-xl mx-[80px]" style={{ color: "#7181A7" }}>
            At Water-up, we’re revolutionizing the way you hydrate! 
            Our vitamin-infused water is designed to give you a healthy boost in every sip, 
            making it easier and more enjoyable to stay refreshed throughout the day.
            With four invigorating flavors—classic, strawberry, peach, 
            and lemon—there’s something for every taste, and we’re constantly 
            innovating to bring you more. <br></br><br></br><br></br>

            We believe hydration should be both healthy and delicious, 
            which is why we only use natural flavors and essential vitamins to 
            elevate your water experience. Whether you’re at the gym, on the 
            go, or just need a flavorful pick-me-up, Water-up is your perfect 
            hydration partner. Elevate your water, elevate your life!
          </p>
        </div>
      </div>

      <div
        className="w-auto h-[500px] flex justify-center items-center"
        style={{ backgroundColor: "#CFE4F4" }}>
        {/* LAYER 2 */}
        <div className="flex flex-col items-center text-center mx-[80px]">
          {/* MISSION */}
          <h1
            className="font-poppins font-bold text-6xl mb-8"
            style={{ color: "#7181A7" }}>
            Mission
          </h1>
          <p className="font-poppins text-xl" style={{ color: "#7181A7" }}>
          To transform everyday hydration into a healthy, enjoyable experience by 
          delivering vitamin-infused water packed with natural flavors. At Water-up, 
          we aim to make staying hydrated effortless and delightful, helping individuals 
          live healthier and more vibrant lives, one sip at a time.
          </p>
        </div>
        <div className="flex flex-col items-center text-center mx-[80px]">
          {/* VISION */}
          <h1
            className="font-poppins font-bold text-6xl mb-8"
            style={{ color: "#7181A7" }}>
            Vision
          </h1>
          <p className="font-poppins text-xl" style={{ color: "#7181A7" }}>
          To become the leading choice for health-conscious hydration, inspiring a 
          global shift toward more nutritious and flavorful drinking options. We strive to 
          innovate continuously, offering sustainable, eco-friendly products that elevate both
          personal wellness and environmental responsibility.
          </p>
        </div>
      </div>

      <div>
        <Carousel />
      </div>
      <FooterWhite />
    </div>
  );
};

export default AboutUs;
