"use client";
import { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message envoyé !");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Erreur lors de l'envoi. Réessayez.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Contactez-moi</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-white"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-white"
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-all">
          Envoyer
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}
