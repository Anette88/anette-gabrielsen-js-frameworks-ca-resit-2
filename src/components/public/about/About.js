import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function About() {
	return (
		<>
			<Heading content="About" />
			
				<Tabs>
					<TabList>
						<Tab>LOREM</Tab>
						<Tab>IPSUM</Tab>
						<Tab>DOLOR</Tab>
					</TabList>
				
				
					<TabPanel id="Lorem">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet vehicula purus. 
						Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan, augue a posuere sollicitudin, 
						arcu magna imperdiet augue, quis condimentum mi urna id tortor. Maecenas et sem in enim maximus vehicula vel vel odio. 
						Nulla mi purus, auctor vel rutrum ac, aliquam et ipsum. Nunc consequat justo id volutpat sodales. 
						Sed ultricies dui id ipsum sollicitudin, sed fringilla est ornare. </p>
					</TabPanel>
					<TabPanel id="Ipsum">
						<p>Ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet vehicula purus. 
						Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan, augue a posuere sollicitudin, 
						arcu magna imperdiet augue, quis condimentum mi urna id tortor. Maecenas et sem in enim maximus vehicula vel vel odio. 
						Nulla mi purus, auctor vel rutrum ac, aliquam et ipsum. Nunc consequat justo id volutpat sodales. 
						Sed ultricies dui id ipsum sollicitudin, sed fringilla est ornare. </p>
					</TabPanel>
					<TabPanel id="Dolor">
						<p>Dolor sit amet, consectetur adipiscing elit. Nullam sit amet vehicula purus. 
						Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan, augue a posuere sollicitudin, 
						arcu magna imperdiet augue, quis condimentum mi urna id tortor. Maecenas et sem in enim maximus vehicula vel vel odio. 
						Nulla mi purus, auctor vel rutrum ac, aliquam et ipsum. Nunc consequat justo id volutpat sodales. 
						Sed ultricies dui id ipsum sollicitudin, sed fringilla est ornare. </p>
					</TabPanel>
					</Tabs>
				
			
		</>
	);
}
