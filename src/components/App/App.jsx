import React, { useEffect } from "react";
import {
	HashRouter as Router,
	Redirect,
	Route,
	Switch,
	Link,
} from "react-router-dom";

import {Container} from '@mui/material'

import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../SearchBar/SearchBar";
import ResultGallery from "../ResultGallery/ResultGallery";

import USBS from "../USBS/USBS";

function App() {
	return (
		<Container
		sx={{my:10}}
		xs={12}
		>
			{/* <USBS /> */}

            <SearchBar />
            <ResultGallery />

		</Container>
	);
}
export default App;
