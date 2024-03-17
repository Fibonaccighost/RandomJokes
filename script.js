let jokes = [];

function fetchJokes() {
    var limit = 10;
    var apiKey = 'ZuyRhYwYrB4NvodU+Gv4iQ==aSwL3XLlr43rAq7T'; // Replace this with your actual API key

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/jokes?limit=' + limit,
        headers: { 'X-Api-Key': apiKey },
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            jokes = result; // Update the jokes array with the fetched jokes
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

function randomJoke() {
    const jokeIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[jokeIndex];
    return randomJoke;
}

// Fetch jokes when the page loads
fetchJokes();

let btn = document.getElementById("btn");
let joke = document.getElementById("joke");

btn.addEventListener("click", () => {
    // Make sure jokes array is not empty before trying to get a random joke
    if (jokes.length > 0) {
        const randomJokeObject = randomJoke();
        if (randomJokeObject.hasOwnProperty('joke')) {
            joke.innerHTML = `<p>${randomJokeObject.joke}</p>`;
        } else {
            joke.innerHTML = "<p>No joke text found for this joke.</p>";
        }
    } else {
        joke.innerHTML = "<p>No jokes available. Please try again later.</p>";
    }
});
