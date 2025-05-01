
import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: "99.9%", label: "Protection Rate" },
    { number: "<5ms", label: "Response Time" },
    { number: "10,000+", label: "Databases Protected" },
    { number: "24/7", label: "Monitoring" }
  ];

  return (
    <section className="py-16 bg-shelldb-dark border-y border-shelldb-blue/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-shelldb-blue to-shelldb-green">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
