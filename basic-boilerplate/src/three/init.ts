import * as THREE from "three";

import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import updateWorld from "./update";
import createExampleScene from "./example-scene";

export interface World {
    camera: THREE.PerspectiveCamera;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
}

function initWorld(canvas : HTMLCanvasElement) : World {
    console.log("init");
    

    let renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
    renderer.xr.enabled = true;
    renderer.setAnimationLoop( function () {

        updateWorld();
        renderer.render( scene, camera );
    
    } );
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(canvas.width, canvas.height);
    renderer.autoClear = true;
    
    document.body.appendChild( VRButton.createButton( renderer ) );

    let scene = new THREE.Scene;
    let camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 10 );
    camera.position.set( 0, 1.6, 3 );
    scene.add(camera);

    // ADD CONTROLLERS

    let controller1 = renderer.xr.getController( 0 );
    controller1.addEventListener( 'selectstart', onSelectStart );
    controller1.addEventListener( 'selectend', onSelectEnd );
    scene.add( controller1 );

    let controller2 = renderer.xr.getController( 1 );
    controller2.addEventListener( 'selectstart', onSelectStart );
    controller2.addEventListener( 'selectend', onSelectEnd );
    scene.add( controller2 );

    var controllerModelFactory = new XRControllerModelFactory();

    let controllerGrip1 = renderer.xr.getControllerGrip( 0 );
    controllerGrip1.add( controllerModelFactory.createControllerModel( controllerGrip1 ) );
    console.log("yoyo", controllerGrip1);
    scene.add( controllerGrip1 );

    let controllerGrip2 = renderer.xr.getControllerGrip( 1 );
    controllerGrip2.add( controllerModelFactory.createControllerModel( controllerGrip2 ) );
    scene.add( controllerGrip2 );


    createExampleScene(scene);
    camera.position.z = 5;

    return {
        scene,
        camera,
        renderer
    };
}

function onSelectStart( evt : any ) {

    // var controller = event.target;

    // var intersections = getIntersections( controller );

    // if ( intersections.length > 0 ) {

    //     var intersection = intersections[ 0 ];

    //     var object = intersection.object;
    //     object.material.emissive.b = 1;
    //     controller.attach( object );

    //     controller.userData.selected = object;

    // }

}

function onSelectEnd( evt : any ) {

    // var controller = event.target;

    // if ( controller.userData.selected !== undefined ) {

    //     var object = controller.userData.selected;
    //     object.material.emissive.b = 0;
    //     group.attach( object );

    //     controller.userData.selected = undefined;

    // }

}

export default initWorld;
