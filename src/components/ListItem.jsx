import React from 'react';

const ListItem = ({urlHeadline,Headline,Description,Logo }) => {
    return (
        <div className="list-item">
            <a className="list-title" href={urlHeadline}>{Headline}</a>
            <p className="list-description">{Description}</p>
            <img className="list-img" src={Logo} />
        </div>

    )
}
export default ListItem;