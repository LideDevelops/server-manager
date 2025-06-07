// Example Button component for demonstration and Storybook integration
import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    className={styles.button}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
