import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Truck, Box, BarChart3, ShieldCheck, Zap, Leaf, Factory, Globe, Package, Ship, Users, Tractor } from 'lucide-react';
import { Button } from '../components/UI/button';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const LandingPage = () => {
  return (
    <div className="overflow-hidden bg-slate-50">
      {/* Industrial Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-900 text-white overflow-hidden clip-path-slant">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565514020176-8848d56b6a31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40" />
          {/* Animated Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-green-500" />
              <span className="text-green-400 font-bold tracking-[0.2em] uppercase text-sm">Agro Processing Excellence</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-8">
              Powering <br/>

               
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Agricultural</span> <br/>
               Value Chain.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light border-l-4 border-green-900 pl-6">

Qerve Industries Ltd. is a trusted processor, trader, and exporter of high‑quality agricultural commodities and by‑products for domestic and global markets.            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="h-14 px-8 bg-green-600 hover:bg-green-500 text-white rounded-none border-l-4 border-green-300 text-sm font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/directors">
                <Button variant="outline" className="h-14 px-8 border-slate-600 text-slate-300 hover:bg-white hover:text-slate-900 hover:border-white rounded-none text-sm font-bold tracking-widest uppercase bg-transparent">
                  View Leadership
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative mechanical element */}
        <motion.div 
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -right-20 top-1/4 hidden lg:block opacity-10"
        >
          <Tractor size={600} strokeWidth={0.5} />
        </motion.div>
      </section>

      
  

      {/* Stats Section */}
      <section className="bg-green-600 py-12 relative z-20 -mt-20 mx-4 md:mx-20 rounded-t-sm shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-green-500/50">
            {[
              { label: "Years Experience", value: "25+" },
              { label: "Agricultural Products Processed & Supplied", value: "1200+" },
              { label: "Core Commodities Traded & Processed", value: "15+" },
              { label: "Active Sourcing Regions Across Nigeria", value: "14+" },
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <h3 className="text-4xl font-black text-white mb-1">{stat.value}</h3>
                <p className="text-green-100 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-2 block">Our Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Agricultural Solutions</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
{ icon: Leaf, title: 'Non‑GMO Focus', desc: 'We prioritize non‑GMO agricultural products tailored for quality‑conscious markets.' 
,                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"

},
{              img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
, icon: Factory, title: 'Processing Capacity', desc: 'Over 500,000kg of agricultural products processed and supplied since inception.' },
{              img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
, icon: Globe, title: 'Global Reach', desc: 'Supplying both domestic processors and international buyers through Lagos Port.' }
,

         
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative bg-white border border-slate-200 hover:border-green-500 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-8 right-8 bg-green-600 text-white p-3 shadow-lg">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/contact" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-green-600 transition-colors">
                  Learn More <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Strip */}
      <section className="bg-slate-900 py-24 clip-path-slant-inverse relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/50 skew-x-12" />
         <div className="container mx-auto px-6 relative z-10">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Qerve Limited?</h2>
               <p className="text-slate-400 mb-8 leading-relaxed">
                 We don't just manufacture; we innovate. Our facility is designed to handle the most demanding industrial challenges with zero compromise on quality.
               </p>
               <ul className="space-y-6">
                 {[
                   { icon: ShieldCheck, text: "Proven Capacity & Reliability" },
                   { icon: Zap, text: "Value-Added, Non-GMO Focus" },
                   { icon: BarChart3, text: "Strong Domestic & Export Market Access" }
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-white">
                     <div className="p-2 rounded bg-green-600/20 text-green-500 border border-green-600/30">
                       <item.icon size={20} />
                     </div>
                     <span className="font-medium">{item.text}</span>
                   </li>
                 ))}
               </ul>
             </div>
             <div className="relative">
               <div className="absolute inset-0 border-2 border-green-500/30 transform translate-x-4 translate-y-4" />
               <img 
                 src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae" 
                 alt="Industrial Worker" 
                 className="relative w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
               />
             </div>
           </div>
         </div>
      </section>




{/* About Section */}
<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold">About Qerve Industries</h2>
<p className="mt-4 text-gray-600">
Established in 2019, Qerve Industries Ltd. operates as a warehouse, processor, trader, and supplier of agricultural commodities and animal feed by‑products across Nigeria and international markets.
</p>
</motion.div>


<div className="grid md:grid-cols-3 gap-8 mt-16">
{[{ icon: Leaf, title: 'Non‑GMO Focus', text: 'We prioritize non‑GMO agricultural products tailored for quality‑conscious markets.' },
{ icon: Factory, title: 'Processing Capacity', text: 'Over 500,000kg of agricultural products processed and supplied since inception.' },
{ icon: Globe, title: 'Global Reach', text: 'Supplying both domestic processors and international buyers through Lagos Port.' }]
.map((item, i) => (
<motion.div key={i} whileHover={{ y: -8 }} className="bg-white p-8 rounded-2xl shadow-md">
<item.icon className="w-10 h-10 text-green-600" />
<h3 className="mt-4 font-semibold text-xl">{item.title}</h3>
<p className="mt-2 text-gray-600">{item.text}</p>
</motion.div>
))}
</div>
</div>
</section>


{/* Products Section */}
<section className="py-20">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-bold text-center">Our Products</h2>
<div className="grid md:grid-cols-3 gap-8 mt-12">
{['Oil Seeds & Nuts', 'Grains', 'Animal Feed By‑products', 'Cassava Products', 'Gum Arabic', 'Soybeans & Sesame']
.map((product, i) => (
<motion.div key={i} whileHover={{ scale: 1.05 }} className="border rounded-2xl p-6 flex items-center gap-4">
<Package className="text-green-600" />
<span className="font-medium">{product}</span>
</motion.div>
))}
</div>
</div>
</section>


{/* Market Section */}
<section className="py-20 bg-slate-950 text-white">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
<h2 className="text-3xl md:text-4xl font-bold">Domestic & Export Markets</h2>
<p className="mt-4 text-green-100">
We supply major local processors such as Olam Agri Nigeria and JB Farms, while exporting commodities like Palm Kernel Cake, Sesame, and Soybeans to international markets.
</p>
</motion.div>
<motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-6">
<div className="bg-white/10 p-6 rounded-2xl">
<Ship />
<p className="mt-2">Lagos Port Exports</p>
</div>
<div className="bg-white/10 p-6 rounded-2xl">
<Users />
<p className="mt-2">Trusted Local Partners</p>
</div>
</motion.div>
</div>
</section>

      {/* CTA */}
      <section className="py-24 bg-green-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Optimize Your Production?</h2>
          <Link to="/contact">
            <Button className="bg-slate-900 hover:bg-green-600 text-white px-10 py-6 text-sm font-bold uppercase tracking-widest rounded-none transition-all duration-300">
              Get A Quote Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;