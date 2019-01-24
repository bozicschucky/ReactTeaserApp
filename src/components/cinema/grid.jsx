import React, { Component } from "react";
import _ from "lodash";

export const CinemaSeat = ({ onClick, seatNum }) => {
	return (
		<div>
			<div className="cinema__seat" onClick={onClick}>
				<p>{seatNum}</p>
			</div>
		</div>
	);
};

export const CinemaGrid = () => {
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
			console.log(columns[y] + x);
			return columns[y] + x;
		});
	});

	// const travserse =
	console.log(gridMap);
	return (
		<div>
			{/* <table className="grid" /> */}
			{gridMap.map(x => {
				return <CinemaSeat />;
			})}
			<p>This is a simple thing</p>
			{/* {gridMap()} */}
			{/* <CinemaSeat /> */}
		</div>
	);
};

export default class Grid extends Component {
	render() {
		return (
			<div>
				<CinemaGrid />
			</div>
		);
	}
}
