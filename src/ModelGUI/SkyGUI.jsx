import { GUI } from "lil-gui";
import { useEffect } from "react";

export const SkyGUI = (callback) => {
    useEffect(() => {
        const gui = new GUI({ title: "Sky Controls" });
        // Get the GUI container element directly
        const guiElement = gui.domElement;
        
        // Position the GUI on the right side
        guiElement.style.position = "absolute";
        guiElement.style.left = "16px"; // Add some padding from the right edge
        guiElement.style.top = "76vh";
        guiElement.style.bottom = "16px"; // Add some padding from the top
        callback(gui);
        return () => gui.destroy();
    }, [callback]);
};
