
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    location: 'Stanford, CA',
    period: '2016 - 2018',
    description: 'Focused on Human-Computer Interaction and Web Technologies. Graduated with honors and completed a thesis on optimizing user experiences in progressive web applications.',
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    period: '2012 - 2016',
    description: 'Comprehensive program covering software development principles, algorithms, and programming languages. Participated in multiple hackathons and led the Web Development Club.',
  },
  {
    degree: 'Web Development Bootcamp',
    institution: 'Coding Academy',
    location: 'San Francisco, CA',
    period: '2011 - 2012',
    description: 'Intensive 12-week program focusing on modern web development technologies, including HTML, CSS, JavaScript, and various frameworks and libraries.',
  },
];

const certifications = [
  {
    name: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Meta',
    date: '2023',
  },
  {
    name: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    date: '2022',
  },
  {
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    date: '2021',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-muted/50">
      <div className="container">
        <h2 className="section-title">Educational Background</h2>
        
        <div className="mt-12">
          <div className="mb-16 animate-slide-up">
            <h3 className="text-xl font-bold mb-8">Academic Education</h3>
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="card p-6">
                    <h4 className="text-lg font-bold text-primary mb-1">{item.degree}</h4>
                    <h5 className="text-base font-medium mb-4">{item.institution}</h5>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mb-4">
                      <div className="flex items-center mr-6 mb-2 sm:mb-0">
                        <Calendar size={16} className="mr-2" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-up">
            <h3 className="text-xl font-bold mb-8">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="card p-6">
                  <h4 className="text-lg font-bold mb-2">{cert.name}</h4>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
