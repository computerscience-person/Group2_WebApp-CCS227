// Homepage.tsx
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
        className="flex flex-col lg:flex-row h-auto lg:h-[648px] items-center justify-between mb-10 lg:mb-20 px-8 lg:px-20"
        style={{ backgroundColor: "#CFE4F4" }}
      >
        {/* Text Description */}
        <div className="w-full lg:w-[60%] text-center lg:text-left font-poppins">
          <h1
            className="font-bold text-4xl lg:text-6xl pb-4 lg:pb-5"
            style={{ color: "#7181A7" }}
          >
            WATER-UP: <br /> Water made better.
          </h1>
          <button
            className="h-10 w-32 lg:w-40 text-lg lg:text-2xl rounded-2xl transition-transform duration-80 ease-in-out hover:scale-105"
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
          className="w-full lg:w-auto h-[300px] lg:h-[500px] mt-8 lg:mt-0 transition-transform duration-700 ease-in-out hover:scale-105"
          alt="Water-Up Classic"
        />
      </div>

      {/* LAYER 2 */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full h-auto lg:h-[550px] px-8 lg:px-20 mb-12 lg:mb-20">
        <div className="w-full lg:w-[55%] text-center lg:text-left">
          <h1
            className="font-poppins font-bold text-4xl lg:text-6xl mb-8 lg:mb-16 transition-transform duration-700 ease-in-out hover:scale-105"
            style={{ color: "#7181A7" }}
          >
            What is Water-Up?
          </h1>
          <p
            className="font-poppins text-lg lg:text-xl"
            style={{ color: "#7181A7" }}
          >
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
          className="w-full lg:w-auto h-[300px] lg:h-[500px] mt-8 lg:mt-0 transition-transform duration-700 ease-in-out hover:scale-105"
          alt="Water-Up Intro"
        />
      </div>

      {/* LAYER 3 */}
      <div
        className="w-full h-auto lg:h-[350px] flex flex-col justify-center items-center"
        style={{ backgroundColor: "#CFE4F4" }}
      >
        <h1
          className="font-poppins text-4xl lg:text-6xl font-bold pb-8 lg:pb-12"
          style={{ color: "#7181A7" }}
        >
          Highlights
        </h1>
        <div className="w-full h-auto lg:h-[100px] flex flex-wrap lg:flex-nowrap justify-around lg:justify-between px-8 lg:px-20">
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
      <div className="bg-white w-full h-auto lg:h-[550px] flex flex-col justify-start items-start px-8 lg:px-20 pt-8 lg:pt-12">
        <h1
          className="font-poppins text-4xl lg:text-6xl font-bold mb-6"
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
