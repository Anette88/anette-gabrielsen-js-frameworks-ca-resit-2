
import { Link, useHistory } from "react-router-dom";
import menubars from "../../images/menubars.jpeg"


export default function Nav() {


	return (
		<nav>
			<div className="navdiv">
			<h3>JS Frameworks Resit 2</h3>
			<div className="navlink">
				<Link className="navbar" to="/">Home</Link>
				<Link className="navbar" to="/about">About</Link>
				<Link className="navbar" to="/contact">Contact</Link>
			</div>
			</div>
			<div>
				<div className="dropdown">
				<h3>JS Frameworks Resit 2</h3>
					<button className="dropbutton"><img src={menubars}></img></button>
					<div className="dropdown-content">
						<a><Link className="navbar" to="/">Home</Link></a>
						<a><Link className="navbar" to="/about">About</Link></a>
						<a><Link className="navbar" to="/contact">Contact</Link></a>
					</div>
				</div>
			</div>
		</nav>
	);
};

