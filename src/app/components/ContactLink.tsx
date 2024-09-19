import Link from "next/link";
import React from "react";

export function ContactLink() {
    return (
        <div style={{position: 'absolute', bottom: 0, left: "50%", display: "flex", transform: 'translate(-50%, 0)',
            flexDirection: "column", justifyContent: 'end', alignItems: "center"
        }}>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center",
                padding: '10px', borderRadius: '10px', marginBottom: '20px',
                paddingLeft: '20px', paddingRight: '20px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 100, 100, 0.2)'
            }}>
                <h1 style={{color: 'lightgrey', fontSize: '1.5em', opacity: '1'}}>Made with ❤️ by Bastien CANTET</h1>
                <Link prefetch={false} href="https://github.com/bastiencantet" style={{
                    color: 'lightgrey', fontSize: '1em', opacity: '0.8', textDecoration: 'underline',
                }}>View my Github</Link>
            </div>
        </div>
    )
}
