import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag, User } from 'lucide-react';
import axios from 'axios';

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  image: string;
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchBlog(parseInt(id));
    }
  }, [id]);

  const fetchBlog = async (blogId: number) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/blogs/${blogId}`);
      setBlog(response.data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Blog post not found</h1>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
              >
                <Tag className="h-3 w-3" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed space-y-6">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center">
                <span className="text-xl font-bold text-white">AD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Abhinash Dubey</h3>
                <p className="text-gray-300 mb-3">
                  Senior Cloud DevOps Engineer with 5+ years of experience in AWS, GCP, Kubernetes, and modern DevOps practices.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/abhinashkumardubey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/techyavixyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://techlingo.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default BlogDetail;