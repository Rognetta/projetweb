import React, {Component} from 'react';
import './App.css';
import {SideMenu} from './Component/SideMenu/SideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Component/Home";
import ArtistForm from "./Component/Form/ArtistForm";
import AlbumForm from "./Component/Form/Albumform";
import TrackForm from "./Component/Form/TrackForm";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <div className="header">
                        <h1>Les problèmes environnementaux</h1>
                        <SideMenu/>
                    </div>
                    <Route exact path='/' component={Home} />
                    <Route path='/artist' component={ArtistForm} />
                    <Route path='/album' component={AlbumForm} />
                    <Route path='/track' component={TrackForm} />
                </div>
            </Router>
        );
    }

}

export default App;

