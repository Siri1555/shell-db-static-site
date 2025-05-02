
import React, { useState } from 'react';
import { 
  Book, 
  Server, 
  Shield, 
  Settings, 
  Mail, 
  Database, 
  HelpCircle, 
  AlertTriangle
} from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger
} from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Documentation = () => {
  const [openSection, setOpenSection] = useState<string>('installation');
  const [isOpen, setIsOpen] = useState(false);

  // Code snippets for the documentation
  const codeSnippets = {
    installation: `# Install ShellDB on Ubuntu
sudo apt update
sudo apt install -y mongodb python3.8 python3-pip
pip3 install shelldb-client

# Start the ShellDB service
sudo systemctl enable shelldb
sudo systemctl start shelldb

# Verify installation
shelldb --version`,

    config: `# Network Configuration
# /etc/shelldb/network.conf

listen_address = 0.0.0.0
port = 8675
ssl = true
cert_path = /etc/shelldb/certs/server.crt
key_path = /etc/shelldb/certs/server.key

# Firewall Settings
# Allow ShellDB traffic
firewall-cmd --permanent --add-port=8675/tcp
firewall-cmd --reload`,

    kernel: `# Enable kernel modules for monitoring
sudo modprobe auditd
sudo modprobe bpf_jit_enable=1

# Configure root privileges for ShellDB
echo "shelldb ALL=(ALL) NOPASSWD: /usr/bin/shelldb-kernel-module" > /etc/sudoers.d/shelldb

# Start the kernel monitoring service
sudo systemctl enable shelldb-kernel-monitor
sudo systemctl start shelldb-kernel-monitor`,

    smtp: `# Zoho SMTP Configuration
# /etc/shelldb/alerts.conf

[smtp]
server = smtp.zoho.com
port = 587
use_tls = true
username = alerts@yourdomain.com
password = your_secure_password
from_address = alerts@yourdomain.com
alert_recipients = admin@yourdomain.com, security@yourdomain.com

[alerts]
severity_threshold = high
notification_cooldown = 300  # seconds
include_remediation = true`,

    cve: `# Configure CVE sync
# /etc/shelldb/cve-sync.conf

[nvd]
api_key = your_nvd_api_key
sync_interval = 86400  # daily in seconds

[mongodb]
uri = mongodb://localhost:27017/
database = shelldb
collection = vulnerabilities

# Run the sync manually
shelldb-cve-sync --force-update

# Schedule automatic updates
echo "0 2 * * * /usr/bin/shelldb-cve-sync" | crontab -`
  };

  const docSections = [
    {
      id: 'installation',
      icon: <Server className="h-5 w-5" />,
      title: 'Installation Instructions',
      color: 'text-shelldb-blue',
      content: (
        <div className="space-y-4">
          <p>Follow these steps to install ShellDB on your Linux system:</p>
          
          <Tabs defaultValue="ubuntu" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="ubuntu">Ubuntu</TabsTrigger>
              <TabsTrigger value="centos">CentOS</TabsTrigger>
            </TabsList>
            <TabsContent value="ubuntu" className="space-y-4">
              <h4 className="font-semibold">System Preparation</h4>
              <p>Make sure your system meets the minimum hardware requirements:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>Quad-core x86_64 processor</li>
                <li>16 GB DDR4 RAM</li>
                <li>500 GB NVMe SSD</li>
              </ul>
              
              <h4 className="font-semibold mt-4">Installation Steps</h4>
              <Card className="bg-shelldb-darker border-shelldb-blue/20">
                <CardContent className="pt-6">
                  <pre className="text-sm overflow-x-auto p-4 bg-black/50 rounded-md">
                    <code className="text-shelldb-green">{codeSnippets.installation}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="centos" className="space-y-4">
              <h4 className="font-semibold">System Preparation</h4>
              <p>For CentOS systems, the installation is slightly different:</p>
              <Card className="bg-shelldb-darker border-shelldb-blue/20">
                <CardContent className="pt-6">
                  <pre className="text-sm overflow-x-auto p-4 bg-black/50 rounded-md">
                    <code className="text-shelldb-green">{`# Install ShellDB on CentOS
sudo yum update
sudo yum install -y mongodb python38 python38-pip
pip3 install shelldb-client

# Start the ShellDB service
sudo systemctl enable shelldb
sudo systemctl start shelldb

# Verify installation
shelldb --version`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      ),
    },
    {
      id: 'config',
      icon: <Settings className="h-5 w-5" />,
      title: 'Configuration Guide',
      color: 'text-shelldb-green',
      content: (
        <div className="space-y-4">
          <p>After installation, you'll need to configure ShellDB for your environment.</p>
          
          <Accordion type="single" collapsible>
            <AccordionItem value="network" className="border-shelldb-blue/20">
              <AccordionTrigger className="hover:text-shelldb-blue">Network Configuration</AccordionTrigger>
              <AccordionContent>
                <Card className="bg-shelldb-darker border-shelldb-blue/20 mb-4">
                  <CardContent className="pt-6">
                    <pre className="text-sm overflow-x-auto p-4 bg-black/50 rounded-md">
                      <code className="text-shelldb-green">{codeSnippets.config}</code>
                    </pre>
                  </CardContent>
                </Card>
                <p className="mt-2">Make sure to update the certificate paths to match your actual certificate locations.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="permissions" className="border-shelldb-blue/20">
              <AccordionTrigger className="hover:text-shelldb-blue">User Roles and Access Permissions</AccordionTrigger>
              <AccordionContent>
                <p>ShellDB supports the following user roles:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-2">
                  <li><span className="text-shelldb-blue font-medium">Admin</span> - Full system access and configuration rights</li>
                  <li><span className="text-shelldb-green font-medium">Security Analyst</span> - Can view all data and alerts</li>
                  <li><span className="text-yellow-500 font-medium">Operator</span> - Can view basic data and respond to incidents</li>
                  <li><span className="text-gray-400 font-medium">Viewer</span> - Read-only access to dashboard</li>
                </ul>
                <p className="mt-4">Configure user roles in the <code className="bg-black/30 px-1 rounded">/etc/shelldb/users.conf</code> file.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
    },
    {
      id: 'kernel',
      icon: <Shield className="h-5 w-5" />,
      title: 'Kernel Integration Steps',
      color: 'text-shelldb-purple',
      content: (
        <div className="space-y-4">
          <p>ShellDB requires kernel-level integration for complete database protection:</p>
          
          <Card className="bg-shelldb-darker border-shelldb-blue/20">
            <CardContent className="pt-6">
              <pre className="text-sm overflow-x-auto p-4 bg-black/50 rounded-md">
                <code className="text-shelldb-green">{codeSnippets.kernel}</code>
              </pre>
            </CardContent>
          </Card>
          
          <div className="bg-yellow-900/20 border border-yellow-600/30 p-4 rounded-md mt-4">
            <div className="flex space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-yellow-500">Important Security Notice</h4>
                <p className="text-sm">The kernel integration requires root privileges. Make sure to secure the <code className="bg-black/30 px-1 rounded">sudoers</code> configuration and only grant access to trusted users.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'dashboard',
      icon: <Book className="h-5 w-5" />,
      title: 'Using the Web Dashboard',
      color: 'text-shelldb-blue',
      content: (
        <div className="space-y-4">
          <p>The ShellDB web dashboard provides a visual interface for monitoring and configuration:</p>
          
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Dashboard Features</h3>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="hover:bg-shelldb-blue/10">
                  {isOpen ? "Hide" : "Show"} Details
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mt-4 space-y-3">
              <div className="border border-shelldb-blue/20 rounded-md p-4 hover:bg-shelldb-blue/5 transition-colors">
                <h4 className="font-medium text-shelldb-blue">Real-time Threat Detection</h4>
                <p className="text-sm text-gray-300 mt-1">View active threats and detection events as they happen in your database.</p>
              </div>
              <div className="border border-shelldb-blue/20 rounded-md p-4 hover:bg-shelldb-blue/5 transition-colors">
                <h4 className="font-medium text-shelldb-green">Analytics & Reporting</h4>
                <p className="text-sm text-gray-300 mt-1">Generate security reports and analyze historical data for patterns.</p>
              </div>
              <div className="border border-shelldb-blue/20 rounded-md p-4 hover:bg-shelldb-blue/5 transition-colors">
                <h4 className="font-medium text-shelldb-blue">Configuration Management</h4>
                <p className="text-sm text-gray-300 mt-1">Adjust settings, manage users, and configure security policies.</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <p className="text-sm text-gray-400 mt-4">Default login URL: <code className="bg-black/30 px-1 rounded">https://your-server:8675/admin</code></p>
        </div>
      )
    },
    {
      id: 'smtp',
      icon: <Mail className="h-5 w-5" />,
      title: 'Setting Up Email Alerts',
      color: 'text-shelldb-green',
      content: (
        <div className="space-y-4">
          <p>Configure Zoho Mail SMTP to receive security alerts:</p>
          
          <Card className="bg-shelldb-darker border-shelldb-blue/20">
            <CardContent className="pt-6">
              <pre className="text-sm overflow-x-auto p-4 bg-black/50 rounded-md">
                <code className="text-shelldb-green">{codeSnippets.smtp}</code>
              </pre>
            </CardContent>
          </Card>
          
          <p className="text-sm">After configuring, test the email alerts with:</p>
          <Card className="bg-shelldb-darker border-shelldb-blue/20">
            <CardContent className="pt-6">
              <pre className="text-sm overflow-x-auto p-4 bg-black/50 rounded-md">
                <code className="text-shelldb-green">shelldb-alert --test</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 'cve',
      icon: <Database className="h-5 w-5" />,
      title: 'CVE Scanning & Vulnerability Sync',
      color: 'text-shelldb-blue',
      content: (
        <div className="space-y-4">
          <p>Keep your vulnerability database up to date with the CVE sync tool:</p>
          
          <Card className="bg-shelldb-darker border-shelldb-blue/20">
            <CardContent className="pt-6">
              <pre className="text-sm overflow-x-auto p-4 bg-black/50 rounded-md">
                <code className="text-shelldb-green">{codeSnippets.cve}</code>
              </pre>
            </CardContent>
          </Card>
          
          <p className="text-sm mt-2">ShellDB automatically matches CVEs with your system's CPE configuration to identify relevant vulnerabilities.</p>
        </div>
      )
    },
    {
      id: 'faq',
      icon: <HelpCircle className="h-5 w-5" />,
      title: 'Frequently Asked Questions',
      color: 'text-shelldb-green',
      content: (
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-shelldb-blue/20">
              <AccordionTrigger className="hover:text-shelldb-blue">
                How often should I update ShellDB?
              </AccordionTrigger>
              <AccordionContent>
                <p>We recommend updating ShellDB monthly to receive the latest security patches and feature improvements. Critical security updates should be applied immediately.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-shelldb-blue/20">
              <AccordionTrigger className="hover:text-shelldb-blue">
                Is ShellDB compatible with cloud databases?
              </AccordionTrigger>
              <AccordionContent>
                <p>Yes, ShellDB is fully compatible with cloud-hosted databases including AWS RDS, Azure SQL, and Google Cloud SQL. Special configuration is required for each provider - see the cloud integration section.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-shelldb-blue/20">
              <AccordionTrigger className="hover:text-shelldb-blue">
                What is the performance impact of ShellDB?
              </AccordionTrigger>
              <AccordionContent>
                <p>ShellDB is designed to have minimal performance impact, typically less than 3% overhead on database operations. In high-throughput environments, consider enabling the performance optimization mode.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-shelldb-blue/20">
              <AccordionTrigger className="hover:text-shelldb-blue">
                How do I backup ShellDB configuration?
              </AccordionTrigger>
              <AccordionContent>
                <p>Use the built-in backup utility to export your configuration:</p>
                <pre className="text-sm overflow-x-auto p-2 bg-black/50 rounded-md mt-2">
                  <code className="text-shelldb-green">shelldb-backup --export /path/to/backup</code>
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-shelldb-blue to-shelldb-green">
          ShellDB Documentation
        </h1>
        <p className="text-gray-400 text-center mb-10">
          Comprehensive guides and reference materials for ShellDB
        </p>
        
        <div className="grid md:grid-cols-12 gap-8">
          {/* Documentation Navigation Sidebar */}
          <div className="md:col-span-3">
            <div className="sticky top-24 space-y-1">
              {docSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setOpenSection(section.id)}
                  className={`flex items-center w-full px-3 py-2 text-left rounded-md transition-colors hover:bg-shelldb-blue/10 ${
                    openSection === section.id ? 'bg-shelldb-blue/10 border-l-2 border-shelldb-blue' : ''
                  }`}
                >
                  <span className={`mr-2 ${section.color}`}>{section.icon}</span>
                  <span className={openSection === section.id ? 'text-shelldb-blue' : 'text-gray-300'}>
                    {section.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Documentation Content */}
          <div className="md:col-span-9">
            <div className="bg-shelldb-darker rounded-lg border border-shelldb-blue/20 p-6">
              {docSections.map((section) => (
                <div 
                  key={section.id} 
                  className={`transition-all duration-300 ease-in-out ${
                    openSection === section.id ? 'block animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <span className={`mr-2 ${section.color}`}>{section.icon}</span>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  {section.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
