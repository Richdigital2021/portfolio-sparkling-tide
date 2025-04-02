
import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in">
            <p className="text-accent font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Richard Akintunde
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
              Frontend Developer
            </h2>
            <p className="text-muted-foreground max-w-xl mb-8">
              I build exceptional and accessible digital experiences for the web. Specializing in modern frontend technologies, I create responsive and user-friendly interfaces.
            </p>
            <div className="flex space-x-4 mb-12">
              <a href="#" className="social-icon" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent to-primary opacity-75 blur"></div>
              <div className="relative bg-card rounded-full overflow-hidden h-64 w-64 md:h-80 md:w-80 border-4 border-background">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80" 
                  alt="Richard Akintunde" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll Down">
            <ArrowDown className="text-accent" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
