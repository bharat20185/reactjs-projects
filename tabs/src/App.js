import axios from "axios";
import { useState, useEffect } from "react";
import { Button, BottonGroup, ButtonGroup, ListGroup } from "react-bootstrap";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
	const [loading, setLoading] = useState(true);
	const [tabs, setTabs] = useState([]);
	const [tabTitles, setTabTitles] = useState([]);
	const [value, setValue] = useState(0);

	useEffect(() => {
		const fetchTabs = async () => {
			const res = await axios.get(url);
      const titles = res.data.map((tab) => tab.company);
			setTabs(res.data);
			setTabTitles(titles);
      setLoading(false);
		};
		fetchTabs();
	}, []);

	const handleButtonClick = (pos) => {
		setValue(pos);
	};

	if (loading) {
    return <h2>Loading...</h2>
	}

	const { title, company, dates, duties } = tabs[value];

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
					<h2>{title}</h2>
          <div className="badge bg-secondary rounded-2">{company}</div>
          <p>{dates}</p>
          <ListGroup>
            {
              duties.map(duty => <ListGroup.Item key={`duty${value}`}><FaAngleDoubleRight /> {duty}</ListGroup.Item>)
            }
          </ListGroup>
				</>
			)}
		</div>
	);
}

export default App;
