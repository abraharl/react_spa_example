import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

var App = React.createClass({
 render: function() {
  	return (
  		<Router>
  		  <div>
  		    <h1>Simple SPA</h1>
  		    <ul className="header">
              <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/stuff" activeClassName="active">Stuff</NavLink></li>
              <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
  		    </ul>
  		    <div className="content">
  		      <Route path="/home" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
            </div>
  		  </div>
  		</Router>
  	);
  }
});

var Home = React.createClass({
  render: function() {
  	return (
  		<div>
  			<h2>Home</h2>
  			<p>
  			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus commodo tortor, at scelerisque magna finibus id. Vestibulum eget
  			urna diam. Nam feugiat pretium velit non ultrices. Praesent eleifend placerat justo, ut posuere tortor elementum sodales. Proin porttitor
  			nunc ac quam porttitor, sit amet tincidunt nulla pharetra. Proin placerat lacus nisi, et sodales est lobortis ut. Maecenas finibus risus
  			velit, non laoreet eros bibendum. Morbi bibendum, nunc vel pellentesque rhoncus, orci justo tincidunt erat, non vulputate urna lacus id metus.
  			Sed eleifend risus non dictum congue. Aliquam odio ligula, blandit dignissim neque a, dignissim convallis tortor. Mauris quis tristique metus.
            </p>
            <p> 
            Sed fermentum congue urna vel accumsan. Integer aliquet diam venenatis, pretium leo id, condimentum tortor. Curabitur quam ligula, 
            congue non dolor nec, ullamcorper fermentum odio. Ut neque erat. Cras euismod magna eu libero efficitur, vel ornare ligula auctor. Mauris 
            urna mauris, venenatis eu egestas ut, semper sit amet mauris. Etiam sed diam nulla. Donec volutpat lacus. Phasellus dictum sagittis urna, 
            elementum ullamcorper lacus elementum vel. Nam mattis nec libero laoreet dictum. Etiam eget nulla scelerisque, aliquet odio et, fermentum 
            lorem. Nulla suscipit, ligula sed tincidunt rutrum, tortor purus volutpat purus, ut pulvinar neque ligula vitae orci.
            </p>
  		</div>
  	);
  }
});

var Stuff = React.createClass({
	render: function() {
	  return (
	  	<div>
	  	  <h2>Stuff</h2>
	  	  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus nibh, semper.</p>
	  	  <ol>
	  	    <li>Nulla pulvinar diam</li>
	  	    <li>Facilis bibendum</li>
	  	    <li>Vestibulum vulputate</li>
	  	    <li>Eget erat</li>
	  	    <li>Id porttitor</li>
	  	  </ol>
	  	</div>
	  );
	}
});

var Contact = React.createClass({
  render: function() {
	return (
	  <div>
	    <h2>Got Questions?</h2>
	  	<p>Then call <a href="tel:(555) 555-5555">(555) 555-5555</a> . Our operators are standing by.</p>
	  </div>
	);
  } 
});

ReactDOM.render(
  <App/>,
  document.querySelector('#main')
);