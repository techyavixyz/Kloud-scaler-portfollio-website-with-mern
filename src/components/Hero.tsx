import React from 'react';
import { Github, Linkedin, Mail, Globe, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">AD</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Abhinash Dubey
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Senior Cloud DevOps Engineer
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            5+ years of expertise in AWS, GCP, Kubernetes, Docker, Terraform, and modern DevOps practices. 
            Passionate about building scalable cloud infrastructure and sharing knowledge through 
            <span className="text-blue-400 font-semibold"> Kloud-Scaler</span> represented by 
            <span className="text-purple-400 font-semibold"> TechYavi</span>.
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Grafana', 'Prometheus'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/abhinashkumardubey/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:text-blue-400 hover:bg-white/20 transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/techyavixyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:text-purple-400 hover:bg-white/20 transition-all duration-300 group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:abhinash.dubey@techlingo.in"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:text-green-400 hover:bg-white/20 transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://techlingo.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:text-pink-400 hover:bg-white/20 transition-all duration-300 group"
            >
              <Globe className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore My Work
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;