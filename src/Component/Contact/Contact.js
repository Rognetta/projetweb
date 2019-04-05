import React, { Component } from 'react';
import randone from './Picture/randone.jpg';
import randtwo from './Picture/randtwo.jpg';
import randthree from './Picture/randthree.jpg';
import "./Contact.css";
import axios from "axios";

let contacts = [{
    id: 1,
    name: 'Raphaël Séguin ',
    age: 21,
    email: 'raphael.seguin@edu.ece.fr',
    artist: 'Plop',
    picture: randone}, {
    id: 2,
    name: 'Aurelio Rognetta ',
    age: 20,
    email: 'aurelio.rognetta@edu.ece.fr ',
    artist: 'Plip',
    picture: randtwo}, {
    id: 3,
    name: 'Jean-Kevin Bloups ',
    age: 12,
    email: ' jkbloups@yahoo.com ',
    artist: 'Plap',
    picture: randthree}];


class Contact extends Component {

    state = {
        artists: []
    }

    componentDidMount() {
        axios.get("http://localhost:3000/artist")
            .then(({data}) => {
                let i;

                for(i = 0; i < 3; i++)
                {
                    let rand = Math.trunc(Math.random() * data.length);
                    //this.setState({artists[0] : data[rand].nom});
                    contacts[i].artist = data[rand].nom;
                }
            })
    }

    render() {
        return (
            <div className="contact">
                <p>Contact</p>
                <ul>
                    {contacts.map((contact) =>
                        <li key={contact.id}> Nom : {contact.name}
                            <br/>E-mail : {contact.email}
                            <br/>Artiste préféré : {contact.artist}
                            <div></div>
                            <img src={contact.picture} width={100} height={100} style={{marginLeft: "35%",
                                border: "solid black 1px", marginTop: "1%", borderBottomRightRadius: "15px",
                                borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px",
                                borderTopRightRadius: "15px"}}/>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export {Contact};