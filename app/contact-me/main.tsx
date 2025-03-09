import { useState } from 'react';

//Formulaire avec Formspree
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Envoie les données à Formspree
    const response = await fetch('https://formspree.io/f/xgvawgen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    });

    if (response.ok) {
      setStatus('Message send successfully! I will get back to you as soon as possible.');
    } else {
      setStatus('I\'m sorry, but there was an error sending the message. Please try again later.');
    }

    // Réinitialise le formulaire
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <div className="flex justify-center flex-col">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-semibold">Contact Me!</h1>
          <p className="text-[#F2E3DE] p-10 m-0 w-full max-w-md bg-[#373b47]/[50%] rounded-2xl mx-auto mt-4">
            If you like my portfolio and my profile, I invite you to send me a message so we can exchange!
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-lg w-full p-6 bg-[#565b6d] rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 text-sm text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 text-sm text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">Message :</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 text-sm text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-2 px-4 text-white bg-[#424553] rounded-md hover:bg-[#353743] focus:outline-none focus:ring-2 focus:bg-[#868ca7]"
        >
          Send !
        </button>
        {status && <p className="mt-4 text-sm text-green-600 text-center">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;

