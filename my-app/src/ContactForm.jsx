import { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-4">
      {submitted ? (
        <p className="text-green-500">Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 rounded"
            required
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
