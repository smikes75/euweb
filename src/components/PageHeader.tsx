import React from 'react';
import { getBackgroundStyle } from '../utils/imageUtils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 z-0"
        style={getBackgroundStyle(`/images/backgrounds/${backgroundImage}`)}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(27, 56, 122, 1) 50%, rgba(27, 56, 122, 0) 100%)'
          }}
        ></div>
      </div>

      <div className="relative z-10 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}