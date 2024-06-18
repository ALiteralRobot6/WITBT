let scores = {};
let scoresDoc = '';
let wiki = '';
preview()

// Making a preview of the article.
async function preview() {
    // The following is for testing purposes.
    let docs = ['client/wiki1a.txt', 'client/wiki1b.txt', 'client/wiki1c.txt', 'client/wiki2.txt', 'client/wiki3.txt', 'client/wiki4.txt', 'client/wiki5.txt', 'client/wiki6.txt', 'client/wiki7.txt', 'client/wiki8.txt', 'client/wiki9.txt', 'client/wiki10.txt', 'client/wiki11.txt', 'client/wiki12.txt', 'client/wiki13.txt', 'client/wiki14.txt', 'client/wiki15.txt', 'client/wiki16.txt', 'client/wiki17.txt', 'client/wiki18.txt', 'client/wiki19.txt', 'client/wiki20.txt', 'client/wiki20.txt', 'client/wiki21.txt', 'client/wiki22.txt', 'client/wiki23.txt', 'client/wiki24.txt'];
    console.log(docs);
    let wikiFile = docs[Math.floor(Math.random() * docs.length)];
    const response = await fetch("https://aliteralrobot6.github.io/WITBT/" + wikiFile);
    const text = await response.text();
    var lines = text.split('\n');
    var randomWiki = lines[Math.floor(Math.random() * lines.length)];
    console.log(randomWiki);

    // Picking a random Wiki file.
    let file = docs[Math.floor(Math.random() * docs.length)];
    console.log(file);
}

// Upvoting and downvoting.
async function upvote() {
    if (!scores.hasOwnProperty(wiki)) {
        scores[wiki] = 1;
    } else {
        scores[wiki] = scores[wiki] + 1;
    }
    const scoresDoc = JSON.stringify(scores);
    console.log(scoresDoc);
    preview();
}

async function downvote() {
    if (!scores.hasOwnProperty(wiki)) {
        scores[wiki] = -1;
    } else {
        scores[wiki] = scores[wiki] - 1;
    }
    const scoresDoc = JSON.stringify(scores);
    console.log(scoresDoc);
    preview();
}
