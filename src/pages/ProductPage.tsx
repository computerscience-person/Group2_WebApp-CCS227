import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import ProductDiv from "../components/ProductDiv";

const ProductPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* <main className="flex-grow flex items-center justify-center p-4">
        <h1 className="text-center text-2xl font-bold">
          <strong>Hello World</strong>
        </h1>
      </main> */}
      {/* LAYER 1 BACKGROUND */}
      <div className="w-[1519px] h-[648px]">
        {/* TAGLINE */}
        <div className="absolute w-[832px] h-[170px] left-[74px] top-[190px] font-poppins font-bold text-[72px] leading-[108px]">
          Water intake? Not a problem.
        </div>
        {/* DESCRIPTION */}
        <div className="absolute w-[760px] h-[100px] left-[78px] top-[500px] font-poppins font-normal text-[30px]">
          Thirsty, but tired of drinking plain water? Don’t worry, Water-up has
          your back.
        </div>
      </div>

      {/* LAYER 2 BACKGROUND */}
      <div className="w-[1519px] h-[1500px]">
        {/* OUR PRODUCTS */}
        <div className="absolute w-[484px] h-[108px] left-[174px] top-[700px] font-poppins font-normal text-[72px] leading-[108px]">
          <strong>Our Products</strong>
        </div>
        {/* DESCRIPTION */}
        <div className="absolute w-[1300px] h-[106px] left-[174px] top-[840px] font-poppins font-normal text-[30px] leading-[52px]">
          No matter what they say, no matter what they do, we gonna re-hydrate.
          Keep watering the flowers until it blooms.
        </div>

        {/* PRODUCT 1*/}
        <ProductDiv
          placingLeft={150}
          placingTop={1100}
          imageSrc="./assets/products/waterup_classic.png"
          productName="Product Name"
          productPrice="₱00.00"
        />
        {/* PRODUCT 2*/}
        <ProductDiv
          placingLeft={600}
          placingTop={1100}
          imageSrc="./assets/products/waterup_classic.png"
          productName="Product Name"
          productPrice="₱00.00"
        />
        {/* PRODUCT 3*/}
        <ProductDiv
          placingLeft={1050}
          placingTop={1100}
          imageSrc="./assets/products/waterup_classic.png"
          productName="Product Name"
          productPrice="₱00.00"
        />
        {/* PRODUCT 4*/}
        <ProductDiv
          placingLeft={150}
          placingTop={1700}
          imageSrc="./assets/products/waterup_classic.png"
          productName="Product Name"
          productPrice="₱00.00"
        />
        {/* PRODUCT 5*/}
        <ProductDiv
          placingLeft={600}
          placingTop={1700}
          imageSrc="./assets/products/waterup_classic.png"
          productName="Product Name"
          productPrice="₱00.00"
        />
        {/* PRODUCT 6*/}
        <ProductDiv
          placingLeft={1050}
          placingTop={1700}
          imageSrc="./assets/products/waterup_classic.png"
          productName="Product Name"
          productPrice="₱00.00"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
