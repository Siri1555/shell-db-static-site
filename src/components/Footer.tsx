
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-shelldb-darker pt-16 pb-6 border-t border-shelldb-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck size={24} className="text-shelldb-blue" />
              <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-shelldb-blue to-shelldb-green">
                ShellDB
              </h4>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Advanced cybersecurity protection for your database infrastructure.
              Detect and prevent SQL injection attacks, anomalies, and more.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-shelldb-blue transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-shelldb-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-shelldb-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top">
              <div className="w-full lg:w-4/12 px-4 ml-auto mb-6">
                <span className="block uppercase text-gray-400 text-sm font-semibold mb-4">
                  Resources
                </span>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link to="/documentation" className="text-gray-400 hover:text-shelldb-blue text-sm transition-colors">Documentation</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/download" className="text-gray-400 hover:text-shelldb-blue text-sm transition-colors">Download</Link>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-shelldb-blue text-sm transition-colors">License</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 mb-6">
                <span className="block uppercase text-gray-400 text-sm font-semibold mb-4">
                  Company
                </span>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link to="/about" className="text-gray-400 hover:text-shelldb-blue text-sm transition-colors">About Us</Link>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-shelldb-blue text-sm transition-colors">Blog</a>
                  </li>
                  <li className="mb-2">
                    <a href="mailto:contact@shelldb.io" className="text-gray-400 hover:text-shelldb-blue text-sm transition-colors">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 mb-6">
                <span className="block uppercase text-gray-400 text-sm font-semibold mb-4">
                  Legal
                </span>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-shelldb-blue text-sm transition-colors">Privacy Policy</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-shelldb-blue text-sm transition-colors">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-shelldb-blue/10" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} ShellDB. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
