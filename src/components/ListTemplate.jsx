import React from 'react';
import BannerItem from './BannerItem.jsx';
import ListItem from './ListItem.jsx';
import LinkItem from './LinkItem.jsx';

export default class ListTemplate extends React.Component {
    render() {
        return (
            <div className="list-template-wraper">
                <BannerItem
                    backgroundImg={this.props.banners.backgroundImg}
                    Title={this.props.banners.Title}
                    SubTitle={this.props.banners.SubTitle}
                />

                {this.props.listItems.map((listItem, i) =>
                    <ListItem
                        key={`${i}listItemstemplate`}
                        urlHeadline={listItem.urlHeadline}
                        Headline={listItem.Headline}
                        Description={listItem.Description}
                        Logo={listItem.Logo}
                    />)}

                {this.props.buttons.map((button, i) =>
                    <LinkItem
                        key={`${i}buttonstemplate`}
                        urlItem={button.url}
                        textItem={button.text}
                    />
                )}
            </div>
        )
    }
}