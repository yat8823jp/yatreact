import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
	render () {
		return <div class="wrap"><p>Hellow World!</p></div>;
	}
}

render( <App/>, document.getElementById( 'app' ) );