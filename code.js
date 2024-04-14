let scores = {};
let wiki = '';
let docs = ['https://aliteralrobot6.github.io/WITBT/wiki1a.txt', 'https://aliteralrobot6.github.io/WITBT/wiki1b.txt', 'https://aliteralrobot6.github.io/WITBT/wiki1c.txt'];
let article = docs[Math.floor(Math.random()) * docs.length]; //Picks a random Wiki file.
preview();
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
function upvote() {
    preview();
    if (!scores.hasOwnProperty(wiki)) {
        scores[wiki] = 1;
    } else {
        scores[wiki] = scores[wiki] + 1;
    }
    console.log(scores);
    let jsonscores = JSON.stringify(scores);
}

function downvote() {
    preview();
    if (!scores.hasOwnProperty(wiki)) {
        scores[wiki] = -1;
    } else {
        scores[wiki] = scores[wiki] - 1;
    }
    console.log(scores);
    let jsonscores = JSON.stringify(scores);
}
