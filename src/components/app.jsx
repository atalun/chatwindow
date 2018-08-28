import React, { Component } from 'react';
import MessageList from './MessagesList.jsx'
import SendMessageForm from './SendMessagesForm.jsx';
import Title from './title.jsx';
import QuickReplies from './QuickReplies.jsx';
import './app.css';
import PersistentMenu from './PersistentMenu.jsx'
import MediaTemplate from './MediaTemplate.jsx';
import ButtonTemplate from './ButtonTemplate.jsx';
import ListTemplate from './ListTemplate.jsx'
import GenericTemplate from './GenericTemplate.jsx'


let i = 0

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      CONVERSATION: [{ id: 1, senderId: "BOT", text: "Hi user!" }],
      bottalk: [{ id: 3, senderId: "BOT", text: "How's your day going ? " }, { id: 5, senderId: "BOT", text: "That's fantastic ! I've the same. " }, { id: 7, senderId: "BOT", text: "Bye! " }],
      questions: ['What size are you wearing?'],
      buttons: [{ text: "blabl", url: "http://google.pl" }, { text: "blabla", url: "http://onet.pl" }],
      images: ["http://bi.gazeta.pl/im/c8/a0/16/z23726280V,Pogoda-na-poniedzialek-30-lipca-2018--Bedzie-gorac.jpg"],
      listItems: [{ urlHeadline: "https://developers.facebook.com/docs/messenger-platform/send-messages/templates", Headline: "Message Templates", Description: "See how message templates should look like", Logo: "https://scontent-waw1-1.xx.fbcdn.net/v/t39.2365-6/23666967_188506161716866_2869776016224550912_n.png?_nc_cat=0&oh=8507c14f39530930f4c6c4dce031e5e8&oe=5BF777E5" }],
      banners: { backgroundImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwF9fR2v2sWQwDjh73aOwHybsVhNAYP1q6DwdmVdAi960rjPsuA", Title: "Facebook", SubTitle: "See how its made" },
      generics: { Tit: "Hi", SubTit: "Whats up?" }
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.selectHandler = this.selectHandler.bind(this)
    this.botTalk = this.botTalk.bind(this)
  }

  sendMessage(text) {
    console.log("send message", this.state.CONVERSATION)
    let conversation = [...this.state.CONVERSATION]
    let newmessage = {
      id: conversation.length + 1,
      senderId: "Szymon",
      text: text
    };
    conversation = [...conversation, newmessage];
    console.log("message", conversation);
    this.setState({ CONVERSATION: conversation });
  }


  selectHandler(messageItem) {
    this.sendMessage(messageItem);
  }

  botTalk() {
    if (this.state.CONVERSATION.length % 2 === 0 && i < this.state.bottalk.length) {
      this.setState({ CONVERSATION: [...this.state.CONVERSATION, this.state.bottalk[i]] })
      i = i + 1;
    }
  }

  render() {
    return (
      <div className="app">
        <Title />
        <MediaTemplate
          images={this.state.images}
          buttons={this.state.buttons}
        />

        <ButtonTemplate
          buttons={this.state.buttons}
          questions={this.state.questions}
        />

        <GenericTemplate
          generics={this.state.generics}
          buttons={this.state.buttons}
          images={this.state.images}
        />

        <ListTemplate
          banners={this.state.banners}
          listItems={this.state.listItems}
          buttons={this.state.buttons}
        />
        <QuickReplies
          questions={this.state.questions}
          selectHandler={this.selectHandler}
        />

        <MessageList
          CONVERSATION={this.state.CONVERSATION}
          bottalk={this.state.bottalk}
          botTalk={this.botTalk}
        />
        <SendMessageForm
          sendMessage={this.sendMessage} />
        <PersistentMenu />
      </div>
    );
  }
}