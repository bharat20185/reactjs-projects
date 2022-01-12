import React from "react";
import Book from "./Book";

const bookList = [
	{
		image: "https://images-na.ssl-images-amazon.com/images/I/71oCtdxOp1L.jpg",
		title: "Bose",
		subTitle: "The Untold Story of an Inconvenient Nationalist",
		price: 638,
		author: "Chandrachur Ghose",
	},
	{
		image: "https://images-na.ssl-images-amazon.com/images/I/61y1npvkoAS.jpg",
		title: "Winning in the Digital Age",
		subTitle:
			"Seven Building Blocks of a Successful Digital Transformation",
		price: 517,
		author: "Nitin Seth",
	},
	{
		image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
		title: "Atomic Habits",
		subTitle: "An easy & Proven Way to Build Good Habits & Break Bad Ones",
		price: 482,
		author: "James Clear",
	},
];

const Books = () => {
	return (
		<>
			<h1>Amazon best selling books</h1>
			<hr />
			{
				bookList.map((item, index) => (
					<Book key={`book${index}`} {...item} />
				))
			}
		</>
	)
};

export default Books;
