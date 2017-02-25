var React = require('react');

var Message = React.createClass({
  render() {
	  var {user, text} = this.props;
	  
      return (
          <div className="message">
              <strong>{user} :</strong> 
              <span>{text}</span>        
          </div>
      );
  }
});

module.exports = Message;