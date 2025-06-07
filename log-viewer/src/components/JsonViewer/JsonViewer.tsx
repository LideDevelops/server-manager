import React from 'react';
import styles from './JsonViewer.module.css';
import CollapseExpandButton from '../CollapseExpandButton/CollapseExpandButton';

"use client";

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

const isJsonObject = (data: unknown): data is Record<string, unknown> => {
  return typeof data === 'object' && data !== null && !Array.isArray(data);
}

const isJsonArray = (data: unknown): data is unknown[] => {
  return Array.isArray(data);
};

const JsonNode: React.FC<{ data: unknown, path: string }> = ({ data, path = "" }) => {
  const [expanded, setExpanded] = React.useState(false);
  if (isJsonObject(data)) {
    return (
      <span className={styles.jsonObject} style={{ display: 'inline-flex', alignItems: 'center' }}>
        <CollapseExpandButton
          expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        />
        {expanded && (
          <span>
            {Object.entries(data).map(([key, value], idx) => (
              <span key={key} className={styles.jsonKeyValue} style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span className={styles.jsonKey}>{key}:</span>
                <span className={styles.jsonValue}><JsonNode data={value} path={`${path}.${key}`} /></span>
                {idx < Object.entries(data).length - 1 && <span>, </span>}
              </span>
            ))}
          </span>
        )}
      </span>
    );
  } else if (isJsonArray(data)) {
    return (
      <span className={styles.jsonArrayHeader} style={{ display: 'inline-flex', alignItems: 'center' }}>
        <CollapseExpandButton
          expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        />
        {expanded ? (
          <span className={styles.jsonArray}>
            [
            {data.map((item, index) => (
              <span key={index} className={styles.jsonArrayItem} style={{ display: 'inline-flex', alignItems: 'center' }}>
                <JsonNode data={item} path={`${path}[${index}]`} />
                {index < data.length - 1 && <span>, </span>}
              </span>
            ))}
            ]
          </span>
        ) : (
          <span className={styles.jsonArrayCollapsed}>
            Array[{data.length}]
          </span>
        )}
      </span>
    );
  } else {
    return <span className={styles.jsonPrimitive}>{formatJson(data)}</span>;
  }
}

const JsonViewer: React.FC<JsonViewerProps> = ({ data }) => (
  <div className={styles.jsonViewer}>
    <JsonNode data={data} path="" />
  </div>
);

export default JsonViewer;
