import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const ProductPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <h1 className="text-center text-2xl font-bold">
          <strong>Content in between is here!</strong>
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
