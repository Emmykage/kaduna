import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Linkedin, Mail } from 'lucide-react';

const DirectorPage = () => {
  const leadership = [
    {
      name: 'Mr. Henry Benye',
      role: 'Managing Director',
      bio: 'Leading with over two decades of industrial expertise, driving strategic growth and sustainable manufacturing practices at Kaduna Factory.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Mr. Chuba Menanya',
      role: 'COO & Head of Accounts',
      bio: 'Expertly bridging operations and finance to ensure fiscal health and operational efficiency across all production lines.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const team = [
    {
      name: 'Ernest Paul Orji',
      role: 'Senior Team Member',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Leadership - Kaduna Factory</title>
        <meta name="description" content="Meet the executive team driving excellence at Kaduna Factory." />
      </Helmet>

      <div className="bg-slate-50 min-h-screen pt-24 pb-20">
        {/* Header */}
        <div className="bg-slate-900 text-white py-24 mb-20 clip-path-slant">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">
                Our <span className="text-green-500">Leadership</span>
              </h1>
              <p className="text-xl text-slate-400 font-light border-l-4 border-green-600 pl-6">
                Visionary guidance powered by decades of industry experience.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-6">
          {/* Executive Directors */}
          <div className="mb-24">
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-10 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-green-600"></span>
              Executive Board
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {leadership.map((director, idx) => (
                <motion.div 
                  key={director.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="group bg-white flex flex-col md:flex-row shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="md:w-2/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-900/20 group-hover:bg-transparent transition-colors z-10" />
                    <img src={director.image} alt={director.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8 md:w-3/5 flex flex-col justify-center border-b-4 border-transparent group-hover:border-green-500 transition-colors">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{director.name}</h3>
                    <p className="text-green-600 font-bold text-xs uppercase tracking-wider mb-4">{director.role}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{director.bio}</p>
                    <div className="flex gap-4 mt-auto">
                      <button className="text-slate-400 hover:text-green-600 transition-colors"><Linkedin size={20} /></button>
                      <button className="text-slate-400 hover:text-green-600 transition-colors"><Mail size={20} /></button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h2 className="text-sm bg-red font-bold text-green-600 uppercase tracking-widest mb-10 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-green-600"></span>
              Key Personnel
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 border border-slate-200 hover:border-green-500 transition-colors group text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-green-500 transition-colors">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectorPage;