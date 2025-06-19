import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-md mx-auto my-8 p-8 border border-gray-200 rounded-lg shadow-sm bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Contact Information
      </h2>
      <ul className="space-y-4">
        <li>
          <strong className="text-gray-700">Email:</strong>{" "}
          <a
            href="mailto:Prashmingrg@gmail.com"
            className="text-blue-600 hover:underline"
          >
            Prashmingrg@gmail.com
          </a>
        </li>
        <li>
          <strong className="text-gray-700">Phone:</strong>{" "}
          <a href="tel:0426862304" className="text-blue-600 hover:underline">
            0426 862 304
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactPage;
