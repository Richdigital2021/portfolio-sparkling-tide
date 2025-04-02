
import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-slide-up">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out to me for job opportunities, collaborations, or just to say hello! I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center bg-primary/10 p-3 rounded-full text-primary mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:akintunderichard8@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    akintunderichard8@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center bg-primary/10 p-3 rounded-full text-primary mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a 
                    href="tel:+2348033664299"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +234 803 366 4299
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center bg-primary/10 p-3 rounded-full text-primary mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="contact-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="contact-input"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="contact-input"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="contact-input resize-none"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-full">
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
