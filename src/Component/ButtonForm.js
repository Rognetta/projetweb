import React from 'react';
import { Link } from 'react-router-dom';

// The ButtonForm creates links that can be used to navigate between routes.
const ButtonForm = () => (
    <header>
        <div>
            <h1>
                <Link to="/artist">Artist Form</Link>
                <Link to="/album">Album Form</Link>
                <Link to="/track">Track Form</Link>
            </h1>
        </div>
    </header>
)

export default ButtonForm;