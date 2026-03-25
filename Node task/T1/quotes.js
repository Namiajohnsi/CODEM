const quotes = [
  "Success is not final, failure is not fatal.",
  "Believe in yourself.",
  "Dream big and dare to fail.",
  "Hard work beats talent.",
  "Stay positive and work hard."
];

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

module.exports = { getRandomQuote };
