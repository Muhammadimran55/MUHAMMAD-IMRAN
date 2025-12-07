import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Terminal, Loader2, Cpu } from 'lucide-react';
import { Button } from './Button';
import { askOracle } from '../services/ai';

export const Oracle: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);
    
    // Simulate thinking delay for effect + API call
    const answer = await askOracle(input);
    setResponse(answer);
    setLoading(false);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-80 md:w-96 bg-white dark:bg-neo-darkBg border-4 border-black dark:border-white shadow-hard-lg p-4 flex flex-col"
          >
            <div className="flex justify-between items-center mb-4 border-b-4 border-black dark:border-white pb-2">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-neo-purple" />
                <h3 className="font-mono font-bold text-lg dark:text-white">THE ORACLE</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold leading-none hover:text-neo-pink dark:text-white"
              >
                &times;
              </button>
            </div>

            <div className="min-h-[150px] bg-gray-100 dark:bg-gray-900 border-2 border-black dark:border-white p-3 font-mono text-sm mb-4 overflow-y-auto">
              {!response && !loading && (
                <p className="text-gray-500 dark:text-gray-400">
                  {">"} Initialize query sequence...<br/>
                  {">"} Ask about the curriculum.<br/>
                  {">"} Ask about the future of AI.
                </p>
              )}
              {loading && (
                <div className="flex items-center gap-2 text-neo-purple">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>COMPUTING GRADIENTS...</span>
                </div>
              )}
              {response && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-black dark:text-neo-green whitespace-pre-wrap"
                >
                  <span className="text-neo-pink font-bold">{">"}</span> {response}
                </motion.div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Query the latent space..."
                className="flex-1 border-2 border-black dark:border-white p-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-neo-yellow dark:bg-black dark:text-white"
              />
              <Button type="submit" size="sm" color="bg-neo-green" className="!px-3">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-neo-purple border-4 border-black dark:border-white shadow-hard flex items-center justify-center rounded-none"
      >
        <Cpu className="w-8 h-8 text-black" />
      </motion.button>
    </div>
  );
};