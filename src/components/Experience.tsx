
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experienceData = [
  {
    position: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2021 - Present',
    description: 'Leading the frontend development team in creating enterprise-level web applications using React and TypeScript. Implementing and maintaining coding standards, mentoring junior developers, and collaborating with UX/UI designers and backend teams.',
    responsibilities: [
      'Architecture and development of large-scale React applications',
      'Implementation of CI/CD pipelines and testing strategies',
      'Code reviews and technical documentation',
      'Performance optimization and accessibility improvements',
    ],
  },
  {
    position: 'Frontend Developer',
    company: 'WebInnovate Studio',
    location: 'Los Angeles, CA',
    period: '2018 - 2021',
    description: 'Developed responsive and cross-browser compatible websites for various clients in e-commerce, fintech, and healthcare sectors. Collaborated in an agile team environment to deliver high-quality web solutions.',
    responsibilities: [
      'Building interactive user interfaces with React and Redux',
      'Converting design mockups into functional web pages',
      'Optimizing web performance and load times',
      'Implementing responsive designs for mobile and desktop',
    ],
  },
  {
    position: 'Junior Web Developer',
    company: 'Digital Creations',
    location: 'San Diego, CA',
    period: '2016 - 2018',
    description: 'Started as an intern and grew into a full-time role. Worked on developing and maintaining client websites using HTML, CSS, JavaScript, and jQuery.',
    responsibilities: [
      'Developing and maintaining client websites',
      'Fixing bugs and implementing new features',
      'Creating responsive layouts and UI components',
      'Assisting with website deployments and updates',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="mt-12">
          <div className="space-y-12 animate-slide-up">
            {experienceData.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="card p-6">
                  <h3 className="text-lg font-bold text-primary mb-1">{job.position}</h3>
                  <h4 className="text-base font-medium mb-4">{job.company}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mb-4">
                    <div className="flex items-center mr-6 mb-2 sm:mb-0">
                      <Calendar size={16} className="mr-2" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <h5 className="font-semibold mb-2">Key Responsibilities:</h5>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {job.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
