import React from 'react';

export default (props) => {
    const {
        elementDimensions: {
            width = 0,
            height = 0
        } = {},
        isActive = false,
        isOutside = true,
        point: {
            x = 0,
            y = 0
        } = {}
    } = props;

    return (
        <div>
            {`Position x: ${x}`}<br />
            {`Position y: ${y}`}<br />
            {`Souris à l'intérieur du cadre : ${isActive ? 'Oui' : 'Non'}`}<br />
            {`Largeur du cadre: ${width}`}<br />
            {`Longueur du cadre: ${height}`}<br />
            {`La souris est-elle à l'extérieur ? : ${isOutside ? 'Oui' : 'Non'}`}<br />
        </div>
    );
}