import React from 'react';
import QuestionItem from './QuestionItem.jsx'
import LinkItem from './LinkItem.jsx'


export default class ButtonTemplate extends React.Component {
    render() {
        return (
            <div className="button-template-wraper">

                <QuestionItem
                    questionItem={this.props.questions}
                />

                {this.props.buttons.map((button, i) =>
                    <LinkItem
                        key={`${i}template`}
                        urlItem={button.url}
                        textItem={button.text}
                    />)}
            </div>
        )
    }
}