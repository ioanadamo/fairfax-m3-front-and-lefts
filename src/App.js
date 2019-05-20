import React from 'react';
import Home from './Home';
import CardMaker from './CardMaker';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/card-maker" component={CardMaker} />
			</Switch>
		);
	}
}

export default App;
