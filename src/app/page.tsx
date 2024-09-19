import React, {Suspense} from "react";
import {SceneComponents} from "@/app/components/client/HeartScene";
import {ContactLink} from "@/app/components/ContactLink";




export default function HeartScene() {
    return (
        <>
            <SceneComponents/>
            <ContactLink/>
        </>
    );
}
