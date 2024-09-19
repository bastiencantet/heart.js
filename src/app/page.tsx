import React, {Suspense} from "react";
import {SceneComponents} from "@/app/components/client/HeartScene";
import Link from "next/link";
import {center} from "maath/buffer";


export function Loading() {
    return (
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <h1>Loading...</h1>
        </div>
    );
}

export function ContactLink() {
    return (
        <div style={{position: 'absolute',bottom: 0, left: "50%",display:"flex", transform: 'translate(-50%, 0)'
            ,flexDirection:"column", justifyContent:'end', alignItems:"center"}}>
            <h1 style={{color: 'black', fontSize: '1.5em'}}>Made with ❤️ by Bastien CANTET</h1>
            <Link href="" style={{
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

export default function HeartScene() {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <SceneComponents/>
            </Suspense>
            <ContactLink/>
        </>
    );
}
