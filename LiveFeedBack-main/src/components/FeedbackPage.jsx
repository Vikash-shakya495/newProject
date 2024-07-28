// src/components/FeedbackPage.js
import React, { useState } from 'react';

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log({ rating, review });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Send us your feedback</h2>
      <p className="text-center mb-6">Do you have any suggestion or have any problem? Let us know in the field below.</p>
      <form onSubmit={handleSubmit}>
        <div className="text-center mb-4">
          <h3 className="font-semibold mb-2">How much do you like our service?</h3>
          <div className="flex justify-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer text-3xl ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
                onClick={() => handleRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="text-center mb-4">
          <img src="/path-to-logo/WasteWise-logo.png" alt="WasteWise" className="mx-auto mb-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">
            Please write your review
          </label>
          <textarea
            id="review"
            name="review"
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Describe your experience..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center space-x-4">
          <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-md">Submit</button>
          <button type="button" className="bg-gray-300 px-4 py-2 rounded-md">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackPage;
