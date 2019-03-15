import React from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";

// The ButtonForm creates links that can be used to navigate between routes.
const ButtonForm = () => (
    <header>
        <BrowserRouter>
        <div className="commonBackground">
            <h1>
                <Link to="/artist">Artist Form</Link>
                <Link to="/album">Album Form</Link>
                <Link to="/track">Track Form</Link>
            </h1>
        </div>
        </BrowserRouter>
    </header>
)

export default ButtonForm;