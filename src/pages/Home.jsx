import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import Loader from "../components/Loader.jsx";
import { Bird, FlyingCircus, Island, Sky } from "../constants/model_index.js";
import HomeInfo from "../components/HomeInfo.jsx";

const Home = () => {
    const birdPosition = [-4.3, 1.75, -0.5];
    const birdRotation = [0.002, 0.002, 0.002];

    // Adjusts the 3D island model's size according to the screen size
    const adjustIslandForScreenSize = () => {
        const islandPosition = [0, -5.7, -55];
        const islandRotation = [0.1, -1.40, 0];
        let islandScale;

        // If the screen width is less than 768 px, scale down the island
        if (globalThis.innerWidth < 768) {
            islandScale = [0.9, 0.9, 0.9];
        } else {
            islandScale = [1, 1, 1];
        }
        return [islandPosition, islandRotation, islandScale];
    };

    // Adjusts the 3D plane model's size according to the screen size
    const adjustPlaneForScreenSize = () => {
        const planePosition = [6, 12, -30];
        const planeRotation = [-5.7051, 2.6389, -0.1];
        let planeScale;

        // If the screen width is less than 768 px, scale down the plane
        if (globalThis.innerWidth < 768) {
            planeScale = [0.7, 0.7, 0.7];
        } else {
            planeScale = [0.9, 0.9, 0.9];
        }

        return [planePosition, planeRotation, planeScale];
    };

    // State variables to manage the current stage, rotation, and movement
    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);
    const [isIslandMoving, setIslandMoving] = useState(false);

    // Get the initial positions, rotations, and scales for the island and plane
    const [islandPosition, islandRotation, islandScale] =
        adjustIslandForScreenSize();
    const [planePosition, planeRotation, planeScale] =
        adjustPlaneForScreenSize();

    return (
        <section className="w-screen h-screen relative">
            {/* Display the HomeInfo component at the bottom center of the screen */}
            <div className="absolute bottom-14 left-0 right-0 z-10 flex items-center justify-center max-w-[85%] mx-auto">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <Suspense fallback={<Loader />}>
                <Canvas
                    className={`w-full h-screen bg-transparent ${
                        isRotating ? "cursor-grabbing" : "cursor-grab"
                    }`}
                    camera={{ fov: 60, near: 0.1, far: 1000 }}
                >
                    {/* Add lighting to the scene */}
                    <directionalLight position={[2, 2, 0]} intensity={2} />
                    <ambientLight intensity={0.7} />
                    <hemisphereLight
                        skyColor="#b1e1ff"
                        groundColor="#000000"
                    />
                    {/* Add the sky, island, plane, and bird models to the scene */}
                    <Sky
                        isRotating={isRotating}
                        isIslandMoving={isIslandMoving}
                    />

                    <Island
                        position={islandPosition}
                        rotation={islandRotation}
                        scale={islandScale}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        currentStage={currentStage}
                        setCurrentStage={setCurrentStage}
                        isIslandMoving={isIslandMoving}
                        setIslandMoving={setIslandMoving}
                    />
                    <FlyingCircus
                        position={planePosition}
                        rotation={planeRotation}
                        scale={planeScale}
                        isRotating={isRotating}
                        isIslandMoving={isIslandMoving}
                    />
                    <Bird
                        isIslandMoving={isIslandMoving}
                        isRotating={isRotating}
                        position={birdPosition}
                        scale={birdRotation}
                    />
                </Canvas>
            </Suspense>
        </section>
    );
};
export default Home;
