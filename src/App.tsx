import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Courses />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={
            <>
              <Header />
              <BlogDetail />
              <Footer />
            </>
          } />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;