'use client';
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  glow = true,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition',
        { 'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg' },
        { 'btn btn-accent': variant === 'primary',
          'btn': variant === 'secondary',
          'bg-transparent text-white/80 hover:text-white': variant === 'ghost' },
        glow && 'glow',
        className
      )}
      {...props}
    />
  );
}
