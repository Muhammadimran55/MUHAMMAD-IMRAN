import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, X, Sun, Moon, ArrowRight, Layers, Box, Code, 
  Cpu, Zap, Eye, CheckCircle2 
} from 'lucide-react';
import { Button } from './components/Button';
import { Oracle } from './components/Oracle';

// Constants
const MARQUEE_TEXT = "HIDDEN LAYERS • DEEP LEARNING • NEURAL NETWORKS • BACKPROPAGATION • TRANSFORMERS • ";

const MODULES = [
  { id: 1, title: "The Perceptron", description: "Understanding the atomic unit of intelligence. Math, logic, and history.", color: "bg-neo-yellow", icon: <Box /> },
  { id: 2, title: "Deep Dive", description: "Multi-layer perceptrons. Activation functions. The vanishing gradient problem.", color: "bg-neo-pink", icon: <Layers /> },
  { id: 3, title: "Vision Quest", description: "Convolutional Neural Networks. Image processing. Seeing the unseen.", color: "bg-neo-cyan", icon: <Eye /> },
  { id: 4, title: "Transformers", description: "Attention is all you need. NLP, sequence modeling, and LLMs.", color: "bg-neo-green", icon: <Zap /> },
];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const xMove = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateHero = useTransform(scrollYProgress, [0, 0.2], [0, 5]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-neo-bg dark:bg-neo-darkBg text-black dark:text-white transition-colors duration-300 overflow-x-hidden font-sans selection:bg-neo-pink selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b-4 border-black dark:border-white bg-white/90 dark:bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Layers className="w-8 h-8 text-neo-pink fill-black" strokeWidth={2.5} />
            <span className="font-mono text-2xl font-bold tracking-tighter">HIDDEN_LAYERS</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-mono font-bold">
            <a href="#curriculum" className="hover:text-neo-purple hover:underline decoration-4 underline-offset-4">CURRICULUM</a>
            <a href="#pricing" className="hover:text-neo-green hover:underline decoration-4 underline-offset-4">PRICING</a>
            <a href="#faq" className="hover:text-neo-cyan hover:underline decoration-4 underline-offset-4">FAQ</a>
            <button onClick={() => setIsDark(!isDark)} className="p-2 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Button size="sm" color="bg-neo-cyan">ENROLL NOW</Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsDark(!isDark)}>
              {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0 }} animate={{ height: 'auto' }}
            className="md:hidden border-t-4 border-black dark:border-white bg-neo-yellow dark:bg-neo-purple"
          >
            <div className="flex flex-col p-4 gap-4 font-mono font-bold text-black">
              <a href="#curriculum" onClick={() => setIsMenuOpen(false)}>CURRICULUM</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)}>PRICING</a>
              <Button onClick={() => setIsMenuOpen(false)} className="w-full">ENROLL NOW</Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-4 min-h-screen flex flex-col justify-center relative">
        <div className="absolute top-24 right-4 md:right-20 opacity-20 pointer-events-none">
          <Code size={400} strokeWidth={0.5} />
        </div>
        
        <div className="max-w-4xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-neo-green px-4 py-2 border-2 border-black dark:border-white mb-6 transform -rotate-2 font-mono font-bold shadow-hard"
          >
            BATCH #04 STARTING SOON
          </motion.div>
          
          <motion.h1 
            style={{ rotate: rotateHero }}
            className="text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-8"
          >
            REVEAL THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-pink via-neo-purple to-neo-cyan" style={{ WebkitTextStroke: isDark ? '2px white' : '2px black' }}>
              HIDDEN LAYERS
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-medium max-w-2xl mb-12 font-mono border-l-8 border-neo-orange pl-6"
          >
            A brutalist deep dive into Artificial Intelligence. No fluff. No hype. Just raw math, code, and weights.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-6">
            <Button size="lg" color="bg-neo-green">START LEARNING</Button>
            <Button size="lg" variant="outline">VIEW SYLLABUS</Button>
          </div>
        </div>

        {/* Floating Abstract Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 md:right-32 w-32 h-32 bg-neo-cyan border-4 border-black dark:border-white rounded-full hidden md:flex items-center justify-center shadow-hard"
        >
          <Cpu className="w-16 h-16" />
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="w-full bg-black text-white dark:bg-white dark:text-black py-6 border-y-4 border-black dark:border-white overflow-hidden whitespace-nowrap">
        <motion.div style={{ x: xMove }} className="flex gap-4 font-mono text-3xl font-bold">
          {Array(10).fill(MARQUEE_TEXT).map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 bg-neo-bg dark:bg-neo-darkBg relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              The <span className="bg-neo-yellow px-2 inline-block -rotate-1 text-black shadow-hard dark:shadow-hard-dark">Stack</span>
            </h2>
            <p className="font-mono text-xl max-w-md text-right">
              Four intense modules designed to break your brain and rebuild it with backpropagation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MODULES.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                className={`p-8 border-4 border-black dark:border-white shadow-hard hover:shadow-hard-lg transition-all ${module.color}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white border-2 border-black rounded-full">
                    {React.cloneElement(module.icon as React.ReactElement, { className: "w-8 h-8 text-black" })}
                  </div>
                  <span className="font-mono font-bold text-4xl opacity-50">0{module.id}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-black">{module.title}</h3>
                <p className="font-medium text-lg text-black/80">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-neo-purple border-t-4 border-black dark:border-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white dark:text-black mb-12 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            INVEST IN INTELLIGENCE
          </h2>
          
          <div className="max-w-lg mx-auto bg-white dark:bg-black p-8 border-4 border-black dark:border-white shadow-hard-lg relative">
            <div className="absolute -top-6 -right-6 bg-neo-orange text-white font-mono font-bold px-4 py-2 border-2 border-black shadow-hard rotate-12">
              BEST VALUE
            </div>
            
            <h3 className="text-3xl font-bold mb-2">FULL ACCESS</h3>
            <div className="text-6xl font-black mb-6">$299</div>
            <p className="font-mono mb-8 text-gray-600 dark:text-gray-400">One time payment. Lifetime access. Updates forever.</p>
            
            <ul className="text-left space-y-4 mb-8 font-medium">
              {['All 4 Modules', 'Private Discord Access', 'Weekly Office Hours', 'Project Code Reviews', 'Certificate of Completion'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-neo-green shrink-0 fill-black" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="w-full" color="bg-neo-green">SECURE YOUR SPOT</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-4 border-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Layers className="w-10 h-10 text-neo-pink" />
            <span className="font-mono text-3xl font-bold">HIDDEN_LAYERS</span>
          </div>
          
          <div className="flex gap-8 font-mono">
            <a href="#" className="hover:text-neo-yellow">TWITTER</a>
            <a href="#" className="hover:text-neo-cyan">GITHUB</a>
            <a href="#" className="hover:text-neo-green">DISCORD</a>
          </div>

          <div className="text-right text-sm text-gray-400 font-mono">
            <p>© 2024 HIDDEN LAYERS.</p>
            <p>DESIGNED WITH RAW TENSORS.</p>
          </div>
        </div>
      </footer>

      {/* The Oracle (AI Assistant) */}
      <Oracle />

    </div>
  );
}

export default App;