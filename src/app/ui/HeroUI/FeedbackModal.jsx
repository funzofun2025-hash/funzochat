"use client";
import { X } from "lucide-react";

function FeedbackModal({ handleClose }) {
  return (
    <div className="animate-in fade-in fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm duration-200">
      <div className="animate-in zoom-in-95 relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl duration-200">
        {/* Close Icon */}
        <button
          onClick={() => handleClose(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <h2 className="mb-4 text-xl font-bold text-gray-900">
          We value your feedback
        </h2>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Feedback sent!");
            handleClose(false);
          }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              placeholder="Tell us what you think..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
export default FeedbackModal;
