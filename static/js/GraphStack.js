
var Align = {
	textAlign : 'center',
	fontFamily : 'EB Garamond'
};

var databaseForm = React.createClass({

	getInitialState : function() {
		return {nodeNumber : ''};
	},

	handleNodeNumberChange : function(e) {
		// interact with the database
	},

	handleSubmit : function(e) {
		// handle the submit action with the databse
		e.preventDefault();
	}

	render : function() {
		return (
			<div>
				<form id="nodeNumber-form" className="nodeNumber" onSubmit={this.handleSubmit}>
				<h2 className="nodeNumber-heading" style={Align}>Enter node to traverse</h2>

				<div className="form-group has-success">
					<label htmlFor="nodeNumber" className="sr-only">Node Number</label>
					<input type="text" id="nodenumber" name="nodenumber" className="form-control" placeholder="Node Number" onChange={this.handleNodeNumberChange} />
				</div>

				<div className="row form-group">
					<button className="btn btn-lg btn-success btn-block" type="submit">Get Tree</button>
				</div>

			</div>
		);
	}
});

ReactDOM.render(
	<div>
		<databaseForm />
	</div>,
	document.getElementById('database_form')
);