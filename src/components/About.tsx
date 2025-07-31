import React from 'react';
import { Cloud, Server, Shield, Monitor, GitBranch, Settings, Database, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Cloud Platforms",
      icon: <Cloud className="h-6 w-6" />,
      items: ["AWS (EC2, EKS, Lambda, S3)", "Google Cloud Platform", "Azure Fundamentals"]
    },
    {
      category: "Container & Orchestration",
      icon: <Server className="h-6 w-6" />,
      items: ["Kubernetes", "Docker", "Helm Charts", "Container Security"]
    },
    {
      category: "Infrastructure as Code",
      icon: <Settings className="h-6 w-6" />,
      items: ["Terraform", "Ansible", "CloudFormation", "Pulumi"]
    },
    {
      category: "Monitoring & Observability",
      icon: <Monitor className="h-6 w-6" />,
      items: ["Grafana", "Prometheus", "ELK Stack", "DataDog", "Sentry"]
    },
    {
      category: "Security & Compliance",
      icon: <Shield className="h-6 w-6" />,
      items: ["IAM Management", "Security Scanning", "Compliance Automation", "Vault"]
    },
    {
      category: "CI/CD & Version Control",
      icon: <GitBranch className="h-6 w-6" />,
      items: ["Git", "GitLab CI", "Jenkins", "GitHub Actions", "ArgoCD"]
    },
    {
      category: "Databases & Storage",
      icon: <Database className="h-6 w-6" />,
      items: ["PostgreSQL", "MongoDB", "Redis", "S3", "Backup Strategies"]
    },
    {
      category: "Scripting & Programming",
      icon: <Zap className="h-6 w-6" />,
      items: ["Bash", "Node.js", "Python", "Go", "Linux Administration"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            With over 5 years of hands-on experience in cloud infrastructure and DevOps practices, 
            I specialize in building scalable, secure, and cost-effective solutions. My expertise spans 
            across major cloud platforms, container orchestration, and modern monitoring tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-400 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Journey</h3>
              <p className="text-gray-300 mb-4">
                Throughout my career, I've successfully led cloud migration projects, implemented 
                robust CI/CD pipelines, and optimized infrastructure costs by up to 40%. My approach 
                combines technical excellence with business understanding to deliver solutions that 
                drive real value.
              </p>
              <p className="text-gray-300">
                I'm passionate about sharing knowledge and helping organizations adopt cloud-native 
                practices through <span className="text-blue-400 font-semibold">Kloud-Scaler</span>, 
                represented by <span className="text-purple-400 font-semibold">TechYavi</span>.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-gray-300 text-sm">Cost Optimization</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">System Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;