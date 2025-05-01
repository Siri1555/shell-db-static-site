
import React from 'react';
import Card from './Card';
import Button from './Button';
import { Check, Shield, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-shelldb-darker relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-shelldb-blue/5 rounded-bl-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-shelldb-green/5 rounded-tr-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content column */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Next Generation <span className="text-shelldb-blue">Database Security</span>
            </h2>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              ShellDB creates a protective layer around your database infrastructure, 
              defending against SQL injections, zero-day exploits, and other emerging threats 
              that traditional security systems miss.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Real-time threat detection and response",
                "Machine learning-based anomaly detection",
                "Easy integration with existing systems",
                "Comprehensive analytics and reports"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check size={20} className="text-shelldb-green mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="blue" to="/architecture">
                Explore Architecture
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="outline" to="/about">
                About Our Team
              </Button>
            </div>
          </div>
          
          {/* Card column */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-shelldb-blue/10 rounded-full filter blur-3xl"></div>
              <Card glowing={true} className="relative z-10 border-shelldb-blue/30 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-shelldb-blue/20 p-2 rounded-full">
                    <Shield size={24} className="text-shelldb-blue" />
                  </div>
                  <span className="text-xs bg-shelldb-blue/10 text-shelldb-blue px-3 py-1 rounded-full">
                    Real-time
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Protection</h3>
                <p className="text-gray-400 mb-4">
                  ShellDB creates a secure perimeter around your databases, analyzing every query for potential threats before execution.
                </p>
                <div className="w-full bg-gray-800 h-2 rounded-full mb-1">
                  <div className="bg-gradient-to-r from-shelldb-blue to-shelldb-green h-full rounded-full w-[85%]"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Protection level</span>
                  <span>85%</span>
                </div>
              </Card>
              
              <Card className="border border-shelldb-blue/20 relative ml-8 transform -rotate-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Threat Detection</h3>
                  <span className="text-xs bg-shelldb-green/10 text-shelldb-green px-2 py-0.5 rounded-full">
                    ML-Powered
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Automatically learns from your database behavior to detect anomalies and prevent attacks before they happen.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
