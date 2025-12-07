import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  color = 'bg-neo-yellow',
  className = '',
  ...props 
}) => {
  const baseStyles = "font-mono font-bold border-2 border-black transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";
  
  const variants = {
    primary: `${color} text-black shadow-hard hover:shadow-hard-lg dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]`,
    secondary: "bg-white text-black shadow-hard hover:shadow-hard-lg dark:bg-neo-darkBg dark:text-white dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
    outline: "bg-transparent text-black border-black hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-xl",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};