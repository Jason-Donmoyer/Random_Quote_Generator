// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*
This is the array that comtains the quote objects.
There are four possible key: value pairs.
quote: a string representing the quote. This property is required.
source: a string identifying the source of the quote. This is also required.
citation: a string that tells if there is a known source of the quote, such as a publication. This is optional.
year: a number to represent the year of the quote if known. Also optional.
*/
var quotes = [
	{
		quote: 'a',
		source: 'aye',
	},
	{
		quote: 'b',
		source: 'bee',
	},
	{
		quote: 'c',
		source: 'cee',
	},
	{
		quote: 'd',
		source: 'dee',
	},
	{
		quote: 'e',
		source: 'eee',
	}
];
var quoteObject;
function getRandomQuote( list ) {
	var upper = list.length;
	quoteObject = list[ Math.floor( Math.random() * upper) ];
	return quoteObject;
}

function printQuote() {
	var quote = getRandomQuote(quotes);
	var message = '<p class="quote">' + quote.quote + '</p>';
	message += '<p class="source">' + quote.source;
  		//<span class="citation"> [citation here] </span>
  		//<span class="year"> [year here] </span>
	message += '</p>';
	document.getElementById('quote-box').innerHTML = message;
}

printQuote();


