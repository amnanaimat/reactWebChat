'use strict';

var React = require('react');
var UserList = require('UserList');
var MessageList = require('MessageList');
var MessageForm = require('MessageForm');
var ChangeNameForm = require('ChangeNameForm');

var socket = io.connect();
var ChatApp = React.createClass({

	getInitialState() {
		return {users: [], messages:[], text: ''};
	},

	componentDidMount() {
		socket.on('init', this._initialize);
		socket.on('send:message', this._messageRecieve);
		socket.on('user:join', this._userJoined);
		socket.on('user:left', this._userLeft);
		socket.on('change:name', this._userChangedName);
	},

	_initialize(data) {
		var {users, name} = data;
		this.setState({users, user: name});
	},

	_messageRecieve(message) {
		var {messages} = this.state;
		messages.push(message);
		this.setState({messages});
	},

	_userJoined(data) {
		var {users, messages} = this.state;
		var {name} = data;
		users.push(name);
		messages.push({
			user: 'APPLICATION BOT',
			text : name +' Joined'
		});
		this.setState({users, messages});
	},

	_userLeft(data) {
		var {users, messages} = this.state;
		var {name} = data;
		var index = users.indexOf(name);
		users.splice(index, 1);
		messages.push({
			user: 'APPLICATION BOT',
			text : name +' Left'
		});
		this.setState({users, messages});
	},

	_userChangedName(data) {
		var {oldName, newName} = data;
		var {users, messages} = this.state;
		var index = users.indexOf(oldName);
		users.splice(index, 1, newName);
		messages.push({
			user: 'APPLICATION BOT',
			text : 'Change Name : ' + oldName + ' ==> '+ newName
		});
		this.setState({users, messages});
	},

	handleMessageSubmit(message) {
		var {messages} = this.state;
		messages.push(message);
		this.setState({messages});
		socket.emit('send:message', message);
	},

	handleChangeName(newName) {
		var oldName = this.state.user;
		socket.emit('change:name', { name : newName}, (result) => {
			if(!result) {
				return alert('There was an error changing your name');
			}
			var {users} = this.state;
			var index = users.indexOf(oldName);
			users.splice(index, 1, newName);
			this.setState({users, user: newName});
		});
	},

	render() {
		var {users,messages,user} = this.state;
		return (
			<div>
				<UserList
					users={users}
				/>
				<MessageList
					messages={messages}
				/>
				<MessageForm
					onMessageSubmit={this.handleMessageSubmit}
					user={user}
				/>
				<ChangeNameForm
					onChangeName={this.handleChangeName}
				/>
			</div>
		);
	}
});

module.exports = ChatApp;