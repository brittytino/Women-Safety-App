"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_voxz59t",
        "template_qr88xjb",
        formData,
        "UfyNsDNPDhoFoCWRP"
      )
      .then((response) => {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setResponseMessage("Failed to send message.");
        console.error("EmailJS error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      className="py-16 px-8 bg-gray-100"
      style={{
        backgroundImage: "url('/bg2.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-rose-400">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          We're here to help. Whether you have a question, need support, or want
          to provide feedback, feel free to reach out to us through the form
          below or by using the provided emergency contact numbers.
        </p>

        {/* Emergency Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Police */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            style={{
              backgroundImage: "url('/bg3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Police
            </h3>
            <p className="text-lg text-gray-600">
              Emergency Number:{" "}
              <span className="font-bold text-red-600">100</span>
            </p>
          </div>

          {/* Ambulance */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            style={{
              backgroundImage: "url('/bg3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Ambulance
            </h3>
            <p className="text-lg text-gray-600">
              Emergency Number:{" "}
              <span className="font-bold text-red-600">102</span>
            </p>
          </div>

          {/* National Commission for Women Helpline */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            style={{
              backgroundImage: "url('/bg3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              National Commission for Women Helpline
            </h3>
            <p className="text-lg text-gray-600">
              Emergency Number:{" "}
              <span className="font-bold text-red-600">7827170170</span>
            </p>
          </div>

          {/* Central Social Welfare Board - Police Helpline */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            style={{
              backgroundImage: "url('/bg3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Central Social Welfare Board - Police Helpline
            </h3>
            <p className="text-lg text-gray-600">
              Emergency Numbers:{" "}
              <span className="font-bold text-red-600">1091 / 1291</span>, (011)
              23317004
            </p>
          </div>

          {/* Shakti Shalini */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            style={{
              backgroundImage: "url('/bg3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Shakti Shalini
            </h3>
            <p className="text-lg text-gray-600">
              Emergency Number:{" "}
              <span className="font-bold text-red-600">10920</span>
            </p>
          </div>

          {/* Shakti Shalini - Women's Shelter */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            style={{
              backgroundImage: "url('/bg3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Shakti Shalini - Women's Shelter
            </h3>
            <p className="text-lg text-gray-600">
              Emergency Numbers:{" "}
              <span className="font-bold text-red-600">
                (011) 24373736 / 24373737
              </span>
            </p>
          </div>

          {/* SAARTHAK */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            style={{
              backgroundImage: "url('/bg3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              SAARTHAK
            </h3>
            <p className="text-lg text-gray-600">
              Emergency Numbers:{" "}
              <span className="font-bold text-red-600">
                (011) 26853846 / 26524061
              </span>
            </p>
          </div>

          {/* All India Women's Conference */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            style={{
              backgroundImage: "url('/bg3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              All India Women's Conference
            </h3>
            <p className="text-lg text-gray-600">
              Emergency Numbers:{" "}
              <span className="font-bold text-red-600">
                10921 / (011) 23389680
              </span>
            </p>
          </div>

          {/* Sakshi - Violence Intervention Center */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            style={{
              backgroundImage: "url('/bg3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Sakshi - Violence Intervention Center
            </h3>
            <p className="text-lg text-gray-600">
              Emergency Numbers:{" "}
              <span className="font-bold text-red-600">
                (0124) 2562336 / 5018873
              </span>
            </p>
          </div>

          {/* Saheli - A Women's Organization */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            style={{
              backgroundImage: "url('/bg3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Saheli - A Women's Organization
            </h3>
            <p className="text-lg text-gray-600">
              Emergency Number:{" "}
              <span className="font-bold text-red-600">
                (011) 24616485 (Saturdays)
              </span>
            </p>
          </div>

          {/* Nirmal Niketan */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            style={{
              backgroundImage: "url('/bg3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Nirmal Niketan
            </h3>
            <p className="text-lg text-gray-600">
              Emergency Number:{" "}
              <span className="font-bold text-red-600">(011) 27859158</span>
            </p>
          </div>

          {/* Nari Raksha Samiti */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
            style={{
              backgroundImage: "url('/bg3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Nari Raksha Samiti
            </h3>
            <p className="text-lg text-gray-600">
              Emergency Number:{" "}
              <span className="font-bold text-red-600">(011) 23973949</span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
          style={{
            backgroundImage: "url('/bg3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-left text-gray-600 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-left text-gray-600 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-left text-gray-600 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
                rows="4"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-800 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {responseMessage && (
            <p className="mt-4 text-lg text-gray-600">{responseMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
