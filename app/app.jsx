var React = require('react');
var ReactDOM = require('react-dom');
var ChatApp = require('ChatApp');



$(document).foundation();
//App Custom CSS
require('style!css!sass!ApplicationCustomStyle');

ReactDOM.render(
  <ChatApp />,
  document.getElementById('app')
);
