
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Nav() {
	

	

	return (
		<nav>
			<h3>JS Frameworks Resit 2</h3>
			<div className="navlink">
				<Link className="navbar" to="/">Home</Link>
				<Link className="navbar" to="/about">About</Link>
				<Link className="navbar" to="/contact">Contact</Link>
			</div>
			<div className="navdropdown">
				<div className="menucontent">
					<Link className="navbar" to="/">Home</Link>
					<Link className="navbar" to="/about">About</Link>
					<Link className="navbar" to="/contact">Contact</Link>
				</div>

			</div>
		</nav>
	);
};

