import React, { Component } from "react";
import _ from "lodash";

export class CinemaSeat extends Component {
	state = {
		bookStatus: false,
		unBooked: "*",
		bookedButNotPaid: "0",
		booked: "#",
		seatType: "",
		seatPrice: 0
	};
	onClickHandler = e => {
		e.preventDefault();
		console.log(
			"You have booked seat",
			this.props.seatName,
			"price",
			this.props.seatPrice,
			"seatPrice",
			this.props.seatType
		);
		this.setState({ bookStatus: true });
		this.setState({ booked: "#" });
	};

	onDeactivateBook = e => {
		e.preventDefault();
		this.setState({ bookStatus: false });
	};

	render() {
		return (
			<div>
				<div
					className="cinema__seat"
					onClick={
						this.state.bookStatus ? this.onDeactivateBook : this.onClickHandler
					}
					style={{
						color: "red",
						display: " block"
					}}>
					<p>
						{this.props.seatName} <br />
						{this.state.bookStatus ? this.state.booked : this.state.unBooked}
					</p>{" "}
					<br />
				</div>
			</div>
		);
	}
}

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
	const vVipSeats = [];
	const vipSeats = [];
	const economySeats = [];

	// console.log(rowElements[0]);
	// console.log(columnsNumber);
	// console.log(rows);
	// console.log(16 * 20);
	for (let i = 0; i < rows.length; i++) {
		const row = rowElements[i];
		// console.log(row);
		for (let index = 1; index < columnsNumber.length; index++) {
			const seatName = row + index;
			// console.log(seatName);
			seats.push(seatName);

			if (
				seatName.startsWith("C") ||
				seatName.startsWith("D") ||
				seatName.startsWith("E") ||
				seatName.startsWith("F")
			) {
				// console.log(seatName);
				vVipSeats.push(
					<CinemaSeat
						seatName={seatName}
						key={seatName}
						bookSymbol={bookSymbol}
						seatType="Vvip"
						seatPrice={100000}
					/>
				);
			} else if (
				seatName.startsWith("M") ||
				seatName.startsWith("N") ||
				seatName.startsWith("O") ||
				seatName.startsWith("P")
			) {
				// economySeats.push(seatName);
				economySeats.push(
					<CinemaSeat
						seatName={seatName}
						key={seatName}
						bookSymbol={bookSymbol}
						seatType="economy"
						seatPrice={20000}
					/>
				);
			} else if (
				seatName.startsWith("G") ||
				seatName.startsWith("H") ||
				seatName.startsWith("I") ||
				seatName.startsWith("J") ||
				seatName.startsWith("K") ||
				seatName.startsWith("L")
			) {
				vipSeats.push(
					<CinemaSeat
						seatName={seatName}
						key={seatName}
						bookSymbol={bookSymbol}
						seatType="vip"
						seatPrice={50000}
					/>
				);
			}
		}
	}
	const filteredSeats = _.filter(seats, x => {
		if (x.startsWith("A") || x.startsWith("B")) {
			return (
				<CinemaSeat
					seatName={x}
					key={x}
					bookSymbol={bookSymbol}
					seatType="Vvip"
					seatPrice={100000}
				/>
			);
		}
	});
	const twinSeats = _.filter(filteredSeats, x => {
		if (
			x.startsWith("A5") ||
			x.startsWith("A6") ||
			x.startsWith("A7") ||
			x.startsWith("A8") ||
			x.startsWith("A9") ||
			x.startsWith("A10") ||
			x.startsWith("A11") ||
			x.startsWith("A12") ||
			x.startsWith("A13") ||
			x.startsWith("A14") ||
			x.startsWith("A15") ||
			x.startsWith("A16") ||
			x.startsWith("B5") ||
			x.startsWith("B6") ||
			x.startsWith("B7") ||
			x.startsWith("B8") ||
			x.startsWith("B9") ||
			x.startsWith("B10") ||
			x.startsWith("B11") ||
			x.startsWith("B12") ||
			x.startsWith("B13") ||
			x.startsWith("B14") ||
			x.startsWith("B15") ||
			x.startsWith("B16")
		) {
			return (
				<CinemaSeat
					seatName={x}
					key={x}
					bookSymbol={bookSymbol}
					seatType="Vvip"
					seatPrice={100000}
				/>
			);
		}
	});
	const otherVipSeats = _.filter(filteredSeats, x => {
		if (
			!x.startsWith("A5") &&
			!x.startsWith("A6") &&
			!x.startsWith("A7") &&
			!x.startsWith("A8") &&
			!x.startsWith("A9") &&
			!x.startsWith("A10") &&
			!x.startsWith("A11") &&
			!x.startsWith("A12") &&
			!x.startsWith("A13") &&
			!x.startsWith("A14") &&
			!x.startsWith("A15") &&
			!x.startsWith("A16") &&
			!x.startsWith("B5") &&
			!x.startsWith("B6") &&
			!x.startsWith("B7") &&
			!x.startsWith("B8") &&
			!x.startsWith("B9") &&
			!x.startsWith("B10") &&
			!x.startsWith("B11") &&
			!x.startsWith("B12") &&
			!x.startsWith("B13") &&
			!x.startsWith("B14") &&
			!x.startsWith("B15") &&
			!x.startsWith("B16")
		) {
			return (
				<CinemaSeat
					seatName={x}
					key={x}
					bookSymbol={bookSymbol}
					seatType="Vvip"
					seatPrice={100000}
				/>
			);
		}
	});

	// console.log(seats);
	console.log("+++++++-------->twinSeats ", twinSeats);
	console.log("--------otherVipSeats", otherVipSeats);
	console.log("+++++++-------->otherVipSeats ", [
		...otherVipSeats,
		...vipSeats
	]);
	// console.log("+++++++-------->Vvip ", vVipSeats);
	// console.log("+++++++-------->vip ", vipSeats);
	// console.log("--------------> economy", economySeats);
	let allSeats = [...vVipSeats, ...vipSeats, ...economySeats];
	let gridMap = allSeats.map(x => {
		return x;
	});
	// console.log(gridMap);
	return <div>{gridMap}</div>;
	// return <div>yoo cinema app</div>;
};

export default class Grid extends Component {
	render() {
		return (
			<div>
				<h2>Cinemax Ticket Booking App</h2>
				<CinemaGrid />
			</div>
		);
	}
}
