import React from 'react';
import { Code, Heart, Linkedin, Github, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Abhinash Dubey</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Senior Cloud DevOps Engineer specializing in AWS, GCP, Kubernetes, and modern infrastructure solutions. 
              Building scalable, secure, and cost-effective cloud architectures.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/abhinashkumardubey/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/techyavixyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:abhinash.dubey@techlingo.in"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://techlingo.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blogs
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Courses
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Cloud Architecture</li>
              <li>DevOps Consulting</li>
              <li>Kubernetes Migration</li>
              <li>Infrastructure Automation</li>
              <li>Cost Optimization</li>
              <li>Technical Training</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by Abhinash Dubey</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; {currentYear} Kloud-Scaler. All rights reserved.</p>
              <p className="text-sm mt-1">Represented by TechYavi</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;