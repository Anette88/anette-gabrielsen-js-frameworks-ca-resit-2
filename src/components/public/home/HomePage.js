import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import {BASE_URL} from "../../../constants/api";
import axios from "axios";


export default function HomePage() {
		const [result, setResult] = useState(null);
		const [loading, setLoading] = useState(true);
 		const [error, setError] = useState(null);

		let history = useHistory();

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
			return <div>Loading...</div>;
		}

		if (error) {
			return <div>An error occured: {error}</div>
		}




	return (
		<>
		<div>
		<Heading content="Home" />
		{result.map(function (results) {
			return <div className="schools" key={results.id}>
				<p>{results.name}</p>
				<p>{results.web_pages}</p>
			</div>;
		})}
		</div>
		</>
	);
}
