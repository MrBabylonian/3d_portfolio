//Simple loading animation to show until the 3D scene loads up
const Loader = () => {
    return (
        <div
            className="flex justify-center items-center w-full h-screen relative"
        >
            <div
                className="w-20 h-20 border-2 border-opacity-20 border-t-blue-500 rounded-full animate-spin relative"
            >
            </div>
        </div>
    );
};
export default Loader;
