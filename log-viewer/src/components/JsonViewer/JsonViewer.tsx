import React from 'react';
import styles from './JsonViewer.module.css';

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

const JsonNode: React.FC<{ data: unknown, path: string; level?: number }> = ({ data, path = "", level = 0 }) => {
  const [expanded, setExpanded] = React.useState(false);
  if (isJsonObject(data)) {
    return (
        <div>
            <span onClick={() => setExpanded((e) => !e)} className={styles.toggle}>
                {"{ "} 
            </span>
        {expanded && (
            <div className={styles.node}>

                
                  {
                      Object.entries(data).map(([key, value]) => (
                        <div className={styles.node}>
                          <div key={key}>
                              <span className={styles.key}>{key}:</span> <JsonNode data={value} path={`${path}.${key}`} />
                          </div>
                        </div>
                      ))}

            </div>
        )}
            <span onClick={() => setExpanded((e) => !e)} className={styles.toggle}>
                {"}"} 
            </span>
          </div>

        );
  } else if (isJsonArray(data)) {
    return (
            <div className={styles.node}>
                <span onClick={() => setExpanded((e) => !e)} className={styles.toggle}>
                    [{expanded ? "-" : "+"}] Array({data.length})
                </span>
                {expanded &&
                    data.map((item, idx) => (
                        <div key={idx}>
                            <JsonNode data={item} path={`${path}[${idx}]`} />
                        </div>
                    ))}
            </div>
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
