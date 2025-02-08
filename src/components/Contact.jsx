import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) errors.email = "Invalid email format";
    if (!formData.phone) errors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone)) errors.phone = "Invalid phone number format";
    if (!formData.message) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const emailParams = {
      from_name: formData.name, // Sender's name
      from_email: formData.email, // Sender's email
      phone: formData.phone, // Sender's phone number
      message: formData.message, // Message content
      to_name: "Your Name", // Replace with your actual name or keep dynamic
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Your EmailJS service ID from .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Your EmailJS template ID from .env
        emailParams, // Ensure it matches your template variables
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Your EmailJS public key from .env
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          setFormData({ name: "", email: "", phone: "", message: "" });
          setErrors({});
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#D1CFC9] p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <h2 className="text-3xl font-bold mb-4 text-center text-[#2C2C2C]">GET IN TOUCH !</h2>
        <p className="text-gray-700 mb-6 text-center">
          Gift a touch of art! For personalized portraits or enquiries about my work, reach out to me. Let's chat about bringing creativity into your space!
        </p>
        {isSent && (
          <p className="text-green-500 text-center mb-4">
            Message sent successfully!
          </p>
        )}
        <form onSubmit={handleSubmit} className="bg-transparent p-4 rounded-lg">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-black border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-black border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-black border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <textarea
            name="message"
            placeholder="Type your message here"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 h-24 rounded-md bg-black border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 mb-4"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#2C2C2C] text-white font-semibold hover:bg-[#8A817C] transition"
          >
            Send
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-[#2C2C2C] hover:text-[#8A817C] transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Contact;
