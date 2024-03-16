
let jokesarr = [
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What did one plate say to the other plate? Dinner's on me!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call fake spaghetti? An impasta!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "How does a penguin build its house? Igloos it together!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a fish with no eyes? Fsh!",
    "How does a cucumber become a pickle? It goes through a jarring experience!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What's the best thing about Switzerland? I don't know, but their flag is a big plus!",
    "Why did the coffee file a police report? It got mugged!",
    "Why was the math book sad? Because it had too many problems!",
]

function randomjoke() {
    const jokeindex = Math.floor(Math.random()*jokesarr.length)
    const randomjoke = jokesarr[jokeindex]
    return randomjoke
}

let btn = document.getElementById("btn")
let joke = document.getElementById("joke")
btn.addEventListener("click", () => {
    joke.insertAdjacentHTML("beforeend",`<p>${randomjoke()}</p>`)
})
