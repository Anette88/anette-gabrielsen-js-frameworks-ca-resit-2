
import { Link, useHistory } from "react-router-dom";


export default function Nav() {
	

	

	return (
		<nav>
			<h3>JS Frameworks Resit 2</h3>
			<div className="navlink">
				<Link className="navbar" to="/">Home</Link>
				<Link className="navbar" to="/about">About</Link>
				<Link className="navbar" to="/contact">Contact</Link>
			</div>
		</nav>
	);
};

