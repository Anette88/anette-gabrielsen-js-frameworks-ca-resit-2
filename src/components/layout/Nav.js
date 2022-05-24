
import { Link, useHistory } from "react-router-dom";


export default function Nav() {
	

	

	return (
		<nav>
			<Link className="navbar" to="/">Home</Link>
			<Link className="navbar" to="/about">About</Link>
			<Link className="navbar" to="/contact">Contact</Link>
		</nav>
	);
};

