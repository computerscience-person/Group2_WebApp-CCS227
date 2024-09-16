import Navbar from "../components/navbar";
import Footer from "../components/Footer";
// IMPORTING THE CSS
import "../ProductPageStyles.css";

const ProductPage = () => {
  return (
    // DIVISION

    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* LAYER 1 */}
      <div className="Layer1">
        <p className="tagline">Water-up: Drink water everyday.</p>
        <br />
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="Layer2"></div>

      <Footer />
    </div>
  );
};

export default ProductPage;
