import React from 'react';

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
  <pre className="bg-gray-100 text-gray-800 p-4 rounded overflow-x-auto text-sm font-mono border border-gray-200">
    {formatJson(data)}
  </pre>
);

export default JsonViewer;
