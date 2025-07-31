const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = 'your-secret-key';

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (replace with MongoDB in production)
let blogs = [
  {
    id: 1,
    title: "Getting Started with Kubernetes on AWS EKS",
    excerpt: "Learn how to deploy and manage Kubernetes clusters on Amazon EKS with best practices for production workloads.",
    content: "Kubernetes has become the de facto standard for container orchestration...",
    author: "Abhinash Dubey",
    date: "2024-01-15",
    tags: ["Kubernetes", "AWS", "EKS", "DevOps"],
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg"
  },
  {
    id: 2,
    title: "Infrastructure as Code with Terraform",
    excerpt: "Master Terraform for managing cloud infrastructure across multiple providers with advanced techniques.",
    content: "Infrastructure as Code (IaC) is a key practice in modern DevOps...",
    author: "Abhinash Dubey",
    date: "2024-01-10",
    tags: ["Terraform", "IaC", "AWS", "GCP"],
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg"
  }
];

let projects = [
  {
    id: 1,
    title: "Multi-Cloud Kubernetes Platform",
    description: "Enterprise-grade Kubernetes platform deployed across AWS and GCP with automated CI/CD pipelines.",
    technologies: ["Kubernetes", "AWS EKS", "GCP GKE", "Terraform", "GitLab CI"],
    github: "https://github.com/techyavixyz/k8s-platform",
    demo: "https://demo.kloud-scaler.com",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg"
  },
  {
    id: 2,
    title: "Cost Optimization Dashboard",
    description: "Real-time cloud cost monitoring and optimization platform with automated recommendations.",
    technologies: ["Node.js", "React", "AWS Cost Explorer", "Grafana", "Prometheus"],
    github: "https://github.com/techyavixyz/cost-optimizer",
    demo: "https://cost.kloud-scaler.com",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg"
  }
];

let courses = [
  {
    id: 1,
    title: "Complete DevOps Mastery",
    description: "Comprehensive course covering AWS, Kubernetes, Docker, Terraform, and CI/CD pipelines.",
    duration: "12 weeks",
    level: "Intermediate to Advanced",
    price: "$299",
    students: 1250,
    rating: 4.8,
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg"
  },
  {
    id: 2,
    title: "Kubernetes Production Ready",
    description: "Deep dive into Kubernetes for production environments with security and monitoring.",
    duration: "8 weeks",
    level: "Advanced",
    price: "$199",
    students: 850,
    rating: 4.9,
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg"
  }
];

// Admin user (in production, store in database with hashed password)
const adminUser = {
  username: 'admin',
  password: bcrypt.hashSync('admin123', 10)
};

// Auth middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Routes

// Auth routes
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  if (username === adminUser.username && bcrypt.compareSync(password, adminUser.password)) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, user: { username } });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Public routes
app.get('/api/blogs', (req, res) => {
  res.json(blogs);
});

app.get('/api/blogs/:id', (req, res) => {
  const blog = blogs.find(b => b.id === parseInt(req.params.id));
  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }
  res.json(blog);
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

// Admin routes (protected)
app.get('/api/admin/stats', authenticateToken, (req, res) => {
  res.json({
    blogs: blogs.length,
    projects: projects.length,
    courses: courses.length,
    totalStudents: courses.reduce((sum, course) => sum + course.students, 0)
  });
});

// Blog management
app.post('/api/admin/blogs', authenticateToken, (req, res) => {
  const newBlog = {
    id: Math.max(...blogs.map(b => b.id)) + 1,
    ...req.body,
    author: 'Abhinash Dubey',
    date: new Date().toISOString().split('T')[0]
  };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

app.put('/api/admin/blogs/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  const index = blogs.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Blog not found' });
  }
  blogs[index] = { ...blogs[index], ...req.body };
  res.json(blogs[index]);
});

app.delete('/api/admin/blogs/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  blogs = blogs.filter(b => b.id !== id);
  res.status(204).send();
});

// Project management
app.post('/api/admin/projects', authenticateToken, (req, res) => {
  const newProject = {
    id: Math.max(...projects.map(p => p.id)) + 1,
    ...req.body
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.put('/api/admin/projects/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Project not found' });
  }
  projects[index] = { ...projects[index], ...req.body };
  res.json(projects[index]);
});

app.delete('/api/admin/projects/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  projects = projects.filter(p => p.id !== id);
  res.status(204).send();
});

// Course management
app.post('/api/admin/courses', authenticateToken, (req, res) => {
  const newCourse = {
    id: Math.max(...courses.map(c => c.id)) + 1,
    students: 0,
    rating: 0,
    ...req.body
  };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

app.put('/api/admin/courses/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  const index = courses.findIndex(c => c.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Course not found' });
  }
  courses[index] = { ...courses[index], ...req.body };
  res.json(courses[index]);
});

app.delete('/api/admin/courses/:id', authenticateToken, (req, res) => {
  const id = parseInt(req.params.id);
  courses = courses.filter(c => c.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});