import React from 'react';

function SectionTitle(props) {
	return (
		<div className="section-title">
			<span className="lines" />
			<h2>{props.title}</h2>
			<p>{props.text}</p>
		</div>
	);
}

export default SectionTitle;
