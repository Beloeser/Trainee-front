import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from "./Pages/Cadastro/Cadastro";
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </Router>
    );
}

export default App;