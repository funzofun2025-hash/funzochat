import React from "react";

const IconGradientDef = () => (
  <svg width="0" height="0" className="absolute">
    <linearGradient id="feature-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
      <stop stopColor="#3b82f6" offset="0%" /> {/* tailwind blue-500 */}
      <stop stopColor="#d8b4fe" offset="100%" /> {/* tailwind purple-300 */}
    </linearGradient>
  </svg>
);

export default function Feature({ logo, title, description }) {
  return (
    <div className="flex flex-col items-center p-4 text-center shadow-xl transition-all duration-200 hover:shadow-2xl">
      {/* Ensure this is rendered at least once in the DOM */}
      <IconGradientDef />

      <div className="mb-2 text-4xl">
        {/* Clone the icon to inject the fill.
           If your icons are outlined (like Lucide), change 'fill' to 'stroke'.
        */}
        {React.cloneElement(logo, {
          style: { fill: "url(#feature-gradient)" },
        })}
      </div>

      <h1 className="mb-1 text-2xl font-bold">{title}</h1>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
}
