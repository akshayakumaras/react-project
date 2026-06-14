import { useEffect, useRef, useState } from "react";

function Hooks() {

    const [count, setcount] = useState(0);

    const userText = useRef<HTMLInputElement>(null);

    const inputFocus = () => {
        userText.current?.focus();
    };

    useEffect(() => {
        console.log("useEffect 1 called");

        setcount(prev => prev + 1);

        return () => {
            console.log("useEffect 1 cleanup called");
        };
    }, []);

    useEffect(() => {
        console.log("useEffect 2 called");
    }, [count]);

    useEffect(() => {
        inputFocus();
    }, []);

    return (
        <div className="content">
            <input
                type="text"
                ref={userText}
            />
            <button onClick={inputFocus}>Enter</button> 
            <h1>My App</h1>
        </div>
    );
}

export default Hooks;