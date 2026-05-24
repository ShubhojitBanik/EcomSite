import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

import FloatingButtons from "./components/FloatingButtons";

function App() {

    return (

        <HashRouter>

            <Navbar />

            <FloatingButtons />

            <Routes>

                <Route
                path="/"
                element={<Home />}
                />

                <Route
                path="/product/:id"
                element={<ProductPage />}
                />

                <Route
                path="/admin"
                element={<Admin />}
                />

                <Route
                path="/login"
                element={<Login />}
                />

            </Routes>

        </HashRouter>

    );

}

export default App;