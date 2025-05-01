
import React from 'react';
import Button from './Button';
import { Shield, Database, Terminal, ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-tech-grid z-0 opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-shelldb-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-shelldb-green/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Shield size={64} className="text-shelldb-blue animate-float" />
              <Database size={28} className="absolute bottom-0 right-0 text-shelldb-green" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-shelldb-blue to-shelldb-green text-glow">
              ShellDB
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-300">
            Advanced Database Security Protection System
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            Protect your database infrastructure from SQL injections, anomalies, and threats with our 
            <span className="text-shelldb-blue"> machine-learning</span> powered defense system.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button variant="blue" size="lg" to="/download">
              <Download size={18} className="mr-2" />
              Download Now
            </Button>
            <Button variant="green" size="lg" to="/features">
              Learn More
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto text-sm">
            <div className="p-4 border border-shelldb-blue/20 rounded-lg bg-shelldb-darker/60 backdrop-blur-sm">
              <div className="bg-shelldb-blue/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Shield size={24} className="text-shelldb-blue" />
              </div>
              <h3 className="font-medium mb-2">Real-Time Protection</h3>
              <p className="text-gray-400">Block attacks as they happen with millisecond response time</p>
            </div>
            
            <div className="p-4 border border-shelldb-blue/20 rounded-lg bg-shelldb-darker/60 backdrop-blur-sm">
              <div className="bg-shelldb-green/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Terminal size={24} className="text-shelldb-green" />
              </div>
              <h3 className="font-medium mb-2">SQL Injection Defense</h3>
              <p className="text-gray-400">Advanced pattern recognition to stop malicious queries</p>
            </div>
            
            <div className="p-4 border border-shelldb-blue/20 rounded-lg bg-shelldb-darker/60 backdrop-blur-sm">
              <div className="bg-shelldb-purple/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Database size={24} className="text-shelldb-purple" />
              </div>
              <h3 className="font-medium mb-2">ML Anomaly Detection</h3>
              <p className="text-gray-400">Self-learning system adapts to your database patterns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
