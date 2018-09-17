module.exports = getUserAgentNode

const osName = require('os-name')

function getUserAgentNode () {
  return `Node.js/${process.version} (${osName()}; ${process.arch})`
}
