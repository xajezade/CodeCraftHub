const responseHandler = (res, status, message, data = null) => {
    res.status(status).json({ message, data });
};

module.exports = responseHandler;