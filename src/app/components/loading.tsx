import React from "react";

export  function Loading() {
    return (
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <h1 style={{
                color: 'lightgrey',
                fontSize: '2em',
                opacity: '0.8',
            }}>Loading...</h1>
    </div>
);
}
