const m = require('moment');

const christmas = m('12252016','MMDDYYYY');
const now = m();

const days = christmas.diff(now,'days');

console.log(days);
