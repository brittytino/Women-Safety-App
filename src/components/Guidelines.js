"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Guidelines() {
  const [guidelines, setGuidelines] = useState([]);

  useEffect(() => {
    const fetchGuidelines = async () => {
      try {
        const res = await axios.get("/api/guidelines");
        setGuidelines(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGuidelines();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Security Guidelines</h2>
      <ul className="list-disc pl-6">
        {guidelines.map((guideline, index) => (
          <li key={index} className="mb-2">
            {guideline}
          </li>
        ))}
      </ul>
    </div>
  );
}
