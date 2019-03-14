import React, { Component } from 'react';
import randone from './Picture/randone.jpg';
import randtwo from './Picture/randtwo.jpg';
import randthree from './Picture/randthree.jpg';
import "./Contact.css";

const contacts = [{
    id: 1,
    name: 'Raphaël Séguin',
    age: 21,
    email: 'raphel.seguin@edu.ece.fr',
    picture: randone}, {
    id: 2,
    name: 'Aurelio Rognetta',
    age: 20,
    email: 'aurelio.rognetta@edu.ece.fr',
    picture: randtwo}, {
    id: 3,
    name: 'Jean-Kevin Bloups',
    age: 12,
    email: 'jkbloups@yahoo.com',
    picture: randthree}];



class Contact extends Component {

    render() {
        return (
            <div className="contact">
                <ul>
                    {contacts.map((contact) =>
                        <li key={contact.id}> {contact.name}
                            {contact.email}
                            <div></div>
                            <img src={contact.picture} width={100} height={100}/>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export {Contact};