import React, { useState } from "react";
import api from "./services/api";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        
        api.post('/sessions', { email }).then(res => {
          localStorage.setItem('user', res.data._id)
        })
    }

    return (
        <div className="container">
            <img src={logo} alt="AirCnC" />
            <div className="content">
                <p>
                    Ofereça <strong>spots</strong> para progamadores e encontre{" "}
                    <strong>talentos</strong> para sua empresa
                </p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">E-MAIL *</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Seu melhor e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <button type="submit" className="btn">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
