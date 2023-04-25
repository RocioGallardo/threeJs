import camera from "../src/basic/Camera.js";
import light from "../src/basic/Light.js";
import loopMachine from "../src/basic/LoopMachine.js";
import renderer from "../src/basic/Renderer.js";
import resize from "../src/basic/Resize.js";
import scene from "../src/basic/Scene.js";
import cube from "../src/basic/shapes/Cube.js";
import plane from "../src/basic/shapes/Plane.js";


scene.add(cube)
scene.add(light)
scene.add(plane);

camera.position.set(2,2,2)

camera.lookAt(cube.position)


loopMachine.addCallback(() => {
    cube.rotation.y += .01
    renderer.render(scene, camera)
})

// setInterval(() =>{
//     cube.rotation.y += .01
//     renderer.render(scene, camera)
// }, 1000/60 )


resize.start(renderer)
loopMachine.start()

//renderer.render(scene, camera)

// console.log(scene, camera, renderer)