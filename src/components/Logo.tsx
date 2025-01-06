import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <img 
          src="/DataHelp.eu.svg" 
          alt="DataHelp.eu"
          className="h-11 md:h-[3.72rem] w-auto" // Reduced from h-14 md:h-16 (approximately 7% smaller)
        />
      </Link>
    </div>
  );
}