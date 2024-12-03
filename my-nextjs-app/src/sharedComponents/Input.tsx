'use client';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string; // to style the container if needed
  inputClassName?: string; //to style the input directly
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  containerClassName,
  inputClassName,
  ...props
}) => {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      {label && (
        <label
          htmlFor={props.id || props.name}
          className="text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        {...props}
        className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
        } ${inputClassName}`}
      />
      {helperText && !error && <p className="text-sm text-gray-500 mt-1">{helperText}</p>}
      {error && <p className="text-sm text-red-500 mt-1"></p>}
    </div>
  );
};

export default Input;
