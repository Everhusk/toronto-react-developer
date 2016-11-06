var React = require("react");

var Navbar = require("./components/Navbar.jsx");

var TorontoReactDeveloper = React.createClass({

	handleLearnMore:function(e){

		var link = document.createElement("a");

		var link_href = document.createAttribute("href");

		var firstThird = "michae";
		var secondThird = "l@sovil";
		var thirdThird = "on.com";

		link_href.value = "mailto:" + firstThird + secondThird + thirdThird;

		link.setAttributeNode(link_href);
		//Simulate a click
		link.dispatchEvent( new Event("click"));

		link = null;
	},

	render:function(){

		return (
			<div>
			
			<div className="container-fluid">


		      <div className="row abovethefold">
		      		<div className="toronto-img"></div>
			      	<div className="col-xs-12 col-md-5">
			        <h1>Hire a ReactJS Developer in Toronto </h1>

			        <p>
			        Your ReactJS development needs could be as easy as:
			        </p>
			        <p>
			        <pre style={{textAlign:"left"}}>
			        { "import ReactDeveloper from './TorontoReactDeveloper'\n\n<ReactDeveloper workOn={my_awesome_project}/>"}
			        </pre>
			        </p>
			        <p><a className="btn btn-lg btn-block btn-success" onClick={this.handleLearnMore} role="button">Ask About Availability</a></p>

			        <a className="btn btn-link" href="#more">Learn More</a>

			        <div className="bottom-border"></div>
			      </div>
		      </div>


		      <div className="row marketing">
		      	<div className="col-xs-12 col-sm-8 col-sm-offset-2">
		        <div className="col-lg-6">

		        <a id="more"></a>
			      <h4>I Love ReactJS</h4>
				  <p>I believe it is the best way to create a maintainable, developer-friendly and ultimately more successful software web project.
				  A passionate developer is a happy developer.</p>

		          <h4>Modular Development</h4>
		          <p>
					A React component can be as large as an entire app, or as small as a button. I am similar:
		          <ol>
		          	<li>I can be used for an entire project, or to strengthen your development bandwidth.</li>
		          	<li>I don{"'"}t need to know about your entire project in order to be effective. I can be stateless!</li>
		          </ol>
		        	</p>
		          <h4>7+ Years Experience</h4>
		          <p>
		          I have been developing iOS software since 2008 and web software since 2000.
		          </p>
		        </div>

		        <div className="col-lg-6">

		          <h4>React + Native</h4>
		          <p>With the coming arrival of React Native, a developer can use React to create a native mobile experience.
		          This works similar to Appcelerator Titanium in the sense that the end result <em>is</em> a true native app.</p>

		          <p>This is great, and my 7+ years of experience on iOS and mobile web will definitely help on both sides of the fence.</p>

		          <h4>This website is built with React.js</h4>
		          <p>Go ahead and view the browser source.</p>
		        </div>
		      </div>

		      </div>

		      <footer className="footer">
		        <p>Copyright Sovilon Software Inc. 2015</p>
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
