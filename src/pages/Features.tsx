import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Radar, Shield, Brain, Bug, Mail, BarChart3, Terminal, Network, TrendingUp, Clock, Database, Server, Zap } from 'lucide-react';

const Features = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [liveLogIndex, setLiveLogIndex] = useState(0);
  const [notificationCount, setNotificationCount] = useState(3);

  // Live log simulation
  const liveLogs = [
    { time: "14:32:15", level: "ALERT", message: "Suspicious SQL injection attempt detected from IP: 192.168.1.100" },
    { time: "14:32:18", level: "INFO", message: "Query pattern analysis: Normal behavior" },
    { time: "14:32:22", level: "WARN", message: "Unusual query frequency detected - monitoring" },
    { time: "14:32:25", level: "ALERT", message: "CVE-2023-1234 vulnerability match found in MySQL 8.0.25" },
    { time: "14:32:28", level: "INFO", message: "Model retrained with 150 new threat patterns" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveLogIndex((prev) => (prev + 1) % liveLogs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [liveLogs.length]);

  // Chart data
  const threatData = [
    { time: '00:00', normal: 45, anomaly: 2 },
    { time: '04:00', normal: 52, anomaly: 1 },
    { time: '08:00', normal: 78, anomaly: 5 },
    { time: '12:00', normal: 95, anomaly: 8 },
    { time: '16:00', normal: 87, anomaly: 12 },
    { time: '20:00', normal: 65, anomaly: 3 }
  ];

  const mlMetrics = [
    { metric: 'Accuracy', value: 89.0 },
    { metric: 'Precision', value: 89.0 },
    { metric: 'Recall', value: 90.0 },
    { metric: 'F1-Score', value: 89.0 }
  ];

  const vulnerabilityData = [
    { severity: 'High', count: 23, color: '#ef4444' },
    { severity: 'Medium', count: 45, color: '#f59e0b' },
    { severity: 'Low', count: 78, color: '#10b981' }
  ];

  // Updated CVE data with real-world examples
  const notableCVEs = [
    {
      cve: "CVE-2017-5638",
      title: "Apache Struts RCE",
      category: "Web Application Backend",
      description: "Vulnerability in Apache Struts 2 allowing RCE via malformed Content-Type headers.",
      impact: "Remote Code Execution",
      realWorld: "Equifax breach (~147 million users)",
      severity: "High",
      score: 10.0
    },
    {
      cve: "CVE-2021-44228",
      title: "Log4Shell (Apache Log4j)",
      category: "Java Web Applications", 
      description: "Allows RCE via crafted JNDI strings in logs.",
      impact: "Remote Code Execution",
      realWorld: "CVSS 10.0 (Critical)",
      severity: "Critical",
      score: 10.0
    },
    {
      cve: "CVE-2016-5195",
      title: "Dirty COW (Linux Kernel)",
      category: "Operating System",
      description: "Local Privilege Escalation via memory mapping bug.",
      impact: "Privilege Escalation",
      realWorld: "Actively used in real-world Linux attacks",
      severity: "High",
      score: 7.8
    }
  ];

  const securityLayers = [
    {
      id: 'web',
      title: 'Web Application Layer',
      description: 'Input validation, query sanitization, and request filtering',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'os',
      title: 'OS/Kernel Layer',
      description: 'System-level monitoring, process isolation, and kernel hooks',
      icon: <Terminal className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'db',
      title: 'Database Layer',
      description: 'Query analysis, transaction monitoring, and access control',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-shelldb-blue to-shelldb-green">
            ShellDB Security Features
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Multi-layered, machine-learning-powered, containerized database security tool that protects against SQL injections and advanced cyber threats.
          </p>
        </div>

        {/* 1. Real-Time Threat Monitoring */}
        <section className="mb-20">
          <Card className="bg-shelldb-darker border-shelldb-blue/20 hover:border-shelldb-blue/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-shelldb-blue flex items-center">
                <Radar className="mr-3 w-7 h-7" />
                Real-Time Threat Monitoring
                <Badge className="ml-3 bg-red-500 animate-pulse">LIVE</Badge>
              </CardTitle>
              <CardDescription>
                ShellDB constantly monitors query logs and server behavior to detect threats in real-time
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Live Terminal */}
                <div className="bg-black rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="ml-4 text-gray-400">ShellDB Security Monitor</span>
                  </div>
                  <div className="space-y-1">
                    {liveLogs.slice(0, 4).map((log, index) => (
                      <div 
                        key={index} 
                        className={`${index === liveLogIndex ? 'text-shelldb-green animate-pulse' : 'text-gray-300'} transition-all duration-500`}
                      >
                        <span className="text-shelldb-blue">{log.time}</span>
                        <span className={`ml-2 ${log.level === 'ALERT' ? 'text-red-400' : log.level === 'WARN' ? 'text-yellow-400' : 'text-green-400'}`}>
                          [{log.level}]
                        </span>
                        <span className="ml-2">{log.message}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Traffic Pattern Chart */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-shelldb-green">Traffic Pattern Anomalies</h4>
                  <ChartContainer config={{ normal: { label: "Normal Traffic", color: "#00d4ff" }, anomaly: { label: "Anomalies", color: "#ff4444" } }} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={threatData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="time" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="normal" stroke="#00d4ff" strokeWidth={2} />
                        <Line type="monotone" dataKey="anomaly" stroke="#ff4444" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 2. Multi-Layered Security Architecture */}
        <section className="mb-20">
          <Card className="bg-shelldb-darker border-shelldb-blue/20">
            <CardHeader>
              <CardTitle className="text-2xl text-shelldb-green flex items-center">
                <Shield className="mr-3 w-7 h-7" />
                Multi-Layered Security Architecture
              </CardTitle>
              <CardDescription>
                Three-tier defense system providing comprehensive protection at every level
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {securityLayers.map((layer, index) => (
                  <div
                    key={layer.id}
                    className={`relative p-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      activeLayer === layer.id ? 'ring-2 ring-shelldb-blue' : ''
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${layer.color.split(' ')[1]}, ${layer.color.split(' ')[3]})`
                    }}
                    onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                  >
                    <div className="text-white">
                      {layer.icon}
                      <h4 className="text-lg font-semibold mt-2">{layer.title}</h4>
                      <p className="text-sm mt-2 opacity-90">{layer.description}</p>
                    </div>
                    {activeLayer === layer.id && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-4 h-4 bg-shelldb-blue transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {activeLayer && (
                <div className="mt-6 p-4 bg-shelldb-blue/10 rounded-lg border border-shelldb-blue/20 animate-fade-in">
                  <h5 className="font-semibold text-shelldb-blue mb-2">Layer Details:</h5>
                  <p className="text-gray-300">
                    {activeLayer === 'web' && "Implements input validation, SQL injection prevention, and request filtering at the application level."}
                    {activeLayer === 'os' && "Provides system-level monitoring, process isolation, and kernel-level security hooks for deep protection."}
                    {activeLayer === 'db' && "Monitors database queries, transactions, and access patterns to detect malicious activities."}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* 3. Anomaly Detection Engine */}
        <section className="mb-20">
          <Card className="bg-shelldb-darker border-shelldb-blue/20">
            <CardHeader>
              <CardTitle className="text-2xl text-shelldb-purple flex items-center">
                <Brain className="mr-3 w-7 h-7" />
                Anomaly Detection Engine
              </CardTitle>
              <CardDescription>
                Advanced ML models including Isolation Forest, Autoencoder, and LSTM for threat detection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-shelldb-green">Threat Query Examples</h4>
                  <div className="space-y-3">
                    <div className="bg-red-900/20 border border-red-500/30 rounded p-3">
                      <code className="text-red-400 text-sm">SELECT * FROM users WHERE id = 1 OR 1=1--</code>
                      <p className="text-red-300 text-xs mt-1">⚠️ SQL Injection detected</p>
                    </div>
                    <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-3">
                      <code className="text-yellow-400 text-sm">UNION SELECT password FROM admin_users</code>
                      <p className="text-yellow-300 text-xs mt-1">⚠️ Suspicious UNION operation</p>
                    </div>
                    <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
                      <code className="text-green-400 text-sm">SELECT name FROM products WHERE category = 'electronics'</code>
                      <p className="text-green-300 text-xs mt-1">✅ Normal query pattern</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-shelldb-green">Detection Accuracy</h4>
                  <ChartContainer config={{ value: { label: "Accuracy %", color: "#00ff8c" } }} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={mlMetrics}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="metric" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" domain={[80, 95]} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="value" fill="#00ff8c" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 4. Vulnerability Scanner */}
        <section className="mb-20">
          <Card className="bg-shelldb-darker border-shelldb-blue/20">
            <CardHeader>
              <CardTitle className="text-2xl text-shelldb-blue flex items-center">
                <Bug className="mr-3 w-7 h-7" />
                Vulnerability Scanner (CVE & CPE Matching)
              </CardTitle>
              <CardDescription>
                Real-time CVE database integration with CPE mapping for comprehensive vulnerability assessment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-shelldb-green">🔎 Notable CVEs Detected</h4>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {notableCVEs.map((cve, index) => (
                      <div key={index} className="border border-shelldb-blue/20 rounded-lg p-4 bg-shelldb-darker/30">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-shelldb-blue">{cve.cve} – {cve.title}</h5>
                          <Badge variant={cve.severity === 'Critical' ? 'destructive' : cve.severity === 'High' ? 'destructive' : 'default'}>
                            {cve.severity}
                          </Badge>
                        </div>
                        <p className="text-xs text-shelldb-green mb-1">Category: {cve.category}</p>
                        <p className="text-sm text-gray-300 mb-2">{cve.description}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-red-400">Impact: {cve.impact}</span>
                          <span className="text-yellow-400">CVSS: {cve.score}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Used in: {cve.realWorld}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-shelldb-green">Severity Distribution</h4>
                  <ChartContainer config={{}} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={vulnerabilityData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          dataKey="count"
                          label={({ name, value }) => `${name}: ${value}`}
                        >
                          {vulnerabilityData.map((entry, index) => (
                            <Cell key={index} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 5. Email Alert System */}
        <section className="mb-20">
          <Card className="bg-shelldb-darker border-shelldb-blue/20">
            <CardHeader>
              <CardTitle className="text-2xl text-shelldb-green flex items-center">
                <Mail className="mr-3 w-7 h-7" />
                Email Alert System
                <div className="ml-auto relative">
                  <Mail className="w-6 h-6 text-shelldb-blue" />
                  {notificationCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-xs flex items-center justify-center">
                      {notificationCount}
                    </Badge>
                  )}
                </div>
              </CardTitle>
              <CardDescription>
                Instant email notifications for security threats and system alerts via @shelldb.tech
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg p-6 text-black">
                <div className="border-b border-gray-300 pb-4 mb-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">🔴 CRITICAL SECURITY ALERT</h4>
                    <span className="text-sm text-gray-600">alerts@shelldb.tech</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">To: admin@yourcompany.com</p>
                </div>
                <div className="space-y-2">
                  <p><strong>Subject:</strong> [HIGH RISK] SQL Injection Attempt Detected</p>
                  <p><strong>Timestamp:</strong> 2024-06-04 14:32:15 UTC</p>
                  <p><strong>Source IP:</strong> 192.168.1.100</p>
                  <p><strong>Affected Database:</strong> production_db</p>
                  <p><strong>Query Snapshot:</strong></p>
                  <code className="bg-red-100 p-2 rounded block text-sm">
                    SELECT * FROM users WHERE id = '1' OR '1'='1' --
                  </code>
                  <p><strong>Risk Level:</strong> <span className="text-red-600 font-semibold">CRITICAL</span></p>
                  <p><strong>Recommended Action:</strong> Block IP immediately and review access logs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 8. ML Model Training and Evolution */}
        <section className="mb-20">
          <Card className="bg-shelldb-darker border-shelldb-blue/20">
            <CardHeader>
              <CardTitle className="text-2xl text-shelldb-purple flex items-center">
                <Network className="mr-3 w-7 h-7" />
                ML Model Training and Evolution
              </CardTitle>
              <CardDescription>
                Continuous learning pipeline from raw logs to deployed models
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between py-8">
                {[
                  { label: "Raw Logs", icon: "📊" },
                  { label: "Feature Extraction", icon: "🔍" },
                  { label: "Model Training", icon: "🧠" },
                  { label: "Validation", icon: "✅" },
                  { label: "Deployment", icon: "🚀" }
                ].map((stage, index) => (
                  <React.Fragment key={index}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-shelldb-blue/20 rounded-full flex items-center justify-center text-2xl mb-2">
                        {stage.icon}
                      </div>
                      <p className="text-sm text-gray-300">{stage.label}</p>
                    </div>
                    {index < 4 && (
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-shelldb-blue to-shelldb-green mx-4"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 9. Performance & Testing Metrics - Updated */}
        <section className="mb-20">
          <Card className="bg-shelldb-darker border-shelldb-blue/20">
            <CardHeader>
              <CardTitle className="text-2xl text-shelldb-green flex items-center">
                <TrendingUp className="mr-3 w-7 h-7" />
                Performance & Testing Metrics
              </CardTitle>
              <CardDescription>
                Real-world performance statistics and vulnerability scanning metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-shelldb-blue">Accuracy Metrics</h4>
                  <div className="space-y-4">
                    {mlMetrics.map((metric) => (
                      <div key={metric.metric} className="flex items-center justify-between">
                        <span className="text-gray-300">{metric.metric}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-shelldb-blue to-shelldb-green transition-all duration-1000"
                              style={{ width: `${metric.value}%` }}
                            ></div>
                          </div>
                          <span className="text-shelldb-green font-semibold">{metric.value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-shelldb-blue">System Performance</h4>
                  <div className="grid grid-cols-1 gap-4">
                    <Card className="bg-shelldb-blue/10 border-shelldb-blue/30">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Clock className="w-6 h-6 text-shelldb-blue mr-2" />
                          <h3 className="text-2xl font-bold text-shelldb-blue">&lt; 5 min</h3>
                        </div>
                        <p className="text-gray-300 text-sm">Average Vulnerability Scan Time</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-shelldb-green/10 border-shelldb-green/30">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Bug className="w-6 h-6 text-shelldb-green mr-2" />
                          <h3 className="text-2xl font-bold text-shelldb-green">200,000+</h3>
                        </div>
                        <p className="text-gray-300 text-sm">CVE Count Tracked</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-shelldb-purple/10 border-shelldb-purple/30">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Server className="w-6 h-6 text-shelldb-purple mr-2" />
                          <h3 className="text-2xl font-bold text-shelldb-purple">6</h3>
                        </div>
                        <p className="text-gray-300 text-sm">Systems Scanned So Far</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-yellow-500/10 border-yellow-500/30">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Zap className="w-6 h-6 text-yellow-500 mr-2" />
                          <h3 className="text-2xl font-bold text-yellow-500">15k</h3>
                        </div>
                        <p className="text-gray-300 text-sm">Queries Per Hour</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Features;
