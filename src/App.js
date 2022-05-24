import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/public/home/HomePage";
import Nav from "./components/layout/Nav";
import "./App.css";
import Contact from "./components/public/contact/Contact";
import About from "./components/public/about/About";




function App() {
	return (
		
			<Router>
				<Nav />

				<div className="container">
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						
					</Switch>
				</div>
			</Router>
		
	);
}

export default App;
