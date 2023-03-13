const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}


const displayQuote = quote => {
    const getQuote = document.getElementById('quote');
    getQuote.innerHTML = quote.quote;

}

// loadQuote();