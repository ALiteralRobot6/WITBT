import {}
let dictString = JSON.stringify(scores);
fs.writeFile('mytextfile.txt', dictString, (err) => {
if (err) throw err;
console.log('Dictionary written to file');
});
