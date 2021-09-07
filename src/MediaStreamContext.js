import React, { useEffect } from "react";
import { Children } from "react";

const VIDEO_URL = "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4";

export const MediaStreamContext = React.createContext({});

export const DefaultProvider = ({ children }) => {
    const [value, setValue] = React.useState({});

    useEffect(() => { 
        const canvas = document.createElement('canvas');

        canvas.width =  document.body.clientWidth;; // TODO 
        canvas.height = document.body.clientHeight; // TODO
        
        const ctx = canvas.getContext("2d");


        function draw(d) {
            const x = Math.sin(d / 1000) * 360;
            ctx.fillStyle = `hsl(${x}, 100%, 50%)`;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            requestAnimationFrame(draw);
        }
        draw();

        //const stream = new MediaStream(); 
        const stream = canvas.captureStream(25);

       // document.body.appendChild(canvas)

        setValue({
            stream
        });

    }, []);

    return (
        <MediaStreamContext.Provider value={value}>
            { children }
        </MediaStreamContext.Provider>
    );
};

MediaStreamContext.DefaultProvider = DefaultProvider;