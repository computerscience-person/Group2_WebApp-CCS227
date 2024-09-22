const NotFound = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#CFE4F4" }}
    >
      <main className="flex-grow flex items-center justify-between p-10">
        {/* Left content: Oops message, text, and button */}
        <div className="flex flex-col space-y-4 pl-32">
          <h1 className="mb-5 font-poppins text-left text-9xl font-bold text-slate-500 transition-transform duration-80 ease-in-out hover:scale-105">
            Oops!
          </h1>
          <p className="font-poppins text-left text-3xl mb-5">
            We can&apos;t seem to find the page you are looking for.
          </p>
          <button
            className="h-10 w-52 text-2xl rounded-2xl transition-transform duration-80 ease-in-out hover:scale-105"
            style={{ backgroundColor: "#7181A7" }}
          >
            <a className="font-poppins font-bold text-white" href="/home">
              Back to Home
            </a>
          </button>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
