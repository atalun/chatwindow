import React from 'react';


const LinkItem = ({urlItem, textItem}) => {
    return (
        <div className="link-item">
            <a href={urlItem} >{textItem}</a>
        </div>

    )
}
export default LinkItem;