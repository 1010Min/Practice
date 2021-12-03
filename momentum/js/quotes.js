const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard",
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "Andre Gide",
    },
    {
        quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
        author: "Marilyn Monroe",
    },
    {
        quote: "It does not do to dwell on dreams and forget to live.",
        author: "J.K. Rowling",
    },
    {
        quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        author: "Mark Twain",
    },
    {
        quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        author: "William Shakespeare",
    },
    {
        quote: "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
        author: "Mark Twain",
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
    },
];

const quote = document.querySelector("#qoute span:first-child");
const author = document.querySelector("#qoute span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;