import React, { useState } from "react";

function Team({ team, updateScore }) {
	const [text, setText] = useState("");

	const handleAddButtonClick = () => {
		let newScore = parseInt(text);
		updateScore(team.id, newScore);
		setText("");
	};

	return (
		<div className="card">
			<div className="card-body">
				<p className="card-title fs-1">
					Score: <span>{team.score}</span>
				</p>
				<p className="card-subtitle text-muted mb-2">{team.name}</p>
				<form className="input-group">
					<input
						className="form-control"
						type="number"
						pattern="\d*"
						min="0"
						max="500"
						placeholder="Enter score here"
						value={text}
						onChange={(e) => setText(e.currentTarget.value)}
					/>
					<button
						className="btn btn-primary"
						type="button"
						onClick={handleAddButtonClick}>
						Add
					</button>
				</form>
			</div>
		</div>
	);
}

export default Team;
