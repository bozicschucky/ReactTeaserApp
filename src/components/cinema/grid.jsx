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
					{seatNum} <br />
					{bookSymbol}
				</p>{" "}
				<br />
			</div>
		</div>
	);
};

//

export const CinemaGrid = ({ onClick, bookSymbol }) => {
	let columns = 22;
	let rows = 17;
	let rowElements = [
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
	let columnsNumber = _.range(1, columns);
	rows = _.range(1, rows);
	const seats = [];

	// console.log(rowElements[0]);
	// console.log(columnsNumber);
	// console.log(rows);
	// console.log(16 * 20);
	for (let i = 0; i < rows.length; i++) {
		const row = rowElements[i];
		// console.log(row);
		for (let index = 1; index < columnsNumber.length; index++) {
			const seatName = row + index;
			const seat = {
				seatName
			};
			seats.push(seatName);
			// console.log("seatName -----+++++++", row + index);
			// console.log("---------> columns", index, "------->rows", row);
		}
	}

	console.log(seats);
	let gridMap = seats.map(x => {
		let seatName = x;
		return (
			<CinemaSeat
				seatNum={seatName}
				key={seatName}
				onClick={onClick}
				bookSymbol={bookSymbol}
			/>
		);
	});
	// console.log(gridMap);
	return <div>{gridMap}</div>;
	return <div>yoo cinema app</div>;
};

export default class Grid extends Component {
	state = {
		bookStatus: false,
		unBooked: "*",
		bookedButNotPaid: "0",
		booked: "#",
		seatType: {
			twinSeats: 25000,
			vvip: 100000,
			vip: 50000,
			Economy: 20000
		}
	};
	onclickHandler = e => {
		console.log("You have clicked this element");
		this.setState({ bookStatus: true });
		this.setState({ booked: "#" });
		this.setState({ unBooked: "" });
	};
	render() {
		return (
			<div>
				<h2>Cinemax Ticket Booking App</h2>
				<CinemaGrid
					onClick={this.onclickHandler}
					bookSymbol={
						this.state.bookStatus ? this.state.booked : this.state.unBooked
					}
				/>
			</div>
		);
	}
}
