
import React from 'react';
import Button from './Button';

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 z-0"></div>
      <div className="absolute top-1/4 left-1/3 w-1/3 h-1/3 bg-shelldb-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-1/4 h-1/4 bg-shelldb-green/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-shelldb-blue">Secure</span> Your Databases?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Join thousands of companies that trust ShellDB to protect their most valuable data assets from threats and vulnerabilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="blue" size="lg" to="/download">
              Get Started Now
            </Button>
            <Button variant="outline" size="lg" to="/documentation">
              Read Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
