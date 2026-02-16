import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import yellowAirplaneModel from "../assets/3d/flying_circus.glb";
// import { PlaneGUI } from "../ModelGUI/PlaneGUI.jsx";
import { useFrame } from "@react-three/fiber";

export function FlyingCircus({ isIslandMoving, isRotating, ...props }) {
	const flyingCircusRef = useRef();
	const { nodes, materials, animations } = useGLTF(yellowAirplaneModel);
	const { actions, mixer } = useAnimations(animations, flyingCircusRef);

	useEffect(() => {
		const animation = actions?.["Dynamic pose"];

		if (animation) {
			//Animation behaviour
			animation.repetitions = Infinity;
			animation.clampWhenFinished = false;
			if (isRotating) {
				if (animation.paused) animation.paused = false;
				animation.timeScale = 1;
				animation.play();
			}
		}
	}, [actions, isRotating]);

	useFrame((_, delta) => {
		if (mixer) {
			if (!isRotating && actions?.["Dynamic pose"]?.isRunning()) {
				actions["Dynamic pose"].timeScale *= 0.99;

				//When the propeller finally slows down too much, this stops it
				if (actions["Dynamic pose"].timeScale < 0.001 || !isIslandMoving) {
					actions["Dynamic pose"].paused = true;
					actions["Dynamic pose"].timeScale = 0;
				} else if (isRotating && actions?.["Dynamic pose"]?.paused) {
					//When rotating starts again, unpause and reset timescale
					actions["Dynamic pose"].paused = false;
					actions["Dynamic pose"].timeScale = 1;
				}
			}
			mixer.update(delta);
		}
	});

	// PlaneGUI((gui) => {

	//   //Position controls
	//   const positionFolder = gui.addFolder("Position");
	//   positionFolder.add(flyingCircusRef.current.position, "x", -100, 100);
	//   positionFolder.add(flyingCircusRef.current.position, "y", -100, 100);
	//   positionFolder.add(flyingCircusRef.current.position, "z", -100, 100);

	//   //Rotation controls
	//   const rotationFolder = gui.addFolder("Rotation");
	//   rotationFolder.add(flyingCircusRef.current.rotation, "x", -Math.PI * 2, Math.PI * 2);
	//   rotationFolder.add(flyingCircusRef.current.rotation, "y", -Math.PI * 2, Math.PI * 2);
	//   rotationFolder.add(flyingCircusRef.current.rotation, "z", -Math.PI * 2, Math.PI * 2);

	//   const scaleFolder = gui.addFolder("Scale");
	//   scaleFolder.add(flyingCircusRef.current.scale, "x", -10, 500, 0.1).name("uniform scale");
	// });

	return (
		<group ref={flyingCircusRef} {...props} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
					<group
						name="941b2da95bd54e61b701f8902ef2ed20fbx"
						rotation={[Math.PI / 2, 0, 0]}
						scale={0.01}
					>
						<group name="Object_2">
							<group name="RootNode">
								<group
									name="plane_body"
									position={[-318.813, 331.087, -1.721]}
									rotation={[-Math.PI / 2, 0, 0]}
									scale={100}
								>
									<mesh
										name="plane_body_M_plane_0"
										castShadow
										receiveShadow
										geometry={nodes.plane_body_M_plane_0.geometry}
										material={materials.M_plane}
									/>
									<group
										name="outline"
										position={[3.188, -0.017, -0.714]}
										rotation={[0, 1.571, 0]}
									>
										<mesh
											name="outline_M_outline_0"
											castShadow
											receiveShadow
											geometry={nodes.outline_M_outline_0.geometry}
											material={materials.M_outline}
										/>
									</group>
									<group name="aileron_left" position={[4.632, -3.457, -1.167]}>
										<mesh
											name="aileron_left_M_plane_0"
											castShadow
											receiveShadow
											geometry={nodes.aileron_left_M_plane_0.geometry}
											material={materials.M_plane}
										/>
										<group
											name="outline001"
											position={[-1.444, 3.44, 0.453]}
											rotation={[0, 1.571, 0]}
										>
											<mesh
												name="outline001_M_outline_0"
												castShadow
												receiveShadow
												geometry={nodes.outline001_M_outline_0.geometry}
												material={materials.M_outline}
											/>
										</group>
									</group>
									<group name="aileron_right" position={[4.39, 3.103, -1.195]}>
										<mesh
											name="aileron_right_M_plane_0"
											castShadow
											receiveShadow
											geometry={nodes.aileron_right_M_plane_0.geometry}
											material={materials.M_plane}
										/>
										<group
											name="outline002"
											position={[-1.201, -3.121, 0.481]}
											rotation={[0, 1.571, 0]}
										>
											<mesh
												name="outline002_M_outline_0"
												castShadow
												receiveShadow
												geometry={nodes.outline002_M_outline_0.geometry}
												material={materials.M_outline}
											/>
										</group>
									</group>
									<group
										name="Armature"
										position={[8.423, -0.033, -0.113]}
										rotation={[0, 1.571, 0]}
									>
										<group name="Object_17">
											<primitive object={nodes._rootJoint} />
										</group>
									</group>
									<group
										name="Armature001"
										position={[8.435, -0.035, 1.451]}
										rotation={[0, 0, 0.036]}
									>
										<group name="Object_28">
											<primitive object={nodes._rootJoint_1} />
										</group>
									</group>
									<group
										name="Armature003"
										position={[1.985, 0.988, -0.515]}
										rotation={[-2.128, 0.387, -0.026]}
									>
										<group name="Object_37">
											<primitive object={nodes._rootJoint_2} />
										</group>
									</group>
									<group
										name="Armature004"
										position={[1.985, 0.76, -0.848]}
										rotation={[-2.256, 0.387, 0.022]}
									>
										<group name="Object_46">
											<primitive object={nodes._rootJoint_3} />
										</group>
									</group>
									<group
										name="Armature002"
										position={[1.985, -0.984, -0.515]}
										rotation={[-1.014, -0.387, 3.115]}
										scale={-1}
									>
										<group name="Object_55">
											<primitive object={nodes._rootJoint_4} />
										</group>
									</group>
									<group
										name="Armature005"
										position={[1.985, -0.834, -0.848]}
										rotation={[-0.882, -0.387, -3.118]}
										scale={-1}
									>
										<group name="Object_64">
											<primitive object={nodes._rootJoint_5} />
										</group>
									</group>
									<group
										name="Armature006"
										position={[3.762, -4.705, -0.751]}
										rotation={[0, -0.08, 0]}
									>
										<group name="Object_73">
											<primitive object={nodes._rootJoint_6} />
										</group>
									</group>
									<group
										name="smoke"
										position={[2.672, -1.534, -0.855]}
										scale={0}
									>
										<mesh
											name="smoke_M_vfx_0"
											castShadow
											receiveShadow
											geometry={nodes.smoke_M_vfx_0.geometry}
											material={materials.M_vfx}
										/>
									</group>
									<group
										name="smoke001"
										position={[2.672, -1.534, -0.855]}
										scale={0}
									>
										<mesh
											name="smoke001_M_vfx_0"
											castShadow
											receiveShadow
											geometry={nodes.smoke001_M_vfx_0.geometry}
											material={materials.M_vfx}
										/>
									</group>
									<group
										name="smoke002"
										position={[2.828, -1.522, -0.4]}
										rotation={[0.837, 0.145, -1.506]}
										scale={0.948}
									>
										<mesh
											name="smoke002_M_vfx_0"
											castShadow
											receiveShadow
											geometry={nodes.smoke002_M_vfx_0.geometry}
											material={materials.M_vfx}
										/>
									</group>
									<group
										name="smoke003"
										position={[7.577, -1.534, -0.74]}
										rotation={[0.722, 0.18, -1.938]}
										scale={1.283}
									>
										<mesh
											name="smoke003_M_vfx_0"
											castShadow
											receiveShadow
											geometry={nodes.smoke003_M_vfx_0.geometry}
											material={materials.M_vfx}
										/>
									</group>
									<group
										name="smoke004"
										position={[6.893, -1.534, -0.669]}
										rotation={[0.604, -0.261, 1.625]}
										scale={0.384}
									>
										<mesh
											name="smoke004_M_vfx_0"
											castShadow
											receiveShadow
											geometry={nodes.smoke004_M_vfx_0.geometry}
											material={materials.M_vfx}
										/>
									</group>
									<group
										name="smoke005"
										position={[7.838, -1.534, -0.847]}
										rotation={[0.883, -0.438, 1.291]}
										scale={0.016}
									>
										<mesh
											name="smoke005_M_vfx_0"
											castShadow
											receiveShadow
											geometry={nodes.smoke005_M_vfx_0.geometry}
											material={materials.M_vfx}
										/>
									</group>
									<group
										name="smoke006"
										position={[7.577, 1.286, -0.74]}
										rotation={[-0.723, -0.175, 1.197]}
										scale={1.283}
									>
										<mesh
											name="smoke006_M_vfx_0"
											castShadow
											receiveShadow
											geometry={nodes.smoke006_M_vfx_0.geometry}
											material={materials.M_vfx}
										/>
									</group>
									<group
										name="smoke007"
										position={[2.672, 1.286, -0.855]}
										scale={0}
									>
										<mesh
											name="smoke007_M_vfx_0"
											castShadow
											receiveShadow
											geometry={nodes.smoke007_M_vfx_0.geometry}
											material={materials.M_vfx}
										/>
									</group>
									<group
										name="smoke008"
										position={[2.672, 1.286, -0.855]}
										scale={0}
									>
										<mesh
											name="smoke008_M_vfx_0"
											castShadow
											receiveShadow
											geometry={nodes.smoke008_M_vfx_0.geometry}
											material={materials.M_vfx}
										/>
									</group>
									<group
										name="smoke009"
										position={[2.828, 1.298, -0.4]}
										rotation={[-0.837, -0.145, 1.636]}
										scale={0.948}
									>
										<mesh
											name="smoke009_M_vfx_0"
											castShadow
											receiveShadow
											geometry={nodes.smoke009_M_vfx_0.geometry}
											material={materials.M_vfx}
										/>
									</group>
									<group
										name="smoke010"
										position={[6.893, 1.286, -0.669]}
										rotation={[-0.604, 0.261, -1.517]}
										scale={0.384}
									>
										<mesh
											name="smoke010_M_vfx_0"
											castShadow
											receiveShadow
											geometry={nodes.smoke010_M_vfx_0.geometry}
											material={materials.M_vfx}
										/>
									</group>
									<group
										name="smoke011"
										position={[7.838, 1.286, -0.847]}
										rotation={[-0.883, 0.438, -1.85]}
										scale={0.016}
									>
										<mesh
											name="smoke011_M_vfx_0"
											castShadow
											receiveShadow
											geometry={nodes.smoke011_M_vfx_0.geometry}
											material={materials.M_vfx}
										/>
									</group>
								</group>
								<group
									name="propeller"
									position={[-318.813, 331.087, -1.721]}
									rotation={[-Math.PI / 2, 0, 0]}
									scale={100}
								>
									<mesh
										name="propeller_M_plane_0"
										castShadow
										receiveShadow
										geometry={nodes.propeller_M_plane_0.geometry}
										material={materials.M_plane}
									/>
									<group
										name="fx"
										position={[0.096, -0.007, 0.002]}
										rotation={[0, Math.PI / 2, 0]}
										scale={2.27}
									>
										<mesh
											name="fx_M_vfx_0"
											castShadow
											receiveShadow
											geometry={nodes.fx_M_vfx_0.geometry}
											material={materials.M_vfx}
										/>
									</group>
									<group
										name="outline005"
										position={[3.188, -0.017, -0.714]}
										rotation={[0, 1.571, 0]}
									>
										<mesh
											name="outline005_M_outline_0"
											castShadow
											receiveShadow
											geometry={nodes.outline005_M_outline_0.geometry}
											material={materials.M_outline}
										/>
									</group>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload(yellowAirplaneModel);
