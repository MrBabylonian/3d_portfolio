import {GUI} from "lil-gui";
import {useEffect} from "react";

export const BirdGUI = (callback) => {
    useEffect(() => {
        const gui = new GUI({title: "Bird Controls"});
        // Get the GUI container element directly
        const guiElement = gui.domElement;
        // Position the GUI
        guiElement.style.position = "absolute";
        guiElement.style.left = "60px";
        guiElement.style.top = "78vh";
        guiElement.style.bottom = "0";

        callback(gui);
        return () => gui.destroy();
    }, [callback]);
};
