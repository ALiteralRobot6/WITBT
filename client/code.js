let scores = {};
let wiki = '';
let docs = ['wiki1a.txt', 'wiki1b.txt', 'wiki1c.txt'];
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
function upvote() {
    if (!scores.hasOwnProperty(wiki)) {
        scores[wiki] = 1;
    } else {
        scores[wiki] = scores[wiki] + 1;
    }
    console.log(scores);
    preview();
}

function downvote() {
    if (!scores.hasOwnProperty(wiki)) {
        scores[wiki] = -1;
    } else {
        scores[wiki] = scores[wiki] - 1;
    }
    console.log(scores);
    preview();
}
