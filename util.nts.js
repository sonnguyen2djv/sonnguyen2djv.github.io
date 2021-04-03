/**@param {number} time
 * @return {Promise<void>}*/
function sleep(time) {
  return new Promise(resolve=>setTimeout(resolve, time));
}

// Export.
module && (module.exports = {
  sleep,
});
