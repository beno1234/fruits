const Header = () => {
  return (
    <div className="bg-[#102619] relative min-h-screen">
      <div
        style={{
          backgroundImage: "url(/pexels-photo-12264621.jpeg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="h-screen md:h-full absolute w-full bg-no-repeat bg-cover corner-shapes-wrap"
      >
        <div className="corner-shapes"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative">
          <div className="mx-auto text-center">
            <div className="mb-0">
              <img
                src="/logoAmazonas2.png"
                className="mx-auto w-[40%] md:w-[30%] mb-0"
                alt="Logo Amazonas"
              />
              <h2 className="text-white text-4xl font-bold mt-4">
                O lugar perfeito para construir os seus sonhos. <br />
                Lançamento em breve!
              </h2>
              <div className="mx-auto w-min mt-10 rounded-lg shadow-xl">
                <h3 className="bg-[#4d8a3f] font-montserrat p-1 text-white text-5xl">
                  LOTES
                </h3>
              </div>
              <div className="mx-auto w-56 md:w-80 mt-2 rounded-lg shadow-xl">
                <h3 className="bg-[#4d8a3f] font-montserrat p-1 text-white text-3xl">
                  A PARTIR DE <br />
                  <span className="text-5xl">160m²</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
