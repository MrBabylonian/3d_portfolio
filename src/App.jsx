import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { About, Contact, Home } from "./constants/pages_index.js";

function App() {
    return (
        <main className="min-h-[600px] min-w-[400px]">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="Contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
