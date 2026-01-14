import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, icon, ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3.5 text-sm uppercase tracking-wider font-semibold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-brand-dark hover:bg-stone-200",
    secondary: "bg-brand-taupe text-white hover:bg-stone-600",
    outline: "border border-white/30 text-white hover:bg-white hover:text-brand-dark",
    ghost: "text-brand-dark hover:bg-stone-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {icon && (
          <ArrowRight className="ml-2 h-4 w-4" />
        )}
      </span>
    </button>
  );
};