const {StatusCode} = require("http-status-codes")

const notFound = (req, res) => res.status(StatusCode.notFound).send('Route does not exist')

module.exports = notFound
