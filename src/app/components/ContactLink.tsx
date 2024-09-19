import Link from "next/link";
import React from "react";

export function ContactLink() {
    return (
        <div className={"w-screen sm:left-1/2 sm:-translate-x-1/2 sm"} style={{position: 'absolute', bottom: 0, display: "flex",
            flexDirection: "column", justifyContent: 'end', alignItems: "center"
        }}>
            <div className={"card w-screen sm:w-auto"}>
                <h1
                    className={"sm:text-2xl opacity-90"} style={{color: "lightgrey"}}>Made with ❤️ by Bastien CANTET</h1>
                <Link className={"text-xs sm:text-base"} href={"https://github.com/bastiencantet"} style={{
                    color: 'lightgrey', opacity: '0.8', textDecoration: 'underline',
                }}>View my Github</Link>
            </div>
        </div>
    )
}
