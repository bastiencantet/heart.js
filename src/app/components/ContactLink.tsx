import Link from "next/link";
import React from "react";

export function ContactLink() {
    return (
        <div style={{position: 'absolute',bottom: 0, left: "50%",display:"flex", transform: 'translate(-50%, 0)'
            ,flexDirection:"column", justifyContent:'end', alignItems:"center"}}>
            <h1 style={{color: 'black', fontSize: '1.5em'}}>Made with ❤️ by Bastien CANTET</h1>
            <Link prefetch={false} href="https://github.com/bastiencantet" style={{
                padding: '10px 20px',
                backgroundColor: 'black',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                marginTop: '10px',
                display: 'inline-block',
                marginBottom: '10px',
            }}>My Github</Link>
        </div>
    )
}
