function logInfo(message) {
  console.log(`ℹ️  [INFO]: ${message}`);
}

function logError(message) {
  console.error(`❌  [ERROR]: ${message}`);
}

module.exports = {
  logInfo,
  logError,
};
