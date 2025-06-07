import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { toggleTheme } from "../../themeSlice";
import styles from "./json-viewer.module.css";

"use client";

type JsonViewerProps = {
    logData: unknown;
};

const isObject = (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" && value !== null && !Array.isArray(value);

const JsonNode: React.FC<{ data: unknown; path?: string }> = ({ data, path = "" }) => {
    const [expanded, setExpanded] = useState(true);

    if (Array.isArray(data)) {
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
    }

    if (isObject(data)) {
        return (
            <div className={styles.node}>
                <span onClick={() => setExpanded((e) => !e)} className={styles.toggle}>
                    {expanded ? "-" : "+"} Object
                </span>
                {expanded &&
                    Object.entries(data).map(([key, value]) => (
                        <div key={key}>
                            <span className={styles.key}>{key}:</span> <JsonNode data={value} path={`${path}.${key}`} />
                        </div>
                    ))}
            </div>
        );
    }

    return <span className={styles.value}>{JSON.stringify(data)}</span>;
};

const JsonViewer: React.FC<JsonViewerProps> = ({ logData }) => {
    const theme = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch();

    return (
        <div className={`${styles.container} ${theme === "dark" ? styles.dark : styles.light}`}>
            <button onClick={() => dispatch(toggleTheme())} style={{ float: "right", marginBottom: 8 }}>
                Switch to {theme === "light" ? "Dark" : "Light"} Theme
            </button>
            <JsonNode data={logData} />
        </div>
    );
};

export default JsonViewer;