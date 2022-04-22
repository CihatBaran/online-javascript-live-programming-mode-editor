import ReactDOM from "react-dom/client";
import React from "react";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const App: React.FC = () => {
    // State
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    // Event Handlers
    const textAreaChangeEventHandler = (event: React.ChangeEvent<HTMLTextAreaElement>):void => {
        setInput(event.target.value);
    }

    const buttonedClickedHandler = ():void => {
        console.log(input);
    }

    // Render
    return <div>
        <textarea value={input} onChange={textAreaChangeEventHandler}></textarea>
        <div>
            <button onClick={buttonedClickedHandler}>Submit</button>
        </div>
        <pre>{code}</pre>
    </div>
};

root.render(
    <App/>
);