import React from 'react';
import ReplyItem from './ReplyItem.jsx';
import QuestionItem from './QuestionItem.jsx'

export default class QuickReplies extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            replies: ['Small', 'Medium', 'Large']
        }
    }



    render() {
        return (
            <div className="quick-replie-wraper">
                <div className="questions-section">
                    {this.props.questions.map((question, i) =>
                        <QuestionItem
                            key={i}
                            questionItem={question}
                        />)}
                </div>
                <div className="answers-section">
                    {this.state.replies.map((message, i) =>
                        <ReplyItem
                            selectHandler={this.props.selectHandler}
                            key={i}
                            messageItem={message}
                        />)}
                </div>
            </div>
        )
    }

}