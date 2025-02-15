import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { About, Contact, Home, Projects } from "./pages/pages_index.js";

function App() {
    return (
        <main className={"bg-slate-300/20 w-screen h-screen"}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"about"} element={<About />} />
                    <Route path={"Projects"} element={<Projects />} />
                    <Route path={"Contact"} element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
