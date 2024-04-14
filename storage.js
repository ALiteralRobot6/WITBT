import {scores} from './code.js';
let dictString = JSON.stringify(scores);
fs.writeFile('pollingData', dictString, (err) => {
if (err) throw err;
console.log('Dictionary written to file');
});
