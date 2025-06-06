
import React from 'react';

const Architecture = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-shelldb-blue to-shelldb-green">
          ShellDB Architecture
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          Explore the comprehensive architecture of ShellDB, showing the Web-OS-DB layer structure, 
          alert detection flow, and component interactions.
        </p>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-shelldb-darker border border-shelldb-blue/20 rounded-lg p-6 mb-8">
            <img 
              src="/lovable-uploads/c38a67c1-957e-4eed-8e42-3f37f729e0c6.png" 
              alt="ShellDB Architecture Diagram" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-shelldb-darker border border-shelldb-blue/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-shelldb-blue mb-4">Client Side Components</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Installation and Configuration</li>
                <li>• Kernel/OS Integration</li>
                <li>• Step-wise Deployment</li>
                <li>• Data Collection (Standalone)</li>
                <li>• CVE Scanning & Monitoring</li>
                <li>• CPE Identification</li>
              </ul>
            </div>
            
            <div className="bg-shelldb-darker border border-shelldb-blue/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-shelldb-green mb-4">Server Side Architecture</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Flask API Service</li>
                <li>• MongoDB Update Service</li>
                <li>• Report Generation Service</li>
                <li>• Third Party API Integration</li>
                <li>• WebApp Tunneling</li>
                <li>• Alert System (Email/Direct)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
