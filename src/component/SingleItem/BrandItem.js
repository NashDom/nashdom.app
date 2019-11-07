import React from 'react';

function BrandItem(props) {
	return (
		<div className="single-brand-item d-table">
			<div className="d-table-cell">
				<img src={props.imgUrl} alt="" />
			</div>
		</div>
	);
}

export default BrandItem;
