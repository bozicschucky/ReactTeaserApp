import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSeatPrices } from "../../actions/addPrice";
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
			"seat price ------->",
			this.props.seatPrice,
			"seat Category ------>",
			this.props.seatType
		);
		console.log(this.props);
		this.setState({ bookStatus: true });
		this.setState({ booked: "#" });
		const { addPrice } = this.props;
		addPrice({
			seatPrice: this.props.seatPrice,
			seatName: this.props.seatName,
			seatType: this.props.seatType
		});
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
						color: this.props.color || "red",
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

export const SeatPricesTotal = () => {
	return <div>yooo adding all seat prices</div>;
};

export const CinemaGrid = ({ bookSymbol, addPrice }) => {
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
	for (let i = 0; i < rows.length; i++) {
		const row = rowElements[i];
		for (let index = 1; index < columnsNumber.length; index++) {
			const seatName = row + index;
			seats.push(seatName);
		}
	}

	//generate the different seats using the seat indices
	let gridMap = seats.map((x, index) => {
		if ((index >= 4 && index <= 14) || (index >= 24 && index <= 34)) {
			return (
				<CinemaSeat
					seatName={x}
					key={x}
					bookSymbol={bookSymbol}
					seatType="TwinSeats"
					seatPrice={25000}
					addPrice={addPrice}
				/>
			);
		} else if (index >= 120 && index <= 239) {
			return (
				<CinemaSeat
					seatName={x}
					key={x}
					bookSymbol={bookSymbol}
					seatType="Vip"
					color="Navy"
					seatPrice={50000}
					addPrice={addPrice}
				/>
			);
		} else if (index >= 240 && index <= 319) {
			return (
				<CinemaSeat
					seatName={x}
					key={x}
					bookSymbol={bookSymbol}
					color="Olive"
					seatType="Economy"
					seatPrice={20000}
					addPrice={addPrice}
				/>
			);
		} else {
			return (
				<CinemaSeat
					seatName={x}
					key={x}
					bookSymbol={bookSymbol}
					seatType="Vvip"
					color="green"
					seatPrice={100000}
					addPrice={addPrice}
				/>
			);
		}
	});
	return <div>{gridMap}</div>;
};

class Grid extends Component {
	render() {
		return (
			<div>
				<h2>Cinemax Ticket Booking App</h2>
				<div>
					<CinemaGrid addPrice={this.props.addSeatPrices} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	addPrices: state.pricesReducer
});

const mapDispatchToProps = {
	addSeatPrices
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Grid);
