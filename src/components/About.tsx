
import React from 'react';
import { FileText } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="animate-slide-up">
            <p className="text-lg leading-relaxed mb-6">
              I'm a passionate Frontend Developer with 5 years of experience building modern web applications. My journey in web development started during my university years, and I've been in love with creating beautiful, functional interfaces ever since.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I specialize in React, TypeScript, and modern CSS techniques, with a strong focus on creating responsive, accessible, and performant web applications. I enjoy solving complex problems and transforming designs into pixel-perfect implementations.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              When I'm not coding, you can find me hiking in the mountains, reading science fiction, or experimenting with new cooking recipes. I believe in continuous learning and staying up-to-date with the latest technologies and best practices.
            </p>
            <a 
              href="#" 
              className="btn btn-outline inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-2" size={18} />
              Download Resume
            </a>
          </div>
          <div className="animate-slide-up">
            <div className="grid grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">5+</h3>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">10+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">3</h3>
                <p className="text-muted-foreground">Certifications</p>
              </div>
            </div>
            <div className="card p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Personal Information</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="font-semibold w-32">Name:</span>
                  <span>John Doe</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-32">Location:</span>
                  <span>San Francisco, CA</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-32">Email:</span>
                  <span>johndoe@example.com</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-32">Availability:</span>
                  <span>Freelance / Full-time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
