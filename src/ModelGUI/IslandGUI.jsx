import { GUI } from "lil-gui";
import { useEffect } from "react";

export const IslandGUI = (callback) => {
    useEffect(() => {
        const gui = new GUI({ title: "Island Controls" });
        // Get the GUI container element directly
        const guiElement = gui.domElement;

        // Position the GUI on the right side
        guiElement.style.position = "absolute";
        guiElement.style.right = "16px"; // Add some padding from the right edge
        guiElement.style.top = "78vh";
        guiElement.style.bottom = "0"; // Add some padding from the top
        
        callback(gui);
        return () => gui.destroy();
    }, [callback]);
};
