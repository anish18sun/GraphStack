
var Align = {
	textAlign : 'center',
	fontFamily : 'EB Garamond'
}

var DatabaseForm = React.createClass({		//the component to interact with the database API

	getInitialState : function() {
		return {nodeNumber : this.props.nodeNumber};
	},

	handleNodeNumberChange : function(e) {
		// interact with the database
	},

	handleSubmit : function(e) {
		// handle the submit action with the databse
		e.preventDefault();
	},

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
				</form>
			</div>
		);
	}
});

ReactDOM.render(
	<div>
		<DatabaseForm nodeNumber='8' />
	</div>,
	document.getElementById('database_form')
);

var NetworkxForm = React.createClass({

	getInitialState : function() {
		return {nodeNumber1 : this.props.nodeNumber1, nodeNumber2 : this.props.nodeNumber2};
	},

	handleNodeNumber1Change : function(e) {
		//interact with the database
	},

	handleNodeNumber2Change : function(e) {
		// interact with the database
	},

	handleSubmit : function(e) {
		// handle the submit action with the database
		e.preventDefault();
	},

	render : function() {
		return(
			<div>
				<div>
					<form id="nodeNumber1-form" className="nodeNumber" onSubmit={this.handleSubmit}>
						<h2 className="nodeNumber1-heading" style={Align}>Enter Source Node</h2>

						<div className="form-group has-success">
							<label htmlFor="nodeNumber1" className="sr-only">Node Number 1</label>
							<input type="text" id="nodenumber1" name="nodenumber1" className="form-control" placeholder="Source Node Number" onChange={this.handleNodeNumber1Change} />
						</div>

						<div className="row form-group">
							<button className="btn btn-lg btn-success btn-block" type="submit">Set Source Node</button>
						</div>
					</form>
				</div>
				<div>
					<form id="nodeNumber2-form" className="nodeNumber" onSubmit={this.handleSubmit}>
						<h2 className="nodeNumber2-heading" style={Align}>Enter Destination Node</h2>

						<div className="form-group has-success">
							<label htmlFor="nodeNumber2" className="sr-only">Node Number 2</label>
							<input type="text" id="nodenumber2" name="nodenumber2" className="form-control" placeholder="Destination Node Number" onChange={this.handleNodeNumber2Change} />
						</div>

						<div className="row form-group">
							<button className="btn btn-lg btn-success btn-block" type="submit">Set Destination Node</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
});

ReactDOM.render(
	<div>
		<NetworkxForm nodeNumber1='1' nodeNumber2='8' />
	</div>,
	document.getElementById('networkx_form')
);

var BulkdataForm = React.createClass({

	getInitialState : function() {
		return {csvFile : ''};
	},

	handleSubmit : function(e) {
		//TODO : handle upload of a new File
		e.preventDefault();
	},

	render : function() {
		return(
			<div>
				<form id="csvfile-form" className="csvFile" onSubmit={this.handleSubmit}>
					<h2 className="csvfile-heading" style={Align}>Enter CSV File</h2>

					<div className="form-group has-success">
						<label htmlFor="csvFile" className="sr-only">CSV File</label>
						<input type="text" id="csvfile" name="csvfile" className="form-control" placeholder="CSV File" />
					</div>
			
					<div className="row form-group">
						<button className="btn btn-lg btn-success btn-block" type="submit">Upload CSV File</button>
					</div>
				</form>
			</div>
		);
	}
});

ReactDOM.render(
	<div>
		<BulkdataForm csvFile='file.csv' />
	</div>,
	document.getElementById('bulkdata_form')
);