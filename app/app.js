var React = require("react");

var Navbar = require("./components/Navbar.jsx");

var TorontoReactDeveloper = React.createClass({

	handleLearnMore:function(e){

		document.location = "mailto:michael" + "@" + "sovilon.com";

	},

	render:function(){

		return (
			<div>
			<a href="https://github.com/sovilon/toronto-react-developer"><img style={{position: 'absolute', top: 0, right: 0, border: 0}} src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"/></a>
			<div className="container-fluid">


		      <div className="row abovethefold">
		      		<img className="toronto-img" src="img/logo.svg" />
			      	<div className="col-xs-12 col-md-6 col-md-offset-3">
			        <h1 style={{textAlign:'center'}}>Hire a ReactJS Developer in Toronto </h1>
			        <div className="row">
			        	<div className="col-xs-12 col-sm-8 col-sm-offset-2">
			        		<p>
			        Your ReactJS development needs could be as easy as:
			        </p>
			        <p>
			        <pre style={{textAlign:"left"}}>
			        { "import ReactDeveloper from './TorontoReactDeveloper'\n\n<ReactDeveloper workOn={my_awesome_project}/>"}
			        </pre>
			        </p>
			        <p><a className="btn btn-lg btn-block btn-success" onClick={this.handleLearnMore} role="button">Ask About Availability</a></p>
			        	</div>
			        </div>
			        
			        <div className="bottom-border"></div>
			      </div>
		      </div>


		      <div className="row developer-list">
		      	

		      </div>

		      <footer className="footer">
		      <h4>This website is built with React.js</h4>
		          <p>Go ahead and view the browser source.</p>
		      	<a href='http://www.sovilon.com'><img className="sovilon-logo" src="img/sovilon.png"/></a>
		        <p>One of the services maintained by <a href='http://www.sovilon.com'>Sovilon Software Inc.</a></p>
		      </footer>

		    </div>

		    </div>
			);
	}
});

React.render(
    <TorontoReactDeveloper />,
    document.body
  );
