// Example Button component for demonstration and Storybook integration
import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
