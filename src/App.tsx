import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, animate, useInView } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ArrowUpRight,
  Sparkles,
  Users,
  TrendingUp,
  Clock,
  Target,
  Workflow,
  Wrench,
  ArrowRight,
  ArrowDown,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { 
  personalInfo, 
  profile, 
  experience, 
  achievements, 
  competencies, 
  education, 
  certifications,
  caseStudies,
  systems
} from './data';

function AnimatedNumber({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(val) {
          if (ref.current) {
            ref.current.textContent = Math.floor(val).toString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function App() {
  const [expandedCase, setExpandedCase] = useState<number | null>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f5f4] text-zinc-900 font-sans selection:bg-indigo-200 selection:text-indigo-900">
      
      {/* Floating Pill Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-auto">
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-zinc-200/50 rounded-full px-4 md:px-6 py-3 flex items-center justify-between sm:justify-center gap-4 md:gap-8 text-sm font-medium text-zinc-600 w-full">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="sm:hidden p-2 -ml-2 text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop Links */}
          <div className="hidden sm:flex items-center gap-8">
            <a href="#home" className="hover:text-zinc-900 transition-colors">Home</a>
            <a href="#expertise" className="hover:text-zinc-900 transition-colors">Expertise</a>
            <a href="#systems" className="hover:text-zinc-900 transition-colors">Systems</a>
            <a href="#cases" className="hover:text-zinc-900 transition-colors">Case Studies</a>
            <a href="#experience" className="hover:text-zinc-900 transition-colors">Experience</a>
          </div>

          {/* Let's Talk Button (Visible on both) */}
          <a href="#contact" className="bg-zinc-900 text-white px-5 py-2 sm:px-4 sm:py-1.5 rounded-full hover:bg-zinc-800 transition-colors shrink-0 font-medium">
            Let's Talk
          </a>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-3 flex flex-col gap-1 sm:hidden overflow-hidden"
            >
              {[
                { name: 'Home', href: '#home' },
                { name: 'Expertise', href: '#expertise' },
                { name: 'Systems', href: '#systems' },
                { name: 'Case Studies', href: '#cases' },
                { name: 'Experience', href: '#experience' }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-base font-medium text-zinc-600 hover:text-zinc-900 px-4 py-3 rounded-2xl hover:bg-zinc-100/80 transition-colors active:bg-zinc-200"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-32">
        
        {/* Hero & Bento Grid Section */}
        <section id="home" className="space-y-6">
          {/* Massive Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mb-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-indigo-600"></div>
              <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-sm">
                {personalInfo.title}
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-4 text-zinc-900">
              {personalInfo.name}
            </h1>
            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter leading-[0.9] mb-6 text-zinc-400">
              Building teams.<br />
              Scaling culture.
            </h2>
            <p className="text-xl md:text-2xl text-zinc-500 font-medium max-w-2xl">
              An HR leader who builds scalable hiring systems and high-performance cultures for fast-growing teams.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
            
            {/* Photo Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-1 lg:col-span-1 md:row-span-2 rounded-[2rem] overflow-hidden relative aspect-[4/5] md:aspect-[9/16] group"
            >
              <img 
                src="/profile.jpg" 
                alt={personalInfo.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-white font-medium bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                  {personalInfo.name}
                </div>
              </div>
            </motion.div>

            {/* Main Profile Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 lg:col-span-2 bg-zinc-900 text-white p-8 md:p-10 rounded-[2rem] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <Sparkles className="w-8 h-8 text-indigo-400 mb-6" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">The Philosophy</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  {profile[1]} {profile[2]}
                </p>
              </div>
            </motion.div>

            {/* Stat Card 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-1 lg:col-span-1 bg-indigo-100 p-8 rounded-[2rem] flex flex-col justify-center items-center text-center"
            >
              <Users className="w-8 h-8 text-indigo-600 mb-4" />
              <div className="text-5xl font-bold text-indigo-950 tracking-tighter mb-2"><AnimatedNumber value={600} suffix="+" /></div>
              <div className="text-indigo-800 font-medium">Employees</div>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-1 lg:col-span-1 bg-white border border-zinc-200 p-8 rounded-[2rem] flex flex-col justify-center items-center text-center"
            >
              <Briefcase className="w-8 h-8 text-zinc-400 mb-4" />
              <div className="text-5xl font-bold text-zinc-900 tracking-tighter mb-2"><AnimatedNumber value={10} suffix="+" /></div>
              <div className="text-zinc-500 font-medium">Years Exp.</div>
            </motion.div>

            {/* Contact Card */}
            <motion.div 
              id="contact"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="md:col-span-3 lg:col-span-2 bg-white border border-zinc-200 p-8 md:p-10 rounded-[2rem] flex flex-col justify-between relative overflow-hidden group scroll-mt-32"
            >
              {/* Subtle background glow effect */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/10 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500">
                    Let's Connect
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 to-transparent"></div>
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-zinc-600">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0"><Mail size={18} /></div>
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-indigo-600 transition-colors truncate">{personalInfo.email}</a>
                  </li>
                  <li className="flex items-center gap-4 text-zinc-600 group">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors"><Phone size={18} /></div>
                    <a 
                      href={`https://wa.me/971${personalInfo.phone.replace(/^0/, '')}`} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="group-hover:text-emerald-600 transition-colors flex items-center gap-2"
                    >
                      {personalInfo.phone}
                      <span className="text-xs font-medium px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4 text-zinc-600">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0"><MapPin size={18} /></div>
                    <span>{personalInfo.location}</span>
                  </li>
                  <li className="flex items-center gap-4 text-zinc-600 group">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-[#0A66C2] group-hover:text-white transition-colors"><Linkedin size={18} /></div>
                    <a 
                      href={personalInfo.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="group-hover:text-[#0A66C2] transition-colors truncate"
                    >
                      LinkedIn Profile
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Languages/Nationality Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="md:col-span-3 lg:col-span-2 bg-zinc-900 text-white p-8 md:p-10 rounded-[2rem] flex flex-col justify-center"
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-2">Languages</div>
                  <div className="text-xl font-medium">{personalInfo.languages}</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-2">Nationality</div>
                  <div className="text-xl font-medium">{personalInfo.nationality}</div>
                </div>
              </div>
            </motion.div>

            {/* HR Tech Stack Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="md:col-span-3 lg:col-span-2 bg-indigo-600 text-white p-8 md:p-10 rounded-[2rem] flex flex-col justify-center"
            >
              <div className="text-indigo-200 text-sm font-medium uppercase tracking-wider mb-4">HR Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {['SAGE', 'IIKO', 'SERVE ME', 'BAYZAT', 'ZOHO'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">{tech}</span>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* Impact / Big Numbers Section */}
        <section id="impact" className="scroll-mt-32">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Measurable Impact</h2>
            <p className="text-xl text-zinc-500">Driving efficiency and satisfaction through strategic HR initiatives.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[2rem] border border-zinc-200">
              <TrendingUp className="w-8 h-8 text-emerald-500 mb-6" />
              <div className="text-6xl font-bold tracking-tighter text-zinc-900 mb-4"><AnimatedNumber value={25} suffix="%" /></div>
              <p className="text-zinc-600 font-medium">Increase in employee satisfaction through targeted wellness and retention programs.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-zinc-200">
              <Clock className="w-8 h-8 text-indigo-500 mb-6" />
              <div className="text-6xl font-bold tracking-tighter text-zinc-900 mb-4"><AnimatedNumber value={30} suffix="%" /></div>
              <p className="text-zinc-600 font-medium">Reduction in payroll processing time via automation, saving ~10 hours per cycle.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-zinc-200">
              <Award className="w-8 h-8 text-amber-500 mb-6" />
              <div className="text-6xl font-bold tracking-tighter text-zinc-900 mb-4"><AnimatedNumber value={100} suffix="%" /></div>
              <p className="text-zinc-600 font-medium">Hiring target met within deadlines for the pre-opening of 5 restaurant branches.</p>
            </div>
          </div>
        </section>

        {/* Expertise / Skills */}
        <section id="expertise" className="scroll-mt-32">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter sticky top-32">Core<br />Expertise</h2>
            </div>
            <div className="md:col-span-8">
              <div className="flex flex-wrap gap-3">
                {competencies.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-6 py-3 bg-white border border-zinc-200 text-zinc-800 rounded-full text-base font-medium hover:border-zinc-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Systems Thinking Section */}
        <section id="systems" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">Systems Thinking</h2>
            <div className="h-[2px] flex-1 bg-zinc-200"></div>
          </div>
          
          <div className="space-y-8">
            {systems.map((system, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative"
              >
                {/* Background decorative element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{system.name}</h3>
                  <p className="text-zinc-400 text-lg mb-10 max-w-2xl">{system.description}</p>
                  
                  {/* Diagram Flow */}
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2 w-full">
                    {system.steps.map((step, stepIdx) => (
                      <React.Fragment key={stepIdx}>
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + (stepIdx * 0.1) }}
                          className="bg-zinc-800 border border-zinc-700 px-4 py-4 rounded-2xl flex-1 w-full lg:w-auto min-h-[80px] flex items-center justify-center text-center relative group hover:bg-zinc-700 transition-colors"
                        >
                          <div className="absolute -top-3 -left-3 w-7 h-7 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                            {stepIdx + 1}
                          </div>
                          <span className="font-medium text-sm lg:text-xs xl:text-sm text-zinc-200">{step}</span>
                        </motion.div>
                        {stepIdx < system.steps.length - 1 && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (stepIdx * 0.1) }}
                            className="hidden lg:flex text-zinc-500 shrink-0"
                          >
                            <ArrowRight size={20} />
                          </motion.div>
                        )}
                        {stepIdx < system.steps.length - 1 && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (stepIdx * 0.1) }}
                            className="flex lg:hidden text-zinc-500 shrink-0 my-1"
                          >
                            <ArrowDown size={24} />
                          </motion.div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="cases" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">Case Studies</h2>
            <div className="h-[2px] flex-1 bg-zinc-200"></div>
          </div>
          
          <div className="space-y-4">
            {caseStudies.map((study, index) => {
              const isExpanded = expandedCase === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-[2rem] border border-zinc-200 shadow-sm overflow-hidden"
                >
                  <button 
                    onClick={() => setExpandedCase(isExpanded ? null : index)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 pr-4">{study.title}</h3>
                    <motion.div 
                      animate={{ rotate: isExpanded ? 180 : 0 }} 
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="shrink-0 bg-zinc-100 p-2 rounded-full"
                    >
                      <ChevronDown className="text-zinc-500 w-5 h-5 md:w-6 md:h-6" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-6 md:p-8 pt-0 border-t border-zinc-100 mt-2">
                          <div className="space-y-8">
                            <div>
                              <div className="flex items-center gap-2 text-rose-600 font-semibold mb-3">
                                <Target size={18} />
                                <h4>The Problem</h4>
                              </div>
                              <p className="text-zinc-600 leading-relaxed">{study.problem}</p>
                            </div>
                            
                            <div>
                              <div className="flex items-center gap-2 text-indigo-600 font-semibold mb-3">
                                <Workflow size={18} />
                                <h4>What I Did</h4>
                              </div>
                              <p className="text-zinc-600 leading-relaxed">{study.action}</p>
                            </div>
                            
                            <div>
                              <div className="flex items-center gap-2 text-amber-600 font-semibold mb-3">
                                <Wrench size={18} />
                                <h4>Tools & Process</h4>
                              </div>
                              <div className="flex flex-wrap gap-2 mt-3">
                                {study.tools.map((tool, i) => (
                                  <span key={i} className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium border border-amber-100">
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div className="pt-6 border-t border-zinc-100">
                              <div className="flex items-center gap-2 text-emerald-600 font-bold mb-3 text-lg">
                                <TrendingUp size={20} />
                                <h4>The Result</h4>
                              </div>
                              <p className="text-zinc-800 font-medium text-lg leading-relaxed">{study.result}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Experience / Track Record */}
        <section id="experience" className="scroll-mt-32">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter sticky top-32">Career<br />Journey</h2>
            </div>
            <div className="md:col-span-8 space-y-8">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 md:p-10 rounded-[2rem] border border-zinc-200 group hover:border-zinc-300 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-900 mb-1">{exp.role}</h3>
                      <div className="text-lg text-zinc-500 font-medium">{exp.company}</div>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="inline-block px-4 py-1.5 bg-zinc-100 text-zinc-800 rounded-full text-sm font-semibold mb-2">
                        {exp.period}
                      </div>
                      <div className="text-zinc-400 text-sm flex items-center md:justify-end gap-1">
                        <MapPin size={14} /> {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {exp.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2.5 shrink-0 group-hover:bg-indigo-400 transition-colors"></div>
                        <p className="text-zinc-600 leading-relaxed text-lg">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="border-t border-zinc-200 pt-24">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-8 flex items-center gap-3">
                <GraduationCap className="text-zinc-400" /> Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-zinc-200 pb-6 last:border-0 last:pb-0">
                    <span className="text-xl font-medium text-zinc-900">{edu}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-8 flex items-center gap-3">
                <Award className="text-zinc-400" /> Certifications
              </h2>
              <ul className="space-y-6">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-4 border-b border-zinc-200 pb-6 last:border-0 last:pb-0">
                    <ArrowUpRight className="w-6 h-6 text-zinc-300 shrink-0" />
                    <span className="text-lg text-zinc-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-zinc-900 text-white rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden mt-24">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-emerald-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-emerald-300">
                Let's build something great.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Currently open for new opportunities to help scale high-growth teams.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <Mail size={20} />
              Let's Connect
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold text-white tracking-tighter">
            {personalInfo.name}<span className="text-indigo-500">.</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-colors">
              <Mail size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
