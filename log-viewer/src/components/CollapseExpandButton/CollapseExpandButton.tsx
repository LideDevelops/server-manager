import React from 'react';
import styles from './CollapseExpandButton.module.css';

export interface CollapseExpandButtonProps {
  expanded: boolean;
  onClick: () => void;
}

const CollapseExpandButton: React.FC<CollapseExpandButtonProps> = ({ expanded, onClick }) => (
  <button
    className={styles.collapseExpandButton}
    onClick={onClick}
    aria-label={expanded ? 'Collapse' : 'Expand'}
    type="button"
  >
    <span className="mr-1">{expanded ? 'Collapse' : 'Expand'}</span>
    <svg
      className={`w-4 h-4 transition-transform ${expanded ? 'rotate-90' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

export default CollapseExpandButton;
