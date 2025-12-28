import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 pb-16">
          
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Hexagon className="text-green-600 w-8 h-8" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white uppercase tracking-wider">Kaduna Factory</span>
                <span className="text-[10px] text-green-600 tracking-[0.2em]">Est. Nigeria</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 border-l-2 border-green-800 pl-4">
              Pioneering sustainable industrial solutions. We engineer the future with precision, integrity, and innovation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-green-500 transition-colors flex items-center gap-2">Home <ArrowUpRight size={12}/></Link></li>
              <li><Link to="/directors" className="hover:text-green-500 transition-colors flex items-center gap-2">Leadership <ArrowUpRight size={12}/></Link></li>
              <li><Link to="/contact" className="hover:text-green-500 transition-colors flex items-center gap-2">Contact <ArrowUpRight size={12}/></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-green-600 shrink-0 mt-1" size={16} />
                <span>Plot 578 Idris Gidado St,<br/>Wuye, Ankuru 900108,<br/>FCT, Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-green-600 shrink-0 mt-1" size={16} />
                <div className="flex flex-col">
                  <span className="hover:text-white transition-colors">0907 469 0597</span>
                  <span className="hover:text-white transition-colors">0913 536 1843</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-green-600 shrink-0" size={16} />
                <span className="hover:text-white transition-colors">Info@qervelimited.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">ISO Certification</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 py-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-wide">
          <p>© {new Date().getFullYear()} Qerve Limited. All rights reserved.</p>
          <p className="mt-2 md:mt-0 opacity-50">Designed for Industrial Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;