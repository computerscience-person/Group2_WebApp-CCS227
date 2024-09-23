import NavbarBlue from "../components/Navbars/NavbarBlue";
import FooterBlue from "../components/Footers/FooterBlue";
import ProductDiv from "../components/ProductDiv";

import wu_classic from "../assets/products/waterup_classic.png";
import wu_lemon from "../assets/products/waterup_lemon.png";
import wu_strawberry from "../assets/products/waterup_strawberry.png";
import wu_peach from "../assets/products/waterup_peach.png";
import wu_assorted from "../assets/products/waterup_intro.png";
import wu_oneFlavor4Pack from "../assets/products/waterup_four.png";

const products = [
  { imageSrc: wu_classic, productName: "CLASSIC", productPrice: "₱00.00" },
  { imageSrc: wu_lemon, productName: "LIVELY LEMON", productPrice: "₱00.00" },
  {
    imageSrc: wu_strawberry,
    productName: "SILKY STRAWBERRY",
    productPrice: "₱00.00",
  },
  { imageSrc: wu_peach, productName: "PRETTY PEACH", productPrice: "₱00.00" },
  {
    imageSrc: wu_assorted,
    productName: "ASSORTED 4-PACK",
    productPrice: "₱00.00",
  },
  {
    imageSrc: wu_oneFlavor4Pack,
    productName: "ONE FLAVOR 4-PACK",
    productPrice: "₱00.00",
  },
];

const ProductPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarBlue />
      {/* LAYER 1 GRIDDING */}
      <div className="grid grid-cols-12 grid-rows-5 gap-4 h-[648px] bg-[url('./assets/background.png')] bg-[center_55%] bg-cover text-[#F5F5F5]">
        {/* TAGLINE */}
        <div className="col-start-1 col-end-8 row-start-1 leading-[108px]">
          <h1 className="font-poppins font-bold text-4xl lg:text-6xl leading-[108px] mt-40 ml-20">
            Water intake? Not a problem
          </h1>
        </div>
        {/* DESCRIPTION */}
        <div className="col-start-1 col-end-8 row-start-3 ml-20 mt-16">
          <p className="font-poppins text-lg lg:text-xl font-normal ">
            Thirsty, but tired of drinking plain water? Don’t worry, Water-up
            has your back.
          </p>
        </div>
        {/* PRODUCT IMAGE */}
        <img
          src={wu_classic}
          className="col-start-8 col-end-12 row-span-5 w-full lg:w-auto h-[300px] lg:h-[500px] mt-32 ml-10 transition-transform duration-700 ease-in-out hover:scale-105"
          alt="Water-Up Classic"
        />
      </div>

      {/* LAYER 2 GRIDDING */}
      <div className="grid grid-cols-8 grid-rows-10 gap-4 h-[1500px]">
        {/* OUR PRODUCTS */}
        <div className="col-start-2 col-end-5 row-start-2">
          <h1
            className="font-poppins font-bold text-4xl lg:text-6xl"
            style={{ color: "#7181A7" }}
          >
            Our Products
          </h1>
        </div>

        {/* DESCRIPTION */}
        <div className="col-start-2 col-end-8 row-start-3">
          <p
            className="font-poppins text-lg lg:text-xl font-normal"
            style={{ color: "#7181A7" }}
          >
            No matter what they say, no matter what they do, we gonna
            re-hydrate. Keep watering the flowers until it blooms.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="col-start-2 col-end-8 row-start-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductDiv
              key={index}
              imageSrc={product.imageSrc}
              productName={product.productName}
              productPrice={product.productPrice}
            />
          ))}
        </div>
      </div>

      <FooterBlue />
    </div>
  );
};

export default ProductPage;
