import NavbarSupport from "../components/Navbars/NavbarSupport";

const Support = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSupport />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="min-w-[850px] max-w-5xl">
          <h1 className="text-left text-2xl font-bold">
            Concerns? We&apos;re all ears!
          </h1>
        </div>
        <div className="min-w-[850px] max-w-5xl pb-4">
          <p className="text-left w-full my-1">
            Let us hear your feedback in order for us to better improve our
            product and service next time.
          </p>
        </div>
        <div className="min-w-[850px] max-w-5xl">
          <form className="w-full flex flex-grow flex-col">
            <div className="py-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="supportName"
                className="w-full px-1 border rounded-md border-[#646b70]"
              />
            </div>
            <div className="py-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="supportEmail"
                className="w-full px-1 border rounded-md border-[#646b70]"
              />
            </div>
            <div className="py-2">
              <label htmlFor="ordernum">Order Number</label>
              <input
                type="text"
                name="ordernum"
                id="supportOrderNum"
                className="w-full px-1 border rounded-md border-[#646b70]"
              />
            </div>
            <div className="py-2">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                id="supportCategory"
                className="w-full px-1 border rounded-md border-[#646b70]"
              />
            </div>
            <div className="py-2">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="supportSubject"
                className="w-full px-1 border rounded-md border-[#646b70]"
              />
            </div>
            <div className="py-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="supportMessage"
                rows={5}
                className="w-full px-1 border rounded-md border-[#646b70] resize-none"
              ></textarea>
            </div>
            <div className="py-2">
              <label htmlFor="file">Upload Files</label>
              <input type="file" id="supportFile" className="hidden" />
              <input
                type="button"
                name="file"
                id="supportFileBtn"
                className="w-fit py-1 px-12 border rounded-md border-[#646b70] block"
                onClick={() => document.getElementById("supportFile")?.click()}
                value="Select File"
              />
            </div>
            <div className="py-2">
              <input
                type="button"
                value="Send"
                className="w-fit py-2 px-8 border rounded-md border-[#646b70] block bg-[#cfefe4]"
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Support;
