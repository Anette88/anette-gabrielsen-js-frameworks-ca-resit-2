import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import {BASE_URL} from "../../../constants/api";
import axios from "axios";



export default function HomePage() {
		const [result, setResult] = useState(null);
		const [loading, setLoading] = useState(true);
 		const [error, setError]= useState(null);
		const [search, setSearch] = useState([""]);
		 

		

		useEffect(
			function () {
				async function fetchData() {
					try {
						const response = await axios.get(BASE_URL);
						//console.log("response", response);
						setResult(response.data);
						
					} catch (error) {
						setError(error.toString());
					} finally {
						setLoading(false);
					}
				}
				fetchData();
			},
			[]
		);

		if (loading) {
			return <div className="loader"></div>;
		}

		if (error) {
			return <div>An error occured: {error}</div>
		}
		const getSearch = (happening)=>{
			const SearchValue = happening.target.value;
			//console.log(SearchValue);
			setSearch(SearchValue);
		}



	return (
		<>
		<div>
		<Heading content="Universities" />
		<div className="search-container hidden-xs">
 					<form action="/action_page.php">
    			  	<input type="text" className="form-control" placeholder="Type to filter" name="search" onChange={getSearch}/>
  				</form>
				</div>
				<div>
		{result
			.filter(typematch => typematch.name.includes(search))
			.map(typematch => <div className="schools" key={typematch.id}>
								<p className="p-schools" key={typematch.name}>{typematch.name}</p>	
								<p className="p-schools" key={typematch.web_pages}>{typematch.web_pages}</p>
							</div>)
			}
</div>
		
		</div>
		</>
	);
}
