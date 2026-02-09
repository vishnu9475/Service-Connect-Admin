import React from "react";



const About108 = ({ data }) => {
  return (
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 md:px-10 py-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {data.map((section, index) => (
          <div key={index} className="space-y-3">
            {/* Section Title */}
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              {section.title}
            </h2>

            {/* Section Content */}
            {section.content.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="text-sm sm:text-base text-gray-600 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About108;