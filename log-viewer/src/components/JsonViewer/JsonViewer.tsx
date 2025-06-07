import React from 'react';
import styles from './JsonViewer.module.css';

export interface JsonViewerProps {
  data: unknown;
}

const formatJson = (data: unknown) => {
  try {
    return JSON.stringify(data, null, 2);
  } catch {
    return 'Invalid JSON';
  }
};

const JsonViewer: React.FC<JsonViewerProps> = ({ data }) => (
  <pre className={styles.jsonViewer}>{formatJson(data)}</pre>
);

export default JsonViewer;
