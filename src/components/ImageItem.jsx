import React from 'react';

const ImageItem = ({imageItem}) => {
    return (
        <div className="image-item">
           <img className="img" src={imageItem}/>
        </div>
    );
}

export default ImageItem;