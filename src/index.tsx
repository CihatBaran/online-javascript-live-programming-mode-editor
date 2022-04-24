import ReactDOM from "react-dom/client";
import React from "react";
import { useState } from "react";
import esbuild from "esbuild-wasm";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const App: React.FC = () => {
    // State
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    const startService = async () => {
        const service = await esbuild.startService({
            worker: true,
            wasmURL: "/esbuild.wasm"
        });
    };

    // Event handlers
    const buttonedClickedHandler = () => {
        console.log(input);
    };
    const codePrint = "<h1>This is element</h1>";

    // Render
    return (
        <div>
            <textarea
                value={input}
                onChange={(e) => { setInput(e.target.value) }}>
            </textarea>
            <div>
                <button onClick={buttonedClickedHandler}>
                    Submit
                </button>
            </div>
            <pre>{codePrint}</pre>
        </div >
    );
};

root.render(
    <App />
);