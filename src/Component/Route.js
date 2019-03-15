import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {BrowserRouter} from "react-router-dom";
import AlbumForm from './Form/Albumform'
import ArtistForm from './Form/ArtistForm'
import TrackForm from './Form/TrackForm'

const RouteTest = () => (
    <BrowserRouter>
        <div>
            <Route exact path='/artist' component={ArtistForm}/>
            <Route exact path='/album' component={AlbumForm}/>
            <Route exact path='/track' component={TrackForm}/>
        </div>
    </BrowserRouter>
);

export default RouteTest;
