import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import birdModel from "../assets/3d/phoenix_bird.glb";
// import { BirdGUI } from "../ModelGUI/BirdGUI.jsx";

export function Bird({ isIslandMoving, isRotating, ...props }) {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdModel);
    const { actions, mixer } = useAnimations(animations, birdRef);
    const rotationSpeed = useRef(Math.PI * 0.01);
    const dampingFactor = 0.99;

    useEffect(() => {
        const animation = actions?.["Take 001"];

        if (animation) {
            animation.repetitions = Infinity;
            animation.clampWhenFinished = false;
            if (isRotating) {
                if (animation.paused) animation.paused = false;
                animation.timeScale = 1;
                animation.play();
            }
        }
    }, [isRotating]);

    useFrame((state, delta) => {
        const { clock, camera } = state;

        // Movement logic
        if (isRotating) {
            //Update the Y position to simulate bird flight using a sine vawe
            birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

            //Check if the bird reached a certain endpoint relative to the camera
            if (birdRef.current.position.x > camera.position.x + 10) {
                //Rotate the bird backwards 180 degrees on the y-axis
                birdRef.current.rotation.y = Math.PI;
            } else if (birdRef.current.position.x < camera.position.x - 10) {
                // Change the bird's direction forward and reset the bird's rotation
                birdRef.current.rotation.y = 0;
            }

            //Update the X and Z positions based on the direction

            if (birdRef.current.rotation.y === 0) {
                //Moving forwards
                birdRef.current.position.x += 0.01;
                //Getting far from the camera as going forwards
                birdRef.current.position.z -= 0.01;
            } else {
                //Moving backwards
                birdRef.current.position.x -= 0.01;
                //Getting closer to the camera as going backwards
                birdRef.current.position.z += 0.01;
            }
        } else {
            rotationSpeed.current *= dampingFactor;
            if (
                Math.abs(rotationSpeed.current < 0.001) || !isIslandMoving
            ) rotationSpeed.current = 0;
        }

        // Animation logic
        if (mixer) {
            if (!isRotating && actions?.["Take 001"]?.isRunning()) {
                actions["Take 001"].timeScale *= 0.99;

                //When the bird finally slows down too much this stops it
                if (actions["Take 001"].timeScale < 0.001 || !isIslandMoving) {
                    actions["Take 001"].paused = true;
                    actions["Take 001"].timeScale = 0;
                } else if (isRotating && actions?.["Dynamic pose"]?.paused) {
                    //When rotating starts again, unpause and reset time scale
                    actions["Take 001"].paused = false;
                    actions["Take 001"].timeScale = 1;
                }
            }
            mixer.update(delta);
        }
    });

    // BirdGUI((gui) => {
    //     //Position controls
    //     const positionFolder = gui.addFolder("Position");
    //     positionFolder.add(birdRef.current.position, "y", -100, 100);
    //     positionFolder.add(birdRef.current.position, "x", -100, 100);
    //     positionFolder.add(birdRef.current.position, "z", -100, 100);

    //     //Rotation controls
    //     const rotationFolder = gui.addFolder("Rotation");
    //     rotationFolder.add(
    //         birdRef.current.rotation,
    //         "x",
    //         -Math.PI * 2,
    //         Math.PI * 2,
    //     );
    //     rotationFolder.add(
    //         birdRef.current.rotation,
    //         "y",
    //         -Math.PI * 2,
    //         Math.PI * 2,
    //     );
    //     rotationFolder.add(
    //         birdRef.current.rotation,
    //         "z",
    //         -Math.PI * 2,
    //         Math.PI * 2,
    //     );
    // });

    return (
        <mesh ref={birdRef} {...props} dispose={null}>
            <primitive
                object={scene}
            />
        </mesh>
    );
}

useGLTF.preload(birdModel);
