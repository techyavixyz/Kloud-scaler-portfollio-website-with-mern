import React, { useState } from 'react';
import { Menu, X, Code, User, BookOpen, Briefcase, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">Abhinash Dubey</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Briefcase className="h-4 w-4" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('blogs')}
              className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>Blogs</span>
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>Courses</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>About</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Briefcase className="h-4 w-4" />
                <span>Projects</span>
              </button>
              <button
                onClick={() => scrollToSection('blogs')}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                <span>Blogs</span>
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                <span>Courses</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;