import { GUI } from "lil-gui";
import { useEffect } from "react";

export const PlaneGUI = (callback) => {
	useEffect(() => {
		const gui = new GUI({ title: "Plane Controls" });
		// Get the GUI container element directly
		const guiElement = gui.domElement;
		// Position the GUI
		guiElement.style.position = "absolute";
		guiElement.style.right = "500px";
		guiElement.style.top = "78vh";
		guiElement.style.bottom = "0";

		callback(gui);
		return () => gui.destroy();
	}, [callback]);
};
