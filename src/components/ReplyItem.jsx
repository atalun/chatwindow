import React from 'react';

const ReplyItem = ({messageItem, selectHandler}) => {
    return (
        <div className="quick-reply" onClick={() => selectHandler(messageItem)}>
           {messageItem}
        </div>
    );
}

export default ReplyItem;