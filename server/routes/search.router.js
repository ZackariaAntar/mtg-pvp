const express = require("express");
const axios = require("axios");
const router = express.Router();
// const pool = require("../modules/pool");
const mtg = require('mtgsdk')


router.post('/', (req, res)=>{
    const { name, text, types, colors, cmc } = req.body;

    // console.log(
	// 	"----------------------------------- arrived at search router looking for cards -----------------------------------\n\n"        );
    // console.log(
	// 	"THIS IS THE SEARCH",
	// 	req.body
	// );


    mtg.card
		.where({
			name: `${name}`,
			text: `${text}`,
			types: `${types}`,
			colors: `${colors}`,
			cmc: `${cmc}`,
		})
		.then((results) => {
			res.send(results);
		})
		.catch((error) => {
			console.log(error);
			res.sendStatus(500)
		});

    // axios.get(`http://api.magicthegathering.io/v1/cards?name=${name}&pageSize=10`)
    // .then((response)=>{
    //     console.log(response.data.cards,'results from search');
    //     res.send(response.data.cards)

    // }).catch((err)=>{
    //     res.sendStatus(500);
    //     console.log('ISSUE WITH FINDING CARD',err);

    // })
})

module.exports = router;
