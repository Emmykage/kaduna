import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import useToast from '../components/UI/useToast';
import { Button } from '../components/UI/button';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Request Received",
      description: "Our engineering team will review your inquiry and respond within 24 hours.",
      className: "bg-slate-900 text-white border-green-600"
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Qerve Limited</title>
        <meta name="description" content="Get in touch with Qerve Limited for industrial inquiries." />
      </Helmet>

      <div className="min-h-screen pt-20 bg-slate-50">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
          
          {/* Left: Dark Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 text-white p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-green-500 font-bold uppercase tracking-widest text-xs mb-4 block">Get In Touch</span>
              <h1 className="text-5xl font-black mb-8 leading-tight">LET'S BUILD <br/>SOMETHING <span className="text-green-500">GREAT.</span></h1>
              <p className="text-slate-400 mb-12 max-w-md leading-relaxed">
                Reach out to discuss your manufacturing requirements. We are ready to deploy our expertise for your next project.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="p-3 bg-slate-800 rounded text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Factory Location</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Plot 578 Idris Gidado St, Wuye,<br/>Ankuru 900108, FCT, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="p-3 bg-slate-800 rounded text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Direct Lines</h3>
                    <div className="flex flex-col text-slate-400 text-sm">
                      <a href="tel:09074690597" className="hover:text-green-400 transition-colors">0907 469 0597</a>
                      <a href="tel:09135361843" className="hover:text-green-400 transition-colors">0913 536 1843</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="p-3 bg-slate-800 rounded text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Inquiries</h3>
                    <a href="mailto:Info@qervelimited.com" className="text-slate-400 text-sm hover:text-green-400 transition-colors">
                      Info@qervelimited.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Light Form Side */}
          <div className="bg-white p-12 lg:p-20 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-lg mx-auto w-full"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send Request</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Name</label>
                    <input type="text" required className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 focus:outline-none focus:border-green-500 transition-colors font-medium" placeholder="Full Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</label>
                    <input type="email" required className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 focus:outline-none focus:border-green-500 transition-colors font-medium" placeholder="email@company.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Subject</label>
                  <input type="text" required className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 focus:outline-none focus:border-green-500 transition-colors font-medium" placeholder="Project Inquiry" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
                  <textarea required rows="4" className="w-full bg-slate-50 border-b-2 border-slate-200 p-3 focus:outline-none focus:border-green-500 transition-colors font-medium resize-none" placeholder="Describe your project requirements..."></textarea>
                </div>

                <Button type="submit" className="w-full bg-slate-900 hover:bg-green-600 text-white h-14 uppercase tracking-widest font-bold text-sm rounded-none transition-all duration-300 shadow-lg">
                  Submit Inquiry <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;