import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";


export default function About() {
	return (
		<>
			<Heading content="About" />
			<div className="aboutdiv">
			<div className="firstdiv">
			<h2>Lorem</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet vehicula purus. 
				Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan, augue a posuere sollicitudin, 
				arcu magna imperdiet augue, quis condimentum mi urna id tortor. Maecenas et sem in enim maximus vehicula vel vel odio. 
				Nulla mi purus, auctor vel rutrum ac, aliquam et ipsum. Nunc consequat justo id volutpat sodales. 
				Sed ultricies dui id ipsum sollicitudin, sed fringilla est ornare. </p>
			</div>
			<div className="seconddiv">
			<h2>Ipsum</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet vehicula purus. 
				Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan, augue a posuere sollicitudin, 
				arcu magna imperdiet augue, quis condimentum mi urna id tortor. Maecenas et sem in enim maximus vehicula vel vel odio. 
				Nulla mi purus, auctor vel rutrum ac, aliquam et ipsum. Nunc consequat justo id volutpat sodales. 
				Sed ultricies dui id ipsum sollicitudin, sed fringilla est ornare. </p>
			</div>
			<div className="thirddiv">
			<h2>Dolor</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet vehicula purus. 
				Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan, augue a posuere sollicitudin, 
				arcu magna imperdiet augue, quis condimentum mi urna id tortor. Maecenas et sem in enim maximus vehicula vel vel odio. 
				Nulla mi purus, auctor vel rutrum ac, aliquam et ipsum. Nunc consequat justo id volutpat sodales. 
				Sed ultricies dui id ipsum sollicitudin, sed fringilla est ornare. </p>
			</div>
			</div>
		</>
	);
}
