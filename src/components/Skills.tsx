
import React from 'react';

const skills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 75 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'SASS/SCSS', level: 80 },
  { name: 'Redux', level: 75 },
  { name: 'Git/GitHub', level: 85 },
  { name: 'Responsive Design', level: 95 },
  { name: 'Webpack', level: 70 },
];

const otherSkills = [
  'RESTful APIs', 'GraphQL', 'Jest', 'React Testing Library', 
  'Figma', 'Accessibility (WCAG)', 'Performance Optimization',
  'PWA', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className="section-title">Programming Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <div className="animate-slide-up">
            <p className="text-lg leading-relaxed mb-8">
              With expertise in frontend technologies and a strong foundation in UI/UX principles, I create responsive and intuitive web experiences. Here are my core technical skills:
            </p>
            <div className="space-y-6">
              {skills.slice(0, 6).map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-slide-up">
            <div className="space-y-6">
              {skills.slice(6, 12).map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 animate-slide-up">
          <h3 className="text-xl font-bold mb-6">Additional Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
