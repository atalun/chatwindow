import React from 'react';
import LinkItem from './LinkItem.jsx'
import GenericItem from './GenericItem.jsx'
import ImageItem from './ImageItem.jsx'

export default class GenericTemplate extends React.Component {
    render() {
        return (
            <div className="generic-template-wraper">
                
                {this.props.images.map((image, i) =>
                    <ImageItem
                        key={i}
                        imageItem={image}
                    />)}

                <GenericItem
                    img={this.props.generics.img}
                    Tit={this.props.generics.Tit}
                    SubTit={this.props.generics.SubTit}
                />

                {this.props.buttons.map((button, i) =>
                    <LinkItem
                        key={`${i}generic-template`}
                        urlItem={button.url}
                        textItem={button.text}
                    />
                )}
            </div>
        )
    }
}