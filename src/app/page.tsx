import React, {Suspense} from "react";
import {SceneComponents} from "@/app/components/client/HeartScene";
import Link from "next/link";
import {ContactLink} from "@/app/components/ContactLink";
import Loading from "@/app/loading";



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
