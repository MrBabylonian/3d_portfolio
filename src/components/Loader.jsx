//Simple loading animation to show until the 3D scene loads up
const Loader = ({ className }) => {
	return (
		<div
			className={`flex justify-center items-center relative ${className || "w-full h-screen"}`}
		>
			<div className="w-20 h-20 border-2 border-opacity-20 border-t-blue-500 rounded-full animate-spin relative"></div>
		</div>
	);
};
export default Loader;
