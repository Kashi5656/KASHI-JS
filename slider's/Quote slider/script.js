
    const quotes = [
      { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
      { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
      { text: "Do not watch the clock. Do what it does. Keep going.", author: "Sam Levenson" },
      { text: "Everything you can imagine is real.", author: "Pablo Picasso" }
    ];

    let index = 0;
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const quoteBox = document.getElementById('quoteBox');

    function showQuote(i, direction = 1) {
      quoteBox.style.transform = `rotateY(${direction * 20}deg) scale(0.95)`;
      setTimeout(() => {
        quoteText.textContent = `"${quotes[i].text}"`;
        quoteAuthor.textContent = `— ${quotes[i].author}`;
        quoteBox.style.transform = 'rotateY(0deg) scale(1)';
      }, 300);
    }

    function nextQuote() {
      index = (index + 1) % quotes.length;
      showQuote(index, 1);
    }

    function prevQuote() {
      index = (index - 1 + quotes.length) % quotes.length;
      showQuote(index, -1);
    }

    // Auto play every 5 seconds
    setInterval(nextQuote, 5000);

    // Initial quote
    showQuote(index);

