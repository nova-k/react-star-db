import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {

	state = {
		showRandomPlanet: true,
		selectorPerson: 5
	};

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			}
		});
	};

	onPersonSelected = (id) => {
		this.setState({
			selectorPerson: id
		});
	}

	render() {

		const {selectorPerson} = this.state;
		
		const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

		return (
			<div className="stardb-app">
				<Header />
				{planet}

				<button
					className="toggle-planet btn btn-warning btn-lg"
					onClick={this.toggleRandomPlanet}>
					Toggle Random Planet
        </button>

				<div className="row mb2">
					<div className="col-md-6">
						<ItemList onItemSelected = {this.onPersonSelected} />
					</div>
					<div className="col-md-6">
						<PersonDetails personId = {selectorPerson} />
					</div>
				</div>
			</div>
		);
	}
}
