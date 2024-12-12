// frontend/src/components/SubscriptionForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await axios.post('http://localhost:5000/api/subscribe', { email });
      if (response.data.success) {
        setStatus('Subscribed successfully!');
        setEmail('');
      } else {
        setStatus(response.data.message || 'Subscription failed.');
      }
    } catch (error) {
      setStatus('An error occurred.');
      console.error(error);
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="p-3 rounded-md border border-gray-300 w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0 sm:mr-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
            Subscribe
          </button>
        </form>
        {status && <p className="mt-4 text-green-600">{status}</p>}
      </div>
    </section>
  );
};

export default SubscriptionForm;
