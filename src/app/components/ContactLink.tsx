import Link from "next/link";
import React from "react";

export function ContactLink() {
    return (
        <div className={"w-screen sm:left-1/2 sm:-translate-x-1/2 sm"} style={{position: 'absolute', bottom: 0, display: "flex",
            flexDirection: "column", justifyContent: 'end', alignItems: "center"
        }}>
            <div className={"card w-screen sm:w-auto"}>
                <h1 style={{color: 'lightgrey', fontSize: '1.5em', opacity: '1'}}>Made with ❤️ by Bastien CANTET</h1>
                <Link prefetch={false} href="https://github.com/bastiencantet" style={{
                    color: 'lightgrey', fontSize: '1em', opacity: '0.8', textDecoration: 'underline',
                }}>View my Github</Link>
            </div>
        </div>
    )
}
