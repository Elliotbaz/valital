exports.handleErrorResponse = (error, res, info, code) => {
    const statusCode = error.response?.status || code
    res.status(statusCode).json({
        info: info,
        message: error.message
    });
}