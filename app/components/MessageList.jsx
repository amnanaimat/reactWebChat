var React = require('react');
var Message = require('Message');


var MessageList = React.createClass({
  render() {
	  
	  var {messages} = this.props;
      return (
          <div className='messages'>
              <h2> Conversation: </h2>
              {
                  messages.map((message, i) => {
                      return (
                          <Message
                              key={i}
                              user={message.user}
                              text={message.text}
                          />
                      );
                  })
              }
          </div>
      );
  }
});

module.exports = MessageList;