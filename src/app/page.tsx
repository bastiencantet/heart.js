import React, {Suspense} from "react";
import {ContactLink} from "@/app/components/ContactLink";
import SceneComponents from "@/app/components/client/Scene";
import {Loading} from "@/app/components/loading";


export default function HeartScene() {
    return (
        <>
            <div className='w-screen h-screen'>
                    <SceneComponents/>
            </div>
            <ContactLink/>
        </>
    );
}
