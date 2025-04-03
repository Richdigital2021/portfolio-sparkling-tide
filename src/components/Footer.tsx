
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-secondary-foreground py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Richard Akintunde</h2>
            <p className="text-secondary-foreground/80">Frontend Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/Richdigital2021" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-secondary-foreground/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="http://www.linkedin.com/in/richard-akintunde" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-secondary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/Richy_Akinz" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-secondary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:akintunderichard8@gmail.com" 
                className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-secondary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-secondary-foreground/70">
              &copy; {currentYear} Richard Akintunde. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-secondary-foreground/10">
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Home</a>
            <a href="#about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">About</a>
            <a href="#skills" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Skills</a>
            <a href="#education" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Education</a>
            <a href="#experience" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Experience</a>
            <a href="#projects" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
