import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



export default function About() {
	
	function getActive() {
	var sdivContainer = document.getElementById("sdiv");
	console.log(sdivContainer);
	var alltabs = sdivContainer.getElementsByClassName("tabvertical");

	for (var i = 0; i < alltabs.length; i++) {
		alltabs[i].addEventListener("click", function() {
			var clicked = document.getElementsByClassName("active");
			clicked[0].className = clicked[0].className.replace(" active", "");
			this.className += " active";
		});
	}
}

	return (
		<>
			<Heading content="About" />
			
				<Tabs className="abouttabs">
					<TabList className="Tabs">
						<Tab>LOREM</Tab>
						<Tab>IPSUM</Tab>
						<Tab>DOLOR</Tab>
					</TabList>
				
					<TabPanel id="Lorem" className="Tabscontent">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet vehicula purus. 
						Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan, augue a posuere sollicitudin, 
						arcu magna imperdiet augue, quis condimentum mi urna id tortor. Maecenas et sem in enim maximus vehicula vel vel odio. 
						Nulla mi purus, auctor vel rutrum ac, aliquam et ipsum. Nunc consequat justo id volutpat sodales. 
						Sed ultricies dui id ipsum sollicitudin, sed fringilla est ornare. </p>
					</TabPanel>
					<TabPanel id="Ipsum" className="Tabscontent">
						<p>Ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet vehicula purus. 
						Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan, augue a posuere sollicitudin, 
						arcu magna imperdiet augue, quis condimentum mi urna id tortor. Maecenas et sem in enim maximus vehicula vel vel odio. 
						Nulla mi purus, auctor vel rutrum ac, aliquam et ipsum. Nunc consequat justo id volutpat sodales. 
						Sed ultricies dui id ipsum sollicitudin, sed fringilla est ornare. </p>
					</TabPanel>
					<TabPanel id="Dolor" className="Tabscontent">
						<p>Dolor sit amet, consectetur adipiscing elit. Nullam sit amet vehicula purus. 
						Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan, augue a posuere sollicitudin, 
						arcu magna imperdiet augue, quis condimentum mi urna id tortor. Maecenas et sem in enim maximus vehicula vel vel odio. 
						Nulla mi purus, auctor vel rutrum ac, aliquam et ipsum. Nunc consequat justo id volutpat sodales. 
						Sed ultricies dui id ipsum sollicitudin, sed fringilla est ornare. </p>
					</TabPanel>
					</Tabs>
							

					<div className="smalldiv">
						<div >
							<button className="tabvertical">Lorem</button>
							<div className="smallcontent" id="Loremp">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet vehicula purus. 
							Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan, augue a posuere sollicitudin, 
							arcu magna imperdiet augue, quis condimentum mi urna id tortor. Maecenas et sem in enim maximus vehicula vel vel odio. 
							Nulla mi purus, auctor vel rutrum ac, aliquam et ipsum. Nunc consequat justo id volutpat sodales. 
							Sed ultricies dui id ipsum sollicitudin, sed fringilla est ornare.</p>
							</div> 
						</div>
						<div>
							<button className="tabvertical">Ipsum</button>
							<div className="smallcontent" id="Ipsump">
								<p>Ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet vehicula purus. 
							Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan, augue a posuere sollicitudin, 
							arcu magna imperdiet augue, quis condimentum mi urna id tortor. Maecenas et sem in enim maximus vehicula vel vel odio. 
							Nulla mi purus, auctor vel rutrum ac, aliquam et ipsum. Nunc consequat justo id volutpat sodales. 
							Sed ultricies dui id ipsum sollicitudin, sed fringilla est ornare.</p>
							</div>
						</div>
						<div >
							<button className="tabvertical">Dolor</button>
							<div className="smallcontent" id="Dolorp">
								<p>Dolor sit amet, consectetur adipiscing elit. Nullam sit amet vehicula purus. 
							Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan, augue a posuere sollicitudin, 
							arcu magna imperdiet augue, quis condimentum mi urna id tortor. Maecenas et sem in enim maximus vehicula vel vel odio. 
							Nulla mi purus, auctor vel rutrum ac, aliquam et ipsum. Nunc consequat justo id volutpat sodales. 
							Sed ultricies dui id ipsum sollicitudin, sed fringilla est ornare.</p>
							</div>
						</div>
					</div>
			
		</>
	);
}
