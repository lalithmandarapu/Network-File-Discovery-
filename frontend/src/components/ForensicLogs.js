import React, { useEffect, useState } from "react";
import { fetchLogs } from "../api";

const ForensicLogs = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const loadLogs = async () => {
            const data = await fetchLogs();
            console.log(data)
            setLogs(data);
        };

        loadLogs();
    }, []);

    return (
        <div>
            <h2>Forensic Logs</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>
                        {log.timestamp} - {log.ip} accessed {log.filename} ({log.action})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ForensicLogs;
