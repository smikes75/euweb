import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function FormInput({ label, ...props }: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        {...props}
        className="mt-1 block w-full rounded-md border-2 border-gray-300 px-4 py-3 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
      />
    </div>
  );
}