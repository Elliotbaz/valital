const axios = require('axios');
const { findVerbInfo } = require('../utils/wordHelper')
const { handleErrorResponse } = require('../utils/errorHandler')

exports.getWord = async (req, res) => {
    const { word } = req.params;

    try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/`);
        const entries = response.data;
        const verbInfo = findVerbInfo(entries);

        if (verbInfo.example) {
            res.status(200).json({ example: verbInfo.example });
        } else {
            res.status(200).json({ definition: verbInfo.definition });
        }
    } catch (error) {
        handleErrorResponse(error, res, "Error fetching word definition", 404);
    }
};

