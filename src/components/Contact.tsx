import React, { useState } from "react";
import axios from "axios";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
     const response = await axios.post("/api/send-email", formData);
      console.log("Response:", response.data);
      setStatus("Email sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send email. Try again.");
    }
  };

  return (
    <section className="bg-gradient-to-t from-gray-900 to-black py-20 px-6" id="contact">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Mail className="text-purple-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-400">nayankuma1234@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Phone className="text-purple-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-400">+91 6363976632</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                <MapPin className="text-purple-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-400">Benagluru, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
            {status && <p className="text-center text-gray-300 mt-4">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
