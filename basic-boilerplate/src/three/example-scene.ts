import * as THREE from "three";

function createExampleScene(scene : THREE.Scene) {

    // ADD FLOOR

    var geometry = new THREE.PlaneBufferGeometry( 4, 4 );
    var material = new THREE.MeshStandardMaterial( {
        color: 0xeeeeee,
        roughness: 1.0,
        metalness: 0.0
    } );
    var floor = new THREE.Mesh( geometry, material );
    floor.rotation.x = - Math.PI / 2;
    floor.receiveShadow = true;
    scene.add( floor );

    // ADD RANDOM CUBE

    var geo = new THREE.BoxGeometry();
    var mat = new THREE.MeshStandardMaterial( {
        color: Math.random() * 0xffffff,
        roughness: 0.7,
        metalness: 0.0
    } );
    var cube = new THREE.Mesh( geo, mat );
    cube.castShadow = true;
    cube.receiveShadow = true;

    cube.position.z = 1;
    cube.position.y = 1;
    scene.add( cube );

    // ADD LIGHTS

    scene.add( new THREE.HemisphereLight( 0x808080, 0x606060 ) );

    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 6, 0 );
    light.castShadow = true;
    light.shadow.camera.top = 2;
    light.shadow.camera.bottom = - 2;
    light.shadow.camera.right = 2;
    light.shadow.camera.left = - 2;
    light.shadow.mapSize.set( 4096, 4096 );
    scene.add( light );

}

export default createExampleScene;