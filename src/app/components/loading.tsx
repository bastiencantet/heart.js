import React from "react";

export  function Loading() {
    return (
        <div style={{width: "100vw", height: "100vh", transform: 'translate(-50%, -50%)'}}>
            <h1 style={{
                color: 'lightgrey',
                fontSize: '2em',
                opacity: '0.8',
            }}>Loading...</h1>
    </div>
);
}
