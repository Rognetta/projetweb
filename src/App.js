import React, {Component} from 'react';
import './App.css';
import { SideMenu } from './Component/SideMenu/SideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    render() {
        return (
                    <div className="header">
                        <h1>Les problèmes environnementaux</h1>
                        <SideMenu/>
                    </div>
        );
    }
}

export default App;

