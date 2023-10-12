const express = require("express");
const axios = require("axios");
const router = express.Router();
const pool = require("../modules/pool");

router.post('/', (req, res)=>{
    // console.log('arrived on the card adder', req.body);
    let { name, colors, cmc, manaCost, type, text, id, power, toughness, imageUrl, quantity } = req.body;
    colors = colors.toString()
    let values = []
    power && toughness
		? (values = [
				name,
				colors,
				cmc,
				manaCost,
				type,
                text,
				id,
				power,
				toughness,
				imageUrl,
				quantity,
		  ])
		: (values = [
				name,
				colors,
				cmc,
				manaCost,
				type,
                text,
				id,
				'none',
				'none',
				imageUrl,
				quantity,
		  ]);
    // console.log( name, colors, cmc, manaCost, type, id, power, toughness, imageUrl, quantity )
    const queryText = `
    INSERT INTO deck(name, colors, cmc, mana_cost, type, text, mtg_id, power, toughness, url, quantity)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11); `;
    pool.query(queryText, values)
		.then((result) => {
            console.log(result);
            res.sendStatus(201)
        })
		.catch((err) => {
            console.log(err);
            res.sendStatus(500)
        });


})

router.get('/', (req,res)=>{
    const queryText = `SELECT * FROM deck;`
    pool.query(queryText)
    .then((result)=>{
        console.log(result.rows);
        res.send(result.rows)
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500)
    })
})

module.exports = router

// "card_id", "img", "card_name", "cmc", "color_identity", "description", "rulings")

// name, colors, cmc, manaCost, type, text, mtg_id, power, toughness, url, quantity