
import React from 'react';
import { Clock, Bug, Server, Shield, Zap } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { 
      number: "< 5 min", 
      label: "Average Vulnerability Scan Time",
      icon: <Clock className="w-8 h-8 mb-2 mx-auto text-shelldb-blue" />
    },
    { 
      number: "200,000+", 
      label: "CVE Count Tracked",
      icon: <Bug className="w-8 h-8 mb-2 mx-auto text-shelldb-green" />
    },
    { 
      number: "6", 
      label: "Systems Scanned So Far",
      icon: <Server className="w-8 h-8 mb-2 mx-auto text-shelldb-purple" />
    },
    { 
      number: "15k", 
      label: "Queries Per Hour",
      icon: <Zap className="w-8 h-8 mb-2 mx-auto text-yellow-500" />
    }
  ];

  return (
    <section className="py-16 bg-shelldb-dark border-y border-shelldb-blue/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {stat.icon}
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
