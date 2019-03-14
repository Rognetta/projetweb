import React from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";
import "./ButtonRedux.css";

// The ButtonForm creates links that can be used to navigate between routes.
const ButtonForm = () => (
    <header>
        <div className="commonBackground">
            <h1>
                <BrowserRouter>
                    <Link to="/">Redux example</Link>
                </BrowserRouter>
            </h1>
        </div>
    </header>
)

export default ButtonForm;