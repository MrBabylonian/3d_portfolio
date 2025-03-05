import { GUI } from "lil-gui";
import { useEffect } from "react";

export const SkyGUI = (callback) => {
    useEffect(() => {
        const gui = new GUI({ title: "Sky Controls" });
        // Get the GUI container element directly
        const guiElement = gui.domElement;
        // Position the GUI
        guiElement.style.position = "absolute";
        guiElement.style.left = "16px";
        guiElement.style.top = "76vh";
        guiElement.style.bottom = "16px";

        callback(gui);
        return () => gui.destroy();
    }, [callback]);
};
