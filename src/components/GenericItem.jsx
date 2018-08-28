import React from 'react';

const GenericItem = ({ img, Tit, SubTit }) => {
    return (
        <div className="generic-item">
            <h1 className="generic-title">{Tit}</h1>
            <p className="generic-subtitle">{SubTit}</p>
        </div>
    );
}

export default GenericItem;