import NavbarBlue from "../components/Navbars/NavbarBlue";
import FooterBlue from "../components/Footers/FooterBlue";
import ProductDiv from "../components/ProductDiv";

import wu_classic from "../assets/products/waterup_classic.png";
import wu_lemon from "../assets/products/waterup_lemon.png";
import wu_strawberry from "../assets/products/waterup_strawberry.png";
import wu_peach from "../assets/products/waterup_peach.png";
import wu_assorted from "../assets/products/waterup_intro.png";
import wu_oneFlavor4Pack from "../assets/products/waterup_four.png";

const ProductPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarBlue />

      {/* LAYER 1 BACKGROUND */}
      <div className="w-[100%] h-[648px] bg-[url('./assets/background.png')]">
        {/* TAGLINE */}
        <div className="absolute w-[832px] h-[170px] left-[80px] top-[190px] font-poppins font-bold text-[72px] leading-[108px]">
          Water intake? Not a problem.
        </div>
        {/* DESCRIPTION */}
        <div className="absolute w-[760px] h-[100px] left-[80px] top-[500px] font-poppins font-normal text-[30px]">
          Thirsty, but tired of drinking plain water? Don’t worry, Water-up has
          your back.
        </div>
        <img
          src={wu_classic}
          className="absolute left-[900px] top-[100px] w-auto h-[600px] mr-[80px] transition-transform duration-700 ease-in-out hover:scale-105 "
          alt="Water-Up Classic"
        />
      </div>

      {/* LAYER 2 BACKGROUND */}
      <div className="w-[100%] h-[1500px] mb-8">
        {/* OUR PRODUCTS */}
        <div className=" absolute w-[484px] h-[108px] left-[15%] top-[750px] font-poppins font-normal text-[72px] leading-[108px]">
          <strong>Our Products</strong>
        </div>
        {/* DESCRIPTION */}
        <div className=" absolute w-[1300px] h-[106px] left-[15%] top-[890px] font-poppins font-normal text-[30px] leading-[52px]">
          No matter what they say, no matter what they do, we gonna re-hydrate.
          Keep watering the flowers until it blooms.
        </div>

        {/* PRODUCT 1*/}
        <ProductDiv
          placingLeft={7}
          placingTop={1150}
          imageSrc={wu_classic}
          productName="Product Name"
          productPrice="₱00.00"
        />
        {/* PRODUCT 2*/}
        <ProductDiv
          placingLeft={41}
          placingTop={1150}
          imageSrc={wu_lemon}
          productName="Product Name"
          productPrice="₱00.00"
        />
        {/* PRODUCT 3*/}
        <ProductDiv
          placingLeft={75}
          placingTop={1150}
          imageSrc={wu_strawberry}
          productName="Product Name"
          productPrice="₱00.00"
        />
        {/* PRODUCT 4*/}
        <ProductDiv
          placingLeft={7}
          placingTop={1650}
          imageSrc={wu_peach}
          productName="Product Name"
          productPrice="₱00.00"
        />
        {/* PRODUCT 5*/}
        <ProductDiv
          placingLeft={41}
          placingTop={1650}
          imageSrc={wu_assorted}
          productName="Product Name"
          productPrice="₱00.00"
        />
        {/* PRODUCT 6*/}
        <ProductDiv
          placingLeft={75}
          placingTop={1650}
          imageSrc={wu_oneFlavor4Pack}
          productName="Product Name"
          productPrice="₱00.00"
        />
      </div>
      <FooterBlue />
    </div>
  );
};

export default ProductPage;
