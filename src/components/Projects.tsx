
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const categories = ['All', 'Web App', 'Website', 'Mobile App', 'UI/UX'];

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    description: 'A full-featured e-commerce platform with product filtering, cart functionality, and payment processing integration.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: 'An interactive dashboard for financial data visualization with real-time updates and customizable widgets.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Firebase'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    id: 3,
    title: 'Restaurant Booking App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: 'A mobile application for restaurant reservations with table selection, menu browsing, and notification system.',
    technologies: ['React Native', 'Redux', 'Firebase', 'Stripe'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1730&q=80',
    description: 'A personal portfolio website with responsive design, dark mode, and smooth animations.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    id: 5,
    title: 'Task Management System',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
    description: 'A collaborative task management application with drag-and-drop interface, team assignments, and progress tracking.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    githubLink: '#',
    liveLink: '#',
  },
  {
    id: 6,
    title: 'Music Streaming App UI',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: 'UI/UX design for a music streaming application with focus on accessibility and intuitive navigation.',
    technologies: ['Figma', 'Adobe XD', 'Sketch'],
    githubLink: '#',
    liveLink: '#',
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="project-card-overlay">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="bg-accent h-1 w-12 mb-4 rounded-full"></div>
                <p className="text-sm mb-4 text-center">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.liveLink}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
