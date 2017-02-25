var React = require('react');


var UserList = React.createClass({
	render(){
		var {users} = this.props;
		return(
		<div className="users">
		
		<h3>Online Users</h3>
		<ul>
		{users.map((user,index)=>{
			
			return (<li key={index}>{user}</li>);
			
		})}
		</ul>
		
		</div>
		
		)
		
		
	}
	
	
	
});

module.exports = UserList;