import React from 'react';
import ImageItem from './ImageItem.jsx';
import LinkItem from './LinkItem.jsx';


export default class TemplateButton extends React.Component {

    render() {
        return (
            <div className="media-template-wraper">
                {this.props.images.map((image, i) =>
                    <ImageItem
                        key={i}
                        imageItem={image}
                    />)}
                {this.props.buttons.map((button, i) =>
                    <LinkItem
                        key={`${i}sdtemplate`}
                        urlItem={button.url}
                        textItem={button.text}
                    />
                )}
            </div>
        )
    }
}
