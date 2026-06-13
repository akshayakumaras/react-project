import { createContext, useContext } from "react";

// Provide a local UserContext so the module can be resolved without
// requiring an external UserContext file.
const Usercontext = createContext<string | null>(null);

function ComC() {
    const user = useContext(Usercontext);
    console.log(user);
    return (
        <div>
            <h1>Component C</h1>
            <p>com A data: {user ?? "No user"}</p>
        </div>
    );
}

export default ComC;