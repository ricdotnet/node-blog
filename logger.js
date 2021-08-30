const onHeaders = require('on-headers')
const onFinished = require('on-finished')

module.exports = logger;

function logger() {

  let start;
  let duration;

  return function logger(req, res, next) {

    function log() {
      duration = Date.now() - start;
      console.log(`url: ${req.url} ::: method: ${req.method} ::: time: ${duration}ms`)
    }

    onHeaders(res, () => {
      start = Date.now()
    })

    onFinished(res, log)

    next()
  }
}