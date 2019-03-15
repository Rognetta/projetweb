import React from 'react';

export default ({ className }) => (
    <div className={`${className ? className: ''} example__instructions`}>
        Passez la souris dans le cadre blanc !
    </div>
);
