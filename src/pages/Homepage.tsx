import Footer from "../components/Footer";
import NavbarBlue from "../components/Navbars/NavbarBlue";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarBlue />
      <main className="flex-grow flex items-center justify-center p-4">
        <h1 className="text-center text-2xl font-bold">
          <strong>Content in between is here!</strong>
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
