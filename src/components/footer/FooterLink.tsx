import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
  external?: boolean;
}

export function FooterLink({ to, children, external = false }: FooterLinkProps) {
  if (external) {
    return (
      <a 
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      to={to}
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      {children}
    </Link>
  );
}