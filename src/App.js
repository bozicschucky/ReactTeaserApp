import React, { Component } from "react";
import "./styles/App.css";
import Grid from "../src/components/cinema/grid";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Grid />
			</div>
		);
	}
}

export default App;
