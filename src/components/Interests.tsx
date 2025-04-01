
import React from 'react';
import { BookOpen, Code, Coffee, Compass, Gamepad2, Headphones, Mountains, Palette } from 'lucide-react';

const interestsData = [
  {
    name: 'Coding Challenges',
    icon: <Code size={28} />,
    description: 'I enjoy solving algorithmic problems and participating in hackathons to sharpen my skills.',
  },
  {
    name: 'Hiking',
    icon: <Mountains size={28} />,
    description: 'Exploring nature trails and mountains helps me clear my mind and stay inspired.',
  },
  {
    name: 'Reading',
    icon: <BookOpen size={28} />,
    description: 'I love science fiction, technical books, and biographies of innovative thinkers.',
  },
  {
    name: 'Travel',
    icon: <Compass size={28} />,
    description: 'Experiencing different cultures and perspectives broadens my horizons.',
  },
  {
    name: 'Music',
    icon: <Headphones size={28} />,
    description: 'I enjoy a wide range of genres, from classical to electronic, while coding.',
  },
  {
    name: 'Gaming',
    icon: <Gamepad2 size={28} />,
    description: 'Strategy and puzzle games are my favorite ways to relax and exercise my mind.',
  },
  {
    name: 'Art & Design',
    icon: <Palette size={28} />,
    description: 'I appreciate good design and occasionally dabble in digital art and UI design.',
  },
  {
    name: 'Coffee',
    icon: <Coffee size={28} />,
    description: 'Exploring new coffee shops and brewing methods is my weekend ritual.',
  },
];

const Interests: React.FC = () => {
  return (
    <section id="interests" className="section-padding bg-muted/50">
      <div className="container">
        <h2 className="section-title">Interests & Hobbies</h2>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {interestsData.map((interest, index) => (
            <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4 text-accent">
                {interest.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{interest.name}</h3>
              <p className="text-muted-foreground text-sm">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
