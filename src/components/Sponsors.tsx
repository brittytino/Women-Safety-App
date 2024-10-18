export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Our Vision
      </h2>

      <div className="bg-gray-50 shadow-md rounded-lg p-8 max-w-xl mx-auto mb-8 border border-gray-200">
        <p className="text-center text-lg lg:text-xl text-gray-700 mb-4">
          Right now, we’re open for contributions. In the future? We’re looking to partner with businesses who don’t just talk about safety but invest in it. The journey’s just starting!
        </p>

        <div className="flex justify-center">
          <button className="bg-primary text-white py-3 px-6 rounded-full shadow hover:bg-primary-dark transition transform hover:scale-105">
            Get Involved
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <p className="text-gray-600 text-sm italic">
          Join us in making a difference!
        </p>
      </div>
    </section>
  );
};
