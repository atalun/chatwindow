import React from 'react';

const BannerItem = ({backgroundImg,Title,SubTitle }) => {
    return (
        <div className="banner-item" style={{backgroundImage: `url(${backgroundImg})`}}>
            <h1 >{Title}</h1>
            <p>{SubTitle}</p>
            </div>
      
    )
}
export default BannerItem;
