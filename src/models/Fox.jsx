import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import foxModel from "../assets/3d/fox.glb";

export function Fox({ currentAnimation, ...props }) {
    // Create a reference to the fox group
    const foxRef = useRef();

    // Load the GLTF model and extract nodes, materials, and animations
    const { nodes, materials, animations } = useGLTF(foxModel);

    // Use the useAnimations hook to get actions and mixer for the animations
    const { actions, _mixer } = useAnimations(animations, foxRef);

    // useEffect hook to handle animation changes based on currentAnimation
    useEffect(() => {
        // Stop all current actions
        Object.values(actions).forEach((action) => action.stop());

        // Play the action corresponding to the currentAnimation
        if (actions[currentAnimation]) {
            actions[currentAnimation].play();
        }
    }, [actions, currentAnimation]);

    // Return the JSX structure for the Fox component
    return (
        // Group to hold the fox model, with a reference to foxRef and other props
        <group ref={foxRef} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group
                            name="GLTF_SceneRootNode"
                            rotation={[Math.PI / 2, 0, 0]}
                        >
                            <group name="Armature002_27">
                                <group name="GLTF_created_0">
                                    <primitive
                                        object={nodes.GLTF_created_0_rootJoint}
                                    />
                                    <skinnedMesh
                                        name="Object_7"
                                        geometry={nodes.Object_7.geometry}
                                        material={materials["Material.012"]}
                                        skeleton={nodes.Object_7.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_8"
                                        geometry={nodes.Object_8.geometry}
                                        material={materials["Material.013"]}
                                        skeleton={nodes.Object_8.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_9"
                                        geometry={nodes.Object_9.geometry}
                                        material={materials["Material.014"]}
                                        skeleton={nodes.Object_9.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_10"
                                        geometry={nodes.Object_10.geometry}
                                        material={materials["Material.016"]}
                                        skeleton={nodes.Object_10.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_11"
                                        geometry={nodes.Object_11.geometry}
                                        material={materials["Material.017"]}
                                        skeleton={nodes.Object_11.skeleton}
                                    />
                                    <group name="Cube002_26" />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

// Preload the fox GLTF model to improve performance
useGLTF.preload(foxModel);
