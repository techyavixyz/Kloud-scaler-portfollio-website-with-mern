import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Globe, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your next cloud project or need DevOps consultation? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, share knowledge, or collaborate on innovative projects. 
                Whether you need cloud architecture guidance, DevOps implementation, or technical consultation, I'm here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a
                    href="mailto:abhinash.dubey@techlingo.in"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    abhinash.dubey@techlingo.in
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Website</h4>
                  <a
                    href="https://techlingo.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    techlingo.in
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Organization</h4>
                  <p className="text-gray-300">Kloud-Scaler (TechYavi)</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/abhinashkumardubey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-gray-300 hover:text-blue-400 hover:bg-white/20 transition-all duration-300 group"
                >
                  <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://github.com/techyavixyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-gray-300 hover:text-purple-400 hover:bg-white/20 transition-all duration-300 group"
                >
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://techlingo.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-gray-300 hover:text-green-400 hover:bg-white/20 transition-all duration-300 group"
                >
                  <Globe className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-white/10">
            <MessageCircle className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Infrastructure?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can optimize your cloud architecture, implement robust DevOps practices, 
              and scale your applications efficiently.
            </p>
            <a
              href="mailto:abhinash.dubey@techlingo.in"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              <span>Start a Conversation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;