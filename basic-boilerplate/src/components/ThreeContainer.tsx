import React, {useRef, useEffect, MutableRefObject} from 'react';
import initWorld, {World} from "../three/init";

interface ThreeReactContainerProps {}

const ThreeReactContainer : React.FC<ThreeReactContainerProps> = () => {

    const ref : MutableRefObject<any> = useRef(null);
    const canvasRef : MutableRefObject<any> = useRef(null);
      
    useEffect(() => {

        let canvas : HTMLCanvasElement = canvasRef.current;
        let world : World = initWorld(canvas);


        function updateSize() {
            let width : number = canvas.clientWidth;
            let height : number = canvas.clientHeight;

            world.camera.aspect = window.innerWidth / window.innerHeight;
            world.camera.updateProjectionMatrix();

            let DPR;
            if (canvas.width * canvas.height > 2073600) {
                DPR = 2073600 / (canvas.width * canvas.height);
            } else {
                DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
            }

            world.renderer.setPixelRatio(DPR);
            world.renderer.setSize( window.innerWidth, window.innerHeight );
        }

        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
      
    }, []);

    // useEffect(() => {

    //     function updateSize() {
    //         let width : number = canvasRef.current.clientWidth;
    //         let height : number = canvasRef.current.clientHeight;

    //         scene.updateSize(width, height);
    //     }
      
    //     window.addEventListener('resize', updateSize);
    //     updateSize();

    //     return () => window.removeEventListener('resize', updateSize);
      
    // }, []);

    return(
        <div ref={ref} id="canvas-container">
            <canvas id="three-canvas" ref={canvasRef} />
        </div>
    );

};

export default ThreeReactContainer;