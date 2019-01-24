import React, { Component } from "react";
import _ from "lodash";

export const CinemaSeat = ({ onClick, seatNum, bookSymbol }) => {
	return (
		<div className="grid__parent">
			<div
				className="cinema__seat"
				onClick={onClick}
				style={{
					color: "red",
					display: " block"
				}}>
				<p>
					{seatNum}
					{bookSymbol}
				</p>{" "}
				<br />
			</div>
		</div>
	);
};

export const CinemaGrid = ({ onClick, bookSymbol }) => {
	let rows = 21;
	let columns = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P"
	];
	rows = _.range(1, rows);
	const columnsNumber = _.range(columns.length);

	// console.log(rows);
	// console.log(columns);
	// console.log(16 * 20);
	let gridMap = rows.map(x => {
		return columnsNumber.map(y => {
			const seatNames = columns[y] + x;
			return (
				<CinemaSeat
					seatNum={seatNames}
					key={seatNames}
					onClick={onClick}
					bookSymbol={bookSymbol}
				/>
			);
		});
	});

	return <div>{gridMap}</div>;
};

export default class Grid extends Component {
	state = {
		bookStatus: false,
		unbookedStatusSymbol: "*",
		bookedStatusSymbol: "#"
	};
	onclickHandler = e => {
		console.log("You have clicked this element");
	};
	render() {
		return (
			<div>
				<CinemaGrid
					onClick={this.onclickHandler}
					bookSymbol={this.state.unbookedStatusSymbol}
				/>
			</div>
		);
	}
}
