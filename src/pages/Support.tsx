import NavbarSupport from "../components/Navbars/NavbarSupport";
import Footer from "../components/Footer";

const Support = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSupport />
      <main className="flex-grow flex items-center justify-center p-4">
        <h1 className="text-center text-2xl font-bold">
          <strong>Support Page!</strong>
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
