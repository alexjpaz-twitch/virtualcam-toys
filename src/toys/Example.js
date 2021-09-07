import React, { useEffect } from "react";

import { MediaStreamContext } from "../MediaStreamContext";

export default function Example() {

    const ctx = React.useContext(MediaStreamContext);
    const ref = React.useRef(null);

    useEffect(() => {
        if(!ctx || !ctx.stream) {
            return;
        }

        if(!ref) {
            return;
        }

        console.log(123, ref, ctx.stream)

        ref.current.srcObject = ctx.stream;


    }, [ ctx ]);


    return (
        <video playsInline autoPlay muted ref={ref}></video>
    );
}