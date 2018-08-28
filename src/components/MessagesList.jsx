import React from 'react';
export default class MessageList extends React.Component {

    componentWillUpdate() {
        this.props.botTalk()
    }


    render() {
        let messages = this.props.CONVERSATION
        return (
            < ul className="message-list" >
                {
                    messages.map((message, index) => {
                        return (
                            <li key={message.id} className="message">
                                <div>{message.text}</div>
                            </li>
                        )
                    })
                }
            </ul >
        )
    }
}




