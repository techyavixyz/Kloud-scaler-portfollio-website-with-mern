import React, { useState, useEffect } from 'react';
import { Clock, Users, Star, BookOpen, Play } from 'lucide-react';
import axios from 'axios';

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

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="courses" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
            <p className="text-gray-400 mt-4">Loading courses...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="courses" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DevOps <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master cloud technologies and DevOps practices with comprehensive, hands-on courses designed for real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
                    {course.level}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm">{course.rating} rating</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <BookOpen className="h-4 w-4" />
                    <span className="text-sm">Certificate included</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">
                    {course.price}
                  </div>
                  <button className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    <Play className="h-4 w-4" />
                    <span>Enroll Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Level Up Your DevOps Skills?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our comprehensive DevOps courses. 
            Get hands-on experience with real-world projects and industry best practices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              View All Courses
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              Free Preview
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;