import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/island-transformed.glb";
// import { IslandGUI } from "../ModelGUI/IslandGUI.jsx";

export function Island({
	isIslandMoving,
	setIslandMoving,
	isRotating,
	setIsRotating,
	setCurrentStage,
	...props
}) {
	const islandRef = useRef();

	// Provides access to the Three.js renderer and viewport
	const { gl, viewport } = useThree();
	const { nodes, materials } = useGLTF(islandScene);

	//#region --- rotation configurations for the island model

	const lastX = useRef(0); //Ref for the last horizontal mouse position
	const rotationSpeed = useRef(0); // Ref to store the rotation speed
	const dampingFactor = 0.99; // Damping factor for slowing down the island smoothly while it is not being rotated
	// Track the cumulative rotation in degrees
	const cumulativeRotation = useRef(0);

	// Handle pointer (mouse or touch) down event
	const handlePointerDown = (event) => {
		event.stopPropagation();
		event.preventDefault();

		// Resets both movement states of the island model to guarantee a fresh start
		setIsRotating(true);
		setIslandMoving(true);

		// The new starting position
		const clientX = event.touches ? event.touches[0].clientX : event.clientX;

		// Store the last clientX position for reference
		lastX.current = clientX;
		// lastRotation.current = islandRef.current.rotation.y;
	};

	// Handle pointer (mouse or touch) up event
	const handlePointerUp = (event) => {
		event.stopPropagation();
		event.preventDefault();
		setIsRotating(false);
	};

	// Handle pointer (mouse or touch) move event
	const handlePointerMove = (event) => {
		event.stopPropagation();
		event.preventDefault();
		if (isRotating && isIslandMoving) {
			// This calculates the change in the island's horizontal position when rotating
			const clientX = event.touches ? event.touches[0].clientX : event.clientX;

			// calculate the change in the horizontal position of the mouse cursor or touch input,
			// relative to the viewport's width
			const delta = (clientX - lastX.current) / viewport.width;

			// Update the island's rotation based on the mouse/touch movement
			islandRef.current.rotation.y += delta * 0.01 * Math.PI;

			// Update cumulative rotation in degrees
			cumulativeRotation.current += delta * 0.01 * (180 / Math.PI);

			// Update the rotation speed
			rotationSpeed.current = delta * 0.01 * Math.PI;

			// Update the reference for the last clientX position
			lastX.current = clientX;
		}
	};

	// Handle keydown events
	const handleKeyDown = (event) => {
		if (event.key === "ArrowLeft") {
			if (!isRotating) setIsRotating(true);

			islandRef.current.rotation.y -= 0.01 * Math.PI;
			// rotationSpeed.current = -0.005 * Math.PI; // Can be commented out for having slowing down effect also with key controls
		} else if (event.key === "ArrowRight") {
			if (!isRotating) setIsRotating(true);

			islandRef.current.rotation.y += 0.01 * Math.PI;

			// rotationSpeed.current = 0.005 * Math.PI; // Can be commented out for having slowing down effect also with key controls
		}
	};

	// Handle keyup events
	const handleKeyUp = (event) => {
		if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
			setIsRotating(false);
		}
	};

	useEffect(() => {
		const canvas = gl.domElement;

		// Mouse events
		canvas.addEventListener("pointerdown", handlePointerDown);
		canvas.addEventListener("pointerup", handlePointerUp);
		canvas.addEventListener("pointermove", handlePointerMove);

		// Touch events
		canvas.addEventListener("touchstart", handlePointerDown);
		canvas.addEventListener("touchend", handlePointerUp);
		canvas.addEventListener("touchmove", handlePointerMove);

		// Keyboard events
		globalThis.addEventListener("keydown", handleKeyDown);
		globalThis.addEventListener("keyup", handleKeyUp);
		return () => {
			// Remove mouse events
			canvas.removeEventListener("pointerdown", handlePointerDown);
			canvas.removeEventListener("pointerup", handlePointerUp);
			canvas.removeEventListener("pointermove", handlePointerMove);

			// Remove touch events
			canvas.removeEventListener("touchstart", handlePointerDown);
			canvas.removeEventListener("touchend", handlePointerUp);
			canvas.removeEventListener("touchmove", handlePointerMove);

			// Remove keyboard events
			globalThis.removeEventListener("keydown", handleKeyDown);
			globalThis.removeEventListener("keyup", handleKeyUp);
		};
	}, [
		gl,
		handlePointerDown,
		handlePointerUp,
		handlePointerMove,
		handleKeyDown,
		handleKeyUp,
	]);

	useFrame(() => {
		if (!isRotating) {
			//Slows down the island when it is not being rotated until it stops
			rotationSpeed.current *= dampingFactor;

			//When the island is finally too slow, this will make it stop
			if (Math.abs(rotationSpeed.current) < 0.0001) {
				rotationSpeed.current = 0;
				setIslandMoving(false);
			}

			islandRef.current.rotation.y += rotationSpeed.current;
		} else if (isRotating && !isIslandMoving) {
			// When rotating is true, ensure isIslandMoving is also true
			setIslandMoving(true);
		}

		// Determine the current stage based on cumulative rotation
		let stage = 1;

		const normalizedValue = Math.abs(
			Math.floor((cumulativeRotation.current % 360) / 40) + 1,
		);

		if (normalizedValue === 1 || normalizedValue === 2) stage = 1;
		else if (normalizedValue === 3 || normalizedValue === 4) stage = 2;
		else if (normalizedValue === 5 || normalizedValue === 6) stage = 3;
		else if (normalizedValue === 7 || normalizedValue === 8) stage = 4;

		setCurrentStage(stage);
	});

	//#endregion

	// GUI for island model to adjust position, rotation and scale
	/*   IslandGUI((gui) => {
    //Position controls
    const positionFolder = gui.addFolder("Position");
    positionFolder.add(islandRef.current.position, "x", -100, 100);
    positionFolder.add(islandRef.current.position, "y", -100, 100);
    positionFolder.add(islandRef.current.position, "z", -100, 100);

    //Rotation controls
    const rotationFolder = gui.addFolder("Rotation");
    rotationFolder.add(islandRef.current.rotation, "x", -360, 360, 1);
    rotationFolder.add(islandRef.current.rotation, "y", -360, 360, 1);
    rotationFolder.add(islandRef.current.rotation, "z", -360, 360, 1);
  }); */

	return (
		<a.group ref={islandRef} {...props} dispose={null}>
			<mesh
				castShadow={true}
				receiveShadow={true}
				geometry={nodes.pCube11_rocks1_0.geometry}
				material={materials.PaletteMaterial001}
			/>
			<mesh
				castShadow={true}
				receiveShadow={true}
				geometry={nodes.pCube27_phongE1_0.geometry}
				material={materials.PaletteMaterial002}
			/>
			<mesh
				castShadow={true}
				receiveShadow={true}
				geometry={nodes.pCylinder139_fox_readyfox_white_0.geometry}
				material={materials.PaletteMaterial003}
				position={[0.47, 0, 1.217]}
				rotation={[0, -1.198, 0]}
			/>
			<mesh
				castShadow={true}
				receiveShadow={true}
				geometry={nodes.polySurface1541_water_0.geometry}
				material={materials.PaletteMaterial004}
				position={[-10.297, 0, 5.622]}
				rotation={[0, -0.411, 0]}
			/>
		</a.group>
	);
}

useGLTF.preload(islandScene);
