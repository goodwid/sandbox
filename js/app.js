const Preferences = require('preferences');

const prefs = new Preferences('sandbox');
prefs.foo = 'sdfasdf';
if (!prefs.bar) console.log('nothin here.');
console.log('prefs: ', prefs);
