import React from "react";
import "./App.css";
import ComputerList from "./components/ComputerList";
import ForensicLogs from "./components/ForensicLogs";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Network File Discovery & Cyber Forensics</h1>
            </header>
            <main>
                <ComputerList />
                <ForensicLogs />
            </main>
        </div>
    );
}

export default App;
