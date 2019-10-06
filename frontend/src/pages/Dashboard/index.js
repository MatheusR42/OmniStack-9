import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import api from "../../services/api";

import './styles.css';

export default function Dashboard() {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        const user_id = localStorage.getItem("user");

        api.get("/dashboard", {
            headers: { user_id }
        }).then(res => {
            setSpots(res.data);
        });
    }, []);

    return (
        <>
            <ul className="spot-list">
                {spots.map(({_id, company, price, thumbnail_url}) => {
                    return (
                        <li key={_id}>
                            <header
                                style={{
                                    backgroundImage: `url(${api.defaults.baseURL + thumbnail_url})`
                                }}
                            />
                            <strong>{company}</strong>
                            <span>{price ? `R$ ${price}/dia` : 'GRATUITO'}</span>
                        </li>
                    )
                })}
            </ul>

            <Link to="new">
                <button className="btn">
                    Cadastrar novo Spot    
                </button> 
            </Link>
        </>
    );
}
