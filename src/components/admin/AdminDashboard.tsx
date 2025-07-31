import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2,
  BarChart3,
  Users,
  DollarSign,
  TrendingUp
} from 'lucide-react';
import axios from 'axios';

interface Stats {
  blogs: number;
  projects: number;
  courses: number;
  totalStudents: number;
}

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  image: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  students: number;
  rating: number;
  image: string;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats>({ blogs: 0, projects: 0, courses: 0, totalStudents: 0 });
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const headers = { Authorization: `Bearer ${token}` };

      const [statsRes, blogsRes, projectsRes, coursesRes] = await Promise.all([
        axios.get('http://localhost:5000/api/admin/stats', { headers }),
        axios.get('http://localhost:5000/api/blogs'),
        axios.get('http://localhost:5000/api/projects'),
        axios.get('http://localhost:5000/api/courses')
      ]);

      setStats(statsRes.data);
      setBlogs(blogsRes.data);
      setProjects(projectsRes.data);
      setCourses(coursesRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const deleteItem = async (type: string, id: number) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`http://localhost:5000/api/admin/${type}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const Dashboard = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Blogs</p>
              <p className="text-2xl font-bold text-white">{stats.blogs}</p>
            </div>
            <BookOpen className="h-8 w-8 text-blue-400" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Projects</p>
              <p className="text-2xl font-bold text-white">{stats.projects}</p>
            </div>
            <Briefcase className="h-8 w-8 text-purple-400" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Courses</p>
              <p className="text-2xl font-bold text-white">{stats.courses}</p>
            </div>
            <GraduationCap className="h-8 w-8 text-green-400" />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-white">{stats.totalStudents}</p>
            </div>
            <Users className="h-8 w-8 text-pink-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4">Recent Blogs</h3>
          <div className="space-y-3">
            {blogs.slice(0, 3).map((blog) => (
              <div key={blog.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span className="text-gray-300 truncate">{blog.title}</span>
                <button
                  onClick={() => deleteItem('blogs', blog.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4">Recent Projects</h3>
          <div className="space-y-3">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span className="text-gray-300 truncate">{project.title}</span>
                <button
                  onClick={() => deleteItem('projects', project.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const BlogsManager = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Manage Blogs</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span>Add Blog</span>
        </button>
      </div>
      
      <div className="grid gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
                <p className="text-gray-300 mb-4">{blog.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2 ml-4">
                <button className="p-2 text-blue-400 hover:text-blue-300">
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => deleteItem('blogs', blog.id)}
                  className="p-2 text-red-400 hover:text-red-300"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectsManager = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Manage Projects</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          <Plus className="h-4 w-4" />
          <span>Add Project</span>
        </button>
      </div>
      
      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2 ml-4">
                <button className="p-2 text-blue-400 hover:text-blue-300">
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => deleteItem('projects', project.id)}
                  className="p-2 text-red-400 hover:text-red-300"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CoursesManager = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Manage Courses</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          <Plus className="h-4 w-4" />
          <span>Add Course</span>
        </button>
      </div>
      
      <div className="grid gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-300 mb-4">{course.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white ml-2">{course.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Level:</span>
                    <span className="text-white ml-2">{course.level}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Price:</span>
                    <span className="text-white ml-2">{course.price}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Students:</span>
                    <span className="text-white ml-2">{course.students}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 ml-4">
                <button className="p-2 text-blue-400 hover:text-blue-300">
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => deleteItem('courses', course.id)}
                  className="p-2 text-red-400 hover:text-red-300"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-black/20 backdrop-blur-sm border-r border-white/10 min-h-screen">
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-8">Admin Panel</h2>
            <nav className="space-y-2">
              <Link
                to="/admin/dashboard"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === '/admin/dashboard' || location.pathname === '/admin'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                to="/admin/blogs"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === '/admin/blogs'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <BookOpen className="h-5 w-5" />
                <span>Blogs</span>
              </Link>
              <Link
                to="/admin/projects"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === '/admin/projects'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Briefcase className="h-5 w-5" />
                <span>Projects</span>
              </Link>
              <Link
                to="/admin/courses"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === '/admin/courses'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Courses</span>
              </Link>
            </nav>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-4 py-3 w-full text-gray-300 hover:bg-red-600/20 hover:text-red-400 rounded-lg transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blogs" element={<BlogsManager />} />
            <Route path="/projects" element={<ProjectsManager />} />
            <Route path="/courses" element={<CoursesManager />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;