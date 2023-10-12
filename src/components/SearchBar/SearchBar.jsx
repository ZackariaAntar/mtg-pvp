import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Box,
	TextField,
	Checkbox,
	Button,
	MenuItem,
	InputLabel,
	Select,
	FormGroup,
    FormControl,
    FormControlLabel,
    Container,
	Typography
} from "@mui/material";
import LoadingScreen from "../LoadingScreen/LoadingScreen";


function SearchBar() {
    const dispatch = useDispatch()
    // const drop = { mx: 0.75, width: 159, my: 1 };

    const cardTypes = useSelector((store) => store.cardTypes)
    const loading = useSelector((store) => store.loading)

	const [mana, setMana] = useState([])


    const manaIcon = {
		 red: "https://w.wiki/7eN$",
		 blue: "https://w.wiki/7eP5",
		 black: "https://w.wiki/7eP7",
		 green: "https://w.wiki/7ePA",
		 white: "https://w.wiki/7eP9",
		 colorless: "https://w.wiki/7eP8",
		 payX: "https://w.wiki/7ePB",
	}

    const [searchTerm, setSearchTerm] = useState({
		name: "",
		text: "",
		types: "",
		cmc: '',
	})

    const findCards = (e) =>{
        e.preventDefault()
		let {name, text, types, cmc} = searchTerm
		if(name || text|| types || cmc || mana.length>0){
			let data = {...searchTerm, colors:mana}
			dispatch({ type: "SET_LOADING", payload: true});
			dispatch({ type: "GET_CARD_BY_NAME", payload: data });
			setSearchTerm({});
			setMana([]);
		}else{
			alert('Try adding something to your search')
		}
    }

	const addColors = (selected) => {
		let colorArray = [...mana]

		if (!colorArray.includes(selected)){
			colorArray.push(selected)
		} else{
			colorArray = colorArray.filter((entry)=> entry !== selected)

		}
		return colorArray
	}


    return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<Container
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Box
						component="form"
						autoComplete="off"
						sx={{
							mb: 5,
							bgcolor: "aliceblue",
							padding: 3,
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							height: "auto",
							width: "95%",
							borderRadius: 2,
							boxShadow: "5px 8px 8px #515152",
						}}
					>
						<TextField
							id="standard-basic"
							label="Card Name"
							variant="standard"
							placeholder="Enter card name"
							InputLabelProps={{ shrink: true }}
							value={searchTerm.name}
							onChange={(e) =>
								setSearchTerm({
									...searchTerm,
									name: e.target.value,
								})
							}
							sx={{ mb: 1 }}
						/>
						<TextField
							id="standard-basic"
							label="Search by text"
							variant="standard"
							placeholder="Rulings text"
							InputLabelProps={{ shrink: true }}
							value={searchTerm.text}
							onChange={(e) =>
								setSearchTerm({
									...searchTerm,
									text: e.target.value,
								})
							}
							sx={{ my: 2 }}
						/>
						<FormControl sx={{ my: 2 }}>
							<InputLabel>Type</InputLabel>
							<Select
								label="Type"
								value={searchTerm.types}
								onChange={(e) =>
									setSearchTerm({
										...searchTerm,
										types: e.target.value,
									})
								}
							>
								{cardTypes.map((type, i) => (
									<MenuItem key={i} value={type}>
										{type}
									</MenuItem>
								))}
							</Select>
						</FormControl>

						{/* Figure out how to make it add to the color useState only when it is checked, and removed if it is unchecked */}
						<Container
							sx={{
								display: "flex",
								flexDirection: "row",
								flexFlow: "row wrap",
								// justifyContent: "space-evenly",
								alignItems: "center",
								// border: "1px solid black",
								mb: 4,
								padding: 0,
							}}
						>
							<Container
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "flex-start",
									mb: 2,
									padding: 0,
									// border: "1px solid magenta",
									width: "auto",
								}}
							>
								<Typography variant="h6" align="center" sx={{ml:1.25}}>
									Card Colors
								</Typography>

								<FormControl>
									<FormGroup
										sx={{
											display: "flex",
											flexDirection: "row",
											flexFlow: "wrap",
											justifyContent: "space-evenly",
											// border: "1px solid orange",
										}}
									>
										<FormControlLabel
											value="{R}"
											sx={{ mx: 0 }}
											control={
												<Checkbox
													value="R"
													onChange={(e) =>
														setMana(
															addColors(
																e.target.value
															)
														)
													}
												/>
											}
											label={
												<img
													src={manaIcon.red}
													alt=""
													height={20}
												/>
											}
											labelPlacement="bottom"
										/>
										<FormControlLabel
											sx={{ mx: 0 }}
											value="{W}"
											control={
												<Checkbox
													value="W"
													onChange={(e) =>
														setMana(
															addColors(
																e.target.value
															)
														)
													}
												/>
											}
											label={
												<img
													src={manaIcon.white}
													alt=""
													height={20}
												/>
											}
											labelPlacement="bottom"
										/>
										<FormControlLabel
											sx={{ mx: 0 }}
											value="{U}"
											control={
												<Checkbox
													value="U"
													onChange={(e) =>
														setMana(
															addColors(
																e.target.value
															)
														)
													}
												/>
											}
											label={
												<img
													src={manaIcon.blue}
													alt=""
													height={20}
												/>
											}
											labelPlacement="bottom"
										/>
										<FormControlLabel
											sx={{ mx: 0 }}
											value="{B}"
											control={
												<Checkbox
													value="B"
													onChange={(e) =>
														setMana(
															addColors(
																e.target.value
															)
														)
													}
												/>
											}
											label={
												<img
													src={manaIcon.black}
													alt=""
													height={20}
												/>
											}
											labelPlacement="bottom"
										/>
										<FormControlLabel
											sx={{ mx: 0 }}
											value="{G}"
											control={
												<Checkbox
													value="G"
													onChange={(e) =>
														setMana(
															addColors(
																e.target.value
															)
														)
													}
												/>
											}
											label={
												<img
													src={manaIcon.green}
													alt=""
													height={20}
												/>
											}
											labelPlacement="bottom"
										/>
										<FormControlLabel
											sx={{ mx: 0 }}
											value="{C}"
											control={
												<Checkbox
													value="C"
													onChange={(e) =>
														setMana(
															addColors(
																e.target.value
															)
														)
													}
												/>
											}
											label={
												<img
													src={manaIcon.colorless}
													alt=""
													height={20}
												/>
											}
											labelPlacement="bottom"
										/>
										{/* <FormControlLabel
											sx={{ mx: 0 }}
											value="{X}"
											control={
												<Checkbox
													value="X"
													onChange={(e) =>
														setMana(
															addColors(
																e.target.value
															)
														)
													}
												/>
											}
											label={
												<img
													src={manaIcon.payX}
													alt=""
													height={20}
												/>
											}
											labelPlacement="bottom"
										/> */}
									</FormGroup>
								</FormControl>
							</Container>
							<TextField
								type="number"
								label="CMC"
								sx={{ width: 250 }}
								variant="standard"
								placeholder="Converted Mana Cost"
								InputLabelProps={{ shrink: true }}
								value={
									searchTerm.cmc < 0
										? (searchTerm.cmc = 0)
										: searchTerm.cmc
								}
								onChange={(e) =>
									setSearchTerm({
										...searchTerm,
										cmc: e.target.value,
									})
								}
							/>
						</Container>
						<Button variant="contained" onClick={findCards}>
							Search
						</Button>
					</Box>
				</Container>
			)}
		</>
	);
}

export default SearchBar;

{
	/* <form onSubmit={findCards}>
				<input
					type="text"
					placeholder="Enter card name"
					value={searchTerm.name}
					onChange={(e) =>
						setSearchTerm({ ...searchTerm, name: e.target.value })
					}
				/>
				<button type="submit">Search</button>
			</form> */
}