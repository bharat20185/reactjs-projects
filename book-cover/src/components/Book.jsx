import React from 'react'

const Book = (props) => {
	return (
		<div className="card m-3">
			<img className="card-img-top" src={props.image} alt={props.title} />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.subTitle}</p>
				<p>Price: {props.price}</p>
			</div>
		</div>
	)
}

export default Book
