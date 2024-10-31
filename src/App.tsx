import { useState } from "react";
import "./App.css";
import EmployeeCard from "./components/EmployeeCard";

const sampleEmployee = {
	name: {
		first: "Evan",
		last: "Turner",
	},
	email: "evan.turner@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/42.jpg",
	},
};

function App() {
	const [employee, setEmployee] = useState(sampleEmployee);
	const getEmployee = () => {
		fetch("https://randomuser.me/api?nat=en")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			});
	};
	return (
		<div className="App">
			<EmployeeCard employee={employee} />
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</div>
	);
}

export default App;
