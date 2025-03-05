import React, { useEffect, useState } from "react";
import { fetchComputers } from "../api";

const ComputerList = () => {
    const [computers, setComputers] = useState([]);

    useEffect(() => {
        const loadComputers = async () => {
            const data = await fetchComputers();
            console.log(data);
            setComputers(data);
        };

        loadComputers();
    }, []);

    return (
        <div>
            <h2>Connected Computers</h2>
            <ul>
                {computers.map((computer) => (
                    <li key={computer.ip}>
                        <strong>{computer.hostname}</strong> - {computer.ip}
                        <ul>
                            {computer.files.map((file, index) => (
                                <li key={index}>{file}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComputerList;
