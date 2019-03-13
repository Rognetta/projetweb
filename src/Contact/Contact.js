import React, { Component } from 'react';

const contacts = [{
    id: 1,
    name: 'Raphaël Séguin',
    age: 21,
    email: 'raphel.seguin@edu.ece.fr',
    picture: './Component/Picture/randone.jpg'}, {
    id: 2,
    name: 'Aurelio Rognetta',
    age: 20,
    email: 'aurelio.rognetta@edu.ece.fr',
    picture: './Component/Picture/randtwo.jpg'}, {
    id: 3,
    name: 'Jean-Kevin Bloups',
    age: 12,
    email: 'jkbloups@yahoo.com',
    picture: './Component/Picture/randthree.jpg'}];



class Contact extends Component {
    
    render() {
        return ("Hello world ! Life is shit");
    }
}

export {Contact};
