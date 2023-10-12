import "./CardDetails.css";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Grid, Dialog, Button, TextField, DialogActions, DialogContent,DialogContentText, Typography, Slider, Box} from "@mui/material";

import {
	motion,
	useScroll,
	useMotionValue,
	useVelocity,
	useTransform,
	useSpring,
} from "framer-motion";

function CardDetails() {
    const dispatch = useDispatch()


	const details = useSelector((store) => store.searchResults);
    const carousel = useRef();

    const [width, setWidth] = useState(0);


    const chosen = {
        quantity:1,
        name:'',
        more:''
    }

    const [choice, setChoice] = useState(chosen)
    const [open, setOpen] = useState(false)
    const [cache, setCache] = useState('')

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[]);

	const [add, setAdd] = useState([]);

	const makeChoice = async (picked) => {
        let z = 0
        try {
            setChoice({...choice, quantity:1, name: picked.name, more: picked} )
            setCache(picked.name)
            setAdd([...add, picked])
        } catch (error) {
            console.log('PROBLEM WITH TRYCATCHFINALLY',error);

        } finally{
            console.log('in finally', z);
             setOpen(!open);
             console.log('--- CACHE -----in finally', cache)
             console.log('--------CHOICE ---- in finally', choice);
             console.log('------------ ADD  ---- in finally', add);


        }
        // console.log('------cached', cache)
        // console.log('-----------chosen', choice);
	};


	const addSelection = (mtg) => {
      console.log('WE ADDED IT!!!!', mtg);
      dispatch({type:'ADD_TO_DECK', payload: {...mtg.more, quantity:mtg.quantity}})
      setOpen(!open)
	};
    console.log('add on main', add);
    console.log("choice on main", choice);

	return (
		<>
			<motion.div className="carousel">
				<motion.div
					ref={carousel}
					className="inner-carousel"
					drag="x"
					dragConstraints={{ right: 1, left: -width }}
					// dragElastic={1}
					// style={{ move, scale }}
					whileTap={{ cursor: "grabbing" }}
				>
					{details.map(
						(card, i) =>
							card.imageUrl && (
								<motion.div
									className="item"
									key={i}
									// onClick={() => console.log(card)}
								>
									<button
										style={{
											marginBottom: "10px",
											align: "center",
										}}
										onClick={() => makeChoice(card)}
									>
										Add to deck
									</button>
									<motion.img
										id={i}
										src={card.imageUrl}
										alt={`picture of ${card.name} magic card`}
										className="shape-card"
										draggable="false"
										initial={{ opacity: 0.25, scale: 0.65 }}
										whileInView={{ opacity: 1, scale: 1 }}
									/>
								</motion.div>
							)
					)}
				</motion.div>
			</motion.div>
			<Dialog open={open} onClose={() => setOpen(!open)}>
				<DialogContent>
					<DialogContentText>
						{`How many ${choice.name} do you want to add to your deck?`}
					</DialogContentText>
					<Slider
						sx={{ my: 2 }}
						aria-label="Always visible"
						defaultValue={1}
						min={1}
						max={4}
						getAriaValueText={(value) => `${value}`}
						step={1}
						marks={[
							{ value: 1, label: "1" },
							{ value: 2, label: "2" },
							{ value: 3, label: "3" },
							{ value: 4, label: "4" },
						]}
						valueLabelDisplay="on"
						onChange={(e) =>
							setChoice({ ...choice, quantity: e.target.value })
						}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(!open)}>Cancel</Button>
					<Button onClick={() => addSelection(choice)}>
						confirm quantity
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default CardDetails;
