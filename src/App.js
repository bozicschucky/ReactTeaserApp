import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/App.css";
import Grid from "../src/components/cinema/grid";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Grid />
				</div>
			</Provider>
		);
	}
}

export default App;
