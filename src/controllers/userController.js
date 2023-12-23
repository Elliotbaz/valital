const { handleErrorResponse } = require('../utils/errorHandler.js')

exports.whoMadeMe = (req, res) => {
    try {
        res.status(200).send("Elliot Bazuaye - Fun Fact: I quickly pick up new technologies, most recently, I just picked up LangChain, a wrapper that gives LLMs super powers.!") //returning just a string as specificed in the instruction
    } catch (error) {
        handleErrorResponse(error, res, "An error occurred while processing your request.", 500);
    }
}
