
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Lock, 
  Download as DownloadIcon, 
  Server, 
  Database, 
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

  const handleDownload = (fileName: string) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to download ShellDB components.",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }
    
    toast({
      title: "Download Started",
      description: `${fileName} is downloading...`,
    });
    // In a real app, this would trigger an actual download
    console.log(`Downloading ${fileName}`);
  };

  const systemRequirements = [
    {
      title: "Hardware Requirements",
      items: [
        { name: "Processor", min: "Quad-core x86_64", recommended: "8-core 2.5 GHz+" },
        { name: "Memory (RAM)", min: "16 GB DDR4", recommended: "32 GB ECC" },
        { name: "Storage", min: "500 GB NVMe SSD", recommended: "1 TB PCIe 4.0 SSD (RAID-1 recommended)" },
        { name: "OS", min: "Linux (supports CentOS, Ubuntu)", recommended: "AWS EC2/RDS instances" }
      ]
    },
    {
      title: "Software Requirements",
      items: [
        { name: "Database", value: "MongoDB" },
        { name: "Runtime", value: "Python 3.8+ / Node.js 18+" },
        { name: "Email Service", value: "Zoho Mail SMTP" },
        { name: "Containerization", value: "Docker 20.10+, Kubernetes (optional)" },
        { name: "Security Tools", value: "Snort, Suricata, Zeek" }
      ]
    }
  ];

  const downloadOptions = [
    { name: "ShellDB Linux Installer", description: "Ubuntu/CentOS package", icon: <Server className="text-shelldb-blue" /> },
    { name: "Docker Image", description: "Container deployment", icon: <DownloadIcon className="text-shelldb-green" /> },
    { name: "Kubernetes YAML Files", description: "Orchestration files", icon: <Code className="text-shelldb-blue" /> },
    { name: "CVE Sync Utility", description: "Vulnerability database", icon: <Database className="text-shelldb-green" /> },
    { name: "Web Dashboard Package", description: "Node.js application", icon: <Code className="text-shelldb-blue" /> }
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
                    {category.title === "Hardware Requirements" ? (
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-shelldb-blue/20">
                              <th className="text-left py-2">Component</th>
                              <th className="text-left py-2">Minimum</th>
                              <th className="text-left py-2">Recommended</th>
                            </tr>
                          </thead>
                          <tbody>
                            {category.items.map((item, idx) => (
                              <tr key={idx} className="border-b border-shelldb-blue/10 hover:bg-shelldb-blue/5 transition-colors">
                                <td className="py-2">{item.name}</td>
                                <td className="py-2 text-gray-400">{item.min}</td>
                                <td className="py-2 text-shelldb-green">{item.recommended}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="grid gap-2">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between border-b border-shelldb-blue/10 py-2 hover:bg-shelldb-blue/5 transition-colors px-2">
                            <span>{item.name}</span>
                            <span className="text-shelldb-green">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
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
                  Login is required to download. Visitors can view this page, but downloading software 
                  or documentation requires user authentication.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-shelldb-blue/5 rounded-full blur-2xl"></div>
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-shelldb-blue">Download Options</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {downloadOptions.map((option, index) => (
              <Card key={index} className={`bg-shelldb-darker border-shelldb-blue/20 hover:border-shelldb-blue/40 transition-all duration-300 ${!user ? 'opacity-80' : 'hover:shadow-md hover:shadow-shelldb-blue/10'}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {option.icon}
                      <CardTitle className="text-lg">{option.name}</CardTitle>
                    </div>
                    {!user && <Lock className="h-4 w-4 text-shelldb-blue" />}
                  </div>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => handleDownload(option.name)}
                    variant={user ? "default" : "outline"}
                    className={user ? "bg-shelldb-blue hover:bg-shelldb-blue/90 w-full" : "w-full"}
                  >
                    {user ? "Download" : "Login to Download"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
