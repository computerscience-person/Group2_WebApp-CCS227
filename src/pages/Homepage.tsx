import FooterBlue from "../components/Footers/FooterBlue";
import NavbarBlue from "../components/Navbars/NavbarBlue";
import wu_classic from "../assets/products/waterup_classic.png";
import wu_intro from "../assets/products/waterup_intro.png";
import HighlightCard from "../components/HighlightCard";
import droplet from "../assets/icons/droplet.png";
import ml from "../assets/icons/ml.png";
import plant from "../assets/icons/plant.png";
import HomepageFAQs from "../components/HomepageFAQs";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarBlue />
      {/* LAYER 1 */}
      <div
        className="h-[648px] flex items-center justify-between mb-20"
        style={{ backgroundColor: "#CFE4F4" }}
      >
        {/* Text Description */}
        <div className="h-[200px] w-[1000px] ml-[80px] font-poppins">
          <h1
            className="font-poppins text-6xl font-bold pb-5"
            style={{ color: "#7181A7" }}
          >
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
          className="w-auto h-[500px] mr-[80px] transition-transform duration-700 ease-in-out hover:scale-105 "
          alt="Water-Up Classic"
        />
      </div>

      {/* LAYER 2 */}
      <div className="w-auto h-[550px] flex justify-between items-center ">
        <div className="w-[600px] h-[500px] justify-start ml-[80px]">
          <h1
            className="font-poppins font-bold text-6xl mb-16 transition-transform duration-700 ease-in-out hover:scale-105"
            style={{ color: "#7181A7" }}
          >
            What is Water-Up?
          </h1>
          <p className="font-poppins text-xl" style={{ color: "#7181A7" }}>
            Water-up is the refreshing way to hydrate and boost your day! Packed
            with vitamins and natural flavors, each sip is a burst of goodness
            that turns ordinary water into a delicious health boost. Whether
            you’re on the go, at the gym, or just need a tasty pick-me-up,
            Water-up makes staying healthy and hydrated effortless and
            enjoyable. Elevate your water, elevate your life with Water-up!
          </p>
        </div>
        <img
          src={wu_intro}
          className="w-auto h-[500px] mr-[80px] transition-transform duration-700 ease-in-out hover:scale-105"
        />
      </div>
      {/* LAYER 3 */}
      <div
        className="w-auto h-[350px] items-center flex flex-col justify-center"
        style={{ backgroundColor: "#CFE4F4" }}
      >
        <h1
          className="font-poppins text-6xl font-bold pb-12"
          style={{ color: "#7181A7" }}
        >
          Highlights
        </h1>
        <div className="w-full h-[100px] justify-between flex pl-[80px] pr-[80px]">
          <HighlightCard
            imgSrc={droplet}
            contentText="Deliciously refreshing flavors."
          />

          <HighlightCard
            imgSrc={ml}
            contentText="Available in variety of sizes."
          />

          <HighlightCard
            imgSrc={plant}
            contentText="Sturdy and Eco-friendly packaging."
          />
        </div>
      </div>
      {/* LAYER 4 - FAQ */}
      <div className="bg-white w-auto h-[550px] flex flex-col justify-start items-left pl-[80px] pt-12">
        <h1
          className="font-poppins text-6xl font-bold mb-6"
          style={{ color: "#7181A7" }}
        >
          Frequently Asked Questions
        </h1>
        <HomepageFAQs
          question="How and where can I order?"
          answer="You may order Water-up products through our official accounts on e-commerce platforms, such as Shopee and Lazada.  "
        />

        <HomepageFAQs
          question="What flavors are available? "
          answer="Currently, there are a total of 4 refreshing flavors available: classic, strawberry, peach, and lemon.  More flavors are coming soon. "
        />
        <HomepageFAQs
          question="What makes Water-up different from regular flavored water?"
          answer="Water-up is not just flavored; it's packed with essential vitamins to give you a healthy boost with every sip. Plus, we use natural flavors to ensure a refreshing taste without the artificial additives."
        />
      </div>
      <FooterBlue />
    </div>
  );
};

export default Homepage;
