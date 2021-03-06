var React = require('react');

var ChangeNameForm = React.createClass({
  getInitialState() {
      return {newName: ''};
  },

  onKey(e) {
      this.setState({ newName : e.target.value });
  },

  handleSubmit(e) {
      e.preventDefault();
      var newName = this.state.newName;
      this.props.onChangeName(newName);    
      this.setState({ newName: '' });
  },

  render() {
	  var {newName} = this.state;
      return(
          <div className='change_name_form'>
              <h3> Change Name </h3>
              <form onSubmit={this.handleSubmit}>
                  <input
                      onChange={this.onKey}
                      value={newName}
                  />
              </form>  
          </div>
      );
  }
});

module.exports = ChangeNameForm;