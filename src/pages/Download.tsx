
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Lock, 
  Download as DownloadIcon, 
  FileText, 
  Server, 
  Code 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { toast } from "@/hooks/use-toast";

const Download = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleDownload = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to download the ShellDB script.",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }
    
    toast({
      title: "Download Started",
      description: "shelldb_agent.py is downloading...",
    });
    // In a real app, this would trigger an actual download
    console.log("Downloading shelldb_agent.py");
  };

  const systemRequirements = [
    {
      title: "Minimum System Requirements",
      items: [
        { name: "Processor", value: "Quad-core x86_64" },
        { name: "RAM", value: "16 GB DDR4" },
        { name: "Storage", value: "500 GB NVMe SSD" },
        { name: "Operating System", value: "Ubuntu 20.04+ / CentOS 8+" },
        { name: "Python Version", value: "Python 3.8 or higher" },
        { name: "Internet Connection", value: "Required for CVE data sync from NVD" },
        { name: "Privileges", value: "Root access required for kernel-level integrations" }
      ]
    }
  ];

  return (
    <div className="py-16 container mx-auto px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-shelldb-blue to-shelldb-green">
          Download ShellDB
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Get the latest version of ShellDB for your environment
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-shelldb-blue">System Requirements</h2>
          
          <Accordion type="single" collapsible className="mb-8">
            {systemRequirements.map((category, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-shelldb-blue/20">
                <AccordionTrigger className="hover:text-shelldb-blue transition-colors">
                  {category.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="grid gap-2">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between border-b border-shelldb-blue/10 py-2 hover:bg-shelldb-blue/5 transition-colors px-2">
                          <span>{item.name}</span>
                          <span className="text-shelldb-green">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="bg-shelldb-darker p-6 rounded-lg border border-shelldb-blue/20 mb-12 relative overflow-hidden">
            <div className="flex items-start space-x-4">
              <div className="bg-shelldb-blue/10 p-3 rounded-full">
                <Lock className="text-shelldb-blue h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-shelldb-blue mb-2">
                  Authentication Required
                </h3>
                <p className="text-gray-300">
                  Visitors can view this page without logging in, but downloading the ShellDB script requires user login. 
                  After successful login, download will begin automatically.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-shelldb-blue/5 rounded-full blur-2xl"></div>
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-shelldb-blue">Available Download</h2>
          
          <Card className="bg-shelldb-darker border-shelldb-blue/20 hover:border-shelldb-blue/40 transition-all duration-300 mb-8">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="text-shelldb-green" />
                  <CardTitle className="text-lg">ShellDB Python Script</CardTitle>
                </div>
                {!user && <Lock className="h-4 w-4 text-shelldb-blue" />}
              </div>
              <CardDescription>
                A single .py file that acts as the core agent of the ShellDB framework
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-sm text-gray-300 mb-4">
                  This script:
                </p>
                <ul className="list-disc pl-6 text-sm text-gray-300 space-y-2">
                  <li className="animate-fade-in" style={{ animationDelay: '100ms' }}>Monitors SQL queries for anomalies</li>
                  <li className="animate-fade-in" style={{ animationDelay: '200ms' }}>Connects with OS-level logging for real-time threat detection</li>
                  <li className="animate-fade-in" style={{ animationDelay: '300ms' }}>Queries the National Vulnerability Database (NVD) to assess CVE risks</li>
                  <li className="animate-fade-in" style={{ animationDelay: '400ms' }}>Sends email alerts via configured SMTP settings</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border border-shelldb-blue/10 rounded-md p-3">
                  <p className="text-xs text-gray-400 mb-1">File Name</p>
                  <p className="text-sm font-mono text-shelldb-blue">shelldb_agent.py</p>
                </div>
                <div className="border border-shelldb-blue/10 rounded-md p-3">
                  <p className="text-xs text-gray-400 mb-1">Size</p>
                  <p className="text-sm">~120 KB</p>
                </div>
                <div className="border border-shelldb-blue/10 rounded-md p-3">
                  <p className="text-xs text-gray-400 mb-1">Language</p>
                  <p className="text-sm">Python 3.x</p>
                </div>
                <div className="border border-shelldb-blue/10 rounded-md p-3">
                  <p className="text-xs text-gray-400 mb-1">Dependencies</p>
                  <p className="text-sm font-mono text-xs">requests, smtplib, logging, json...</p>
                </div>
              </div>
              
              <Button 
                onClick={handleDownload}
                variant={user ? "default" : "outline"}
                className={user ? "bg-shelldb-blue hover:bg-shelldb-blue/90 w-full" : "w-full"}
              >
                {user ? "Download" : "Login to Download"}
              </Button>
            </CardContent>
          </Card>
          
          <div className="bg-shelldb-darker/50 p-6 rounded-lg border border-shelldb-blue/10 mb-6">
            <h3 className="text-lg font-semibold text-shelldb-blue mb-3">
              Additional Notes
            </h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-shelldb-blue mr-2">•</span>
                <span>The script is intended to run on the same server or network as the target database.</span>
              </li>
              <li className="flex items-start">
                <span className="text-shelldb-blue mr-2">•</span>
                <span>Configuration instructions are provided in the Documentation section.</span>
              </li>
              <li className="flex items-start">
                <span className="text-shelldb-blue mr-2">•</span>
                <span>Use caution and test on staging environments before deploying to production.</span>
              </li>
              <li className="flex items-start">
                <span className="text-shelldb-blue mr-2">•</span>
                <span>Updates to this script will be announced on the homepage.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
