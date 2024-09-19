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
        <div style={{position: 'absolute', width: '100%', height: '100%',top:0,display:"flex",flexDirection:"column", justifyContent:'end', alignItems:"center"}}>
            <h1 style={{color: 'black', fontSize: '1.5em'}}>Made with ❤️ by Bastien CANTET</h1>
            <Link href="" style={{
                //button like style
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
            <Suspense fallback={<Loading/>}>
                <SceneComponents/>
                <ContactLink/>
            </Suspense>
    );
}
