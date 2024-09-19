import React, {Suspense} from "react";
import {ContactLink} from "@/app/components/ContactLink";
import SceneComponents from "@/app/components/client/HeartScene";


export default function HeartScene() {
    return (
        <>
            <SceneComponents/>
            <ContactLink/>
        </>
    );
}
