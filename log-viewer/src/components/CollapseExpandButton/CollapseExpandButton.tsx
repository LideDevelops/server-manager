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
    type="button"
    style={{ background: 'transparent', display: 'inline-flex', alignItems: 'center', border: 'none', padding: 0 }}
  >
    <span
      style={{
        display: 'inline-block',
        fontSize: 18,
        color: '#333',
        transform: expanded ? 'rotate(90deg)' : 'none',
        transition: 'transform 0.2s',
      }}
      aria-hidden="true"
    >
      &bull;
    </span>
  </button>
);

export default CollapseExpandButton;
