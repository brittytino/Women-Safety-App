"use client"; // Client component

import axios from "axios";

export default function SOSButton() {
  const sendSOS = async () => {
    try {
      await axios.post("/api/sos");
      alert("SOS sent!");
    } catch (error) {
      console.error(error);
      alert("Failed to send SOS!");
    }
  };

  return (
    <button
      className="bg-red-500 text-white p-4 rounded mb-6"
      onClick={sendSOS}
    >
      Send SOS
    </button>
  );
}
