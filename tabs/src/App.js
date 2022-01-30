import axios from "axios";
import { useState, useEffect } from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
	const [loading, setLoading] = useState(true);
	const [tabs, setTabs] = useState([]);
	const [tabTitles, setTabTitles] = useState([]);
	const [tab, setTab] = useState(null);

	useEffect(() => {
		const fetchTabs = async () => {
			const res = await axios.get(url);
			const titles = res.data.map((tab) => tab.company);
			setTabs(res.data);
			setTabTitles(titles);
			setLoading(false);
			setTab(res.data[0])
		};
		fetchTabs();
	}, []);

	const handleButtonClick = (pos) => {
		setTab(tabs[pos]);
	};

	if (loading) {
		return <h2>Loading...</h2>;
	}

	console.log(tab);
	return (
		<div className="container mt-3">
			{tabs.length > 0 && (
				<>
					<h2 className="text-center">Experience</h2>
					<ButtonGroup className="d-flex">
						{tabTitles.map((tabTitle, index) => (
							<Button
								key={tabTitle}
								onClick={() => handleButtonClick(index)}
							>
								{tabTitle}
							</Button>
						))}
					</ButtonGroup>
					<hr />
					
					{tab && (
						<>
							<h2>{tab.title}</h2>
							<div className="badge bg-secondary rounded-2">
								{tab.company}
							</div>
							<p>{tab.dates}</p>
							<ListGroup>
								{tab.duties.map((duty, index) => (
									<ListGroup.Item key={`duty${index}`}>
										<FaAngleDoubleRight /> {duty}
									</ListGroup.Item>
								))}
							</ListGroup>
						</>
					)}
				</>
			)}
		</div>
	);
}

export default App;
