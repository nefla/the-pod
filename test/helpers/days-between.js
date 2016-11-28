// Taken from: http://stackoverflow.com/a/15289883/6598709
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function daysBetween(a, b) {
  // Discard the time and time-zone information.
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

module.exports = daysBetween
