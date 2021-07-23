const quotes = [
  {
    quote: "The road to success and ths road to failure are almost exactly the same.",
    author: "Colin R. Davis",
  }, 
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  }, 
  {
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  }, 
  {
    quote: "All progress takes place outside the comfort zone.",
    author: "Micheal John Bodak",
  }, 
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  }, 
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  }, 
  {
    quote: "Success seems to be connected with action. Successful people keep moving.",
    author: "Conrad Hilton",
  }, 
  {
    quote: "In order to succeed, we must first believe that we can.",
    author: "Nikos Kazantzakis",
  }, 
  {
    quote: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  }, 
  {
    quote: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller",
  }, 
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author

