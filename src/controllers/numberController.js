const { numberToString } = require('../data/numberToString.js');

exports.numberToWord = (req, res) => {
    const { number } = req.body;

    // checking what the user passed to us if it is within the range of numbers
    if (number === undefined || number < 0 || number > 9) {
        return res.status(400).send({ error: `Invalid number: ${number}. Must be a number from 0 - 9.` });
    }

    // simulating that we get this data coming from a db, so i just add this extra check to be sure i get something back 
    const converted = numberToString(number);
    if (!converted) {
        return res.status(400).send({ error: `Error getting '${number}' converted to words.` });
    }

    return res.status(200).json({ word: converted }); //returns the word ("zero","one"..."nine") of that number in english
};
