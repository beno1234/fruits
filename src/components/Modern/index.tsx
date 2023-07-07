import React from "react";

const ModernSection: React.FC = () => {
  return (
    <section className="bg-image py-12" data-aos="fade-right">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">
              Chega de pagar aluguel!
            </h2>
            <p className="text-lg text-white mb-8">
              Adquira já seu lote com entrada facilitada.
            </p>
            <a
              href="https://earth.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg underline"
            >
              Ver no Google Earth
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3132.702249198765!2d-44.96735444147276!3d-19.864150113306774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDUxJzUwLjAiUyA0NMKwNTcnNTYuMiJX!5e0!3m2!1spt-BR!2sbr!4v1680097954128!5m2!1spt-BR!2sbr"
              className="w-full h-full md:w-4/5 md:h-96 rounded-md shadow-lg"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSection;