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
      {/* LAYER 1 GRIDDING */}
      <div className="grid grid-cols-12 grid-rows-5 gap-4 h-[648px] bg-[url('./assets/background.png')] text-[#FFFFFF]">
        {/* TAGLINE */}
        <div className="col-start-2 col-end-8 row-start-2 font-poppins font-bold text-[65px] leading-[108px] ">
          Water intake? Not a problem.
        </div>
        {/* DESCRIPTION */}
        <div className="col-start-2 col-end-8 row-start-4 font-poppins font-normal text-[27px] ">
          Thirsty, but tired of drinking plain water? Don’t worry, Water-up has
          your back.
        </div>
        {/* PRODUCT IMAGE */}
        <img
          src={wu_classic}
          className=" col-start-8 col-end-12 row-span-5 w-auto h-[85%] transition-transform duration-700 ease-in-out hover:scale-105 mt-7 ml-10"
          alt="Water-Up Classic"
        />
      </div>

      {/* LAYER 2 GRIDDING */}
      <div className="grid grid-cols-8 grid-rows-10 gap-4 h-[1500px] text-[#7181A7]">
        {/* OUR PRODUCTS */}
        <div className=" col-start-2 col-end-5 row-start-2 font-poppins font-normal text-[72px] leading-[108px]">
          <strong>Our Products</strong>
        </div>
        {/* DESCRIPTION */}
        <div className=" col-start-2 col-end-8 row-start-3 font-poppins font-normal text-[27px] leading-[52px]">
          No matter what they say, no matter what they do, we gonna re-hydrate.
          Keep watering the flowers until it blooms.
        </div>
        {/* PRODUCT */}
        <div className=" col-start-2 col-end-4 row-start-4 row-end-7 bg-blue-200 m-8 rounded-[45px]">
          <ProductDiv
            imageSrc={wu_classic}
            productName="Product Name"
            productPrice="₱00.00"
          />
        </div>
        <div className=" col-start-4 col-end-6 row-start-4 row-end-7 bg-blue-200 m-8 rounded-[45px]">
          <ProductDiv
            imageSrc={wu_lemon}
            productName="Product Name"
            productPrice="₱00.00"
          />
        </div>
        <div className=" col-start-6 col-end-8 row-start-4 row-end-7 bg-blue-200 m-8 rounded-[45px]">
          <ProductDiv
            imageSrc={wu_strawberry}
            productName="Product Name"
            productPrice="₱00.00"
          />
        </div>

        <div className=" col-start-2 col-end-4 row-start-7 row-end-10 bg-blue-200 m-8 rounded-[45px]">
          <ProductDiv
            imageSrc={wu_peach}
            productName="Product Name"
            productPrice="₱00.00"
          />
        </div>
        <div className=" col-start-4 col-end-6 row-start-7 row-end-10 bg-blue-200 m-8 rounded-[45px]">
          <ProductDiv
            imageSrc={wu_assorted}
            productName="Product Name"
            productPrice="₱00.00"
          />
        </div>
        <div className=" col-start-6 col-end-8 row-start-7 row-end-10 bg-blue-200 m-8 rounded-[45px]">
          <ProductDiv
            imageSrc={wu_oneFlavor4Pack}
            productName="Product Name"
            productPrice="₱00.00"
          />
        </div>
      </div>

      <FooterBlue />
    </div>
  );
};

export default ProductPage;
