
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Mail, Linkedin, Shield, Target, Users, Database } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Chakradhar Vinod Malage",
      role: "B.Tech Student",
      email: "chakumalage2003@gmail.com",
      linkedin: "#",
      initials: "CV"
    },
    {
      name: "Pranav Mandar Mehendale", 
      role: "B.Tech Student",
      email: "pranav.m.mehendale@gmail.com",
      linkedin: "#",
      initials: "PM"
    },
    {
      name: "Shirish Hanmant Hirapure",
      role: "B.Tech Student", 
      email: "shirishhirapure1555@gmail.com",
      linkedin: "#",
      initials: "SH"
    },
    {
      name: "Vaishnavi Gugal",
      role: "B.Tech Student",
      email: "gugalvaishnavi@gmail.com", 
      linkedin: "#",
      initials: "VG"
    }
  ];

  const goals = [
    {
      icon: <Database className="w-6 h-6 text-shelldb-blue" />,
      title: "Fast & Minimalistic Tool",
      description: "Build a lightweight solution for efficient database access and operations"
    },
    {
      icon: <Shield className="w-6 h-6 text-shelldb-green" />,
      title: "Shell Integration", 
      description: "Encourage automation with native shell support for seamless workflows"
    },
    {
      icon: <Target className="w-6 h-6 text-shelldb-blue" />,
      title: "Deep Security",
      description: "Secure database connections at kernel and scripting levels"
    },
    {
      icon: <Users className="w-6 h-6 text-shelldb-green" />,
      title: "Multi-Purpose Use",
      description: "Enable educational, research, and enterprise-grade applications"
    }
  ];

  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-shelldb-blue to-shelldb-green">
            About ShellDB
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Empowering developers with secure, shell-integrated database solutions
          </p>
        </div>

        {/* Project Overview */}
        <section className="mb-20">
          <Card className="bg-shelldb-darker border-shelldb-blue/20 hover:border-shelldb-blue/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-shelldb-blue flex items-center">
                <Database className="mr-3 w-7 h-7" />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg leading-relaxed">
                ShellDB is a secure, script-based database interface designed for advanced users, 
                system administrators, and developers. It leverages shell scripting and low-level 
                kernel features to allow powerful database access, automation, and monitoring in a 
                lightweight environment.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-shelldb-green mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-shelldb-blue to-shelldb-green mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empowering developers with a highly secure, shell-integrated solution for database 
              operations that promotes simplicity, transparency, and open-source collaboration.
            </p>
          </div>
        </section>

        {/* Goals Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-shelldb-blue mb-4">Our Goals</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-shelldb-green to-shelldb-blue mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <Card 
                key={index} 
                className="bg-shelldb-darker border-shelldb-blue/20 hover:border-shelldb-green/40 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-shelldb-blue/10 p-2 rounded-full">
                      {goal.icon}
                    </div>
                    <CardTitle className="text-lg">{goal.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-shelldb-green mb-4">Meet the Creators</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-shelldb-blue to-shelldb-green mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="bg-shelldb-darker border-shelldb-blue/20 hover:border-shelldb-blue/40 transition-all duration-300 text-center transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-20 h-20 border-2 border-shelldb-blue/30">
                      <AvatarFallback className="bg-shelldb-blue/20 text-shelldb-blue text-lg font-semibold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-lg text-white">{member.name}</CardTitle>
                  <CardDescription className="text-shelldb-green">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center space-x-2 text-gray-400 hover:text-shelldb-blue transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm truncate">{member.email}</span>
                    </a>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 text-gray-400 hover:text-shelldb-green transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-shelldb-blue mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-shelldb-green to-shelldb-blue mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions about ShellDB? Get in touch with our team and we'll help you get started.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-shelldb-darker border-shelldb-blue/20">
              <CardContent className="p-8">
                <form action="mailto:support@shelldb.tech" method="post" encType="text/plain" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                      className="bg-shelldb-dark border-shelldb-blue/30 focus:border-shelldb-blue text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-shelldb-dark border-shelldb-blue/30 focus:border-shelldb-blue text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="bg-shelldb-dark border-shelldb-blue/30 focus:border-shelldb-blue text-white resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-shelldb-blue hover:bg-shelldb-blue/90 text-white font-medium py-3 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                    <Mail className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
