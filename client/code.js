let scores = {};
let scoresDoc = '';
let wiki = '';
let docs = ['wiki1a.txt', 'wiki1b.txt', 'wiki1c.txt', 'wiki2.txt', 'wiki3.txt', 'wiki4.txt', 'wiki5.txt', 'wiki6.txt', 'wiki7.txt', 'wiki8.txt', 'wiki9.txt', 'wiki10.txt', 'wiki11.txt', 'wiki12.txt', 'wiki13.txt', 'wiki14.txt', 'wiki15.txt', 'wiki16.txt', 'wiki17.txt', 'wiki18.txt', 'wiki19.txt', 'wiki20.txt', 'wiki20.txt', 'wiki21.txt', 'wiki22.txt', 'wiki23.txt', 'wiki24.txt';
let article = docs[Math.floor(Math.random()) * docs.length]; //Picks a random Wiki file.
preview()

// Making a preview of the article.
async function preview() {
    const response = await fetch(article, {mode: 'no-cors'});
    const data = await response.text();
    const titles = data.split('\n'); // Splits lines.
    wiki = titles[Math.floor(Math.random() * titles.length)]; // Picks a random Wiki title.
    console.log(wiki);
    document.getElementById('wikiPage').src = "https://en.wikipedia.org/wiki/" + wiki;
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
