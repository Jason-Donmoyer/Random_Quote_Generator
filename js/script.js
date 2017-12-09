
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
		quote: 'You can be a rank insider as well as a rank outsider.',
		source: 'Robert Froast',
		genre: ' US poet'
	},
	{
		quote: 'I am who I choose to be. I always have been what I chose...though not always what I pleased.',
		source: 'Lois McMaster Bujold',
		citation: 'Memory',
		year: 1996,
		genre: 'US science fiction author'
	},
	{
		quote: 'I envy people who drink. At least they have something to blame everything on.',
		source: 'Oscar Levant',
	},
	{
		quote: "I've had a perfectly wonderful evening. But this wasn't it.",
		source: 'Groucho Marx',
		genre: 'US comedian with Marx Brothers'
	},
	{
		quote: 'I like escalators because an escalator can never break, it can only become stairs.',
		source: 'Mitch Hedberg',
		genre: 'American comedian'
	},
	{
		quote: "One cannot find peace in work or in pleasure, in the world or in a convent, but only in one's soul",
		source: 'W. Somerset Maugham',
		citation: 'The Painted Veil',
		year: 1925,
		genre: 'English dramatist and novelist'
	},
	{
		quote: 'Nothing happens to any thing which that thing is not made by nature to bear',
		source: 'Marcus Aurelius Antoninus',
		citation: 'Meditations',
		genre: 'Roman Emperor, A.D. 161 - 180'
	},
	{
		quote: "I'm telling you, things are getting out of hand. Or maybe I'm discovering that things were never in my hands",
		source: 'Gordon Atkinson',
		citation: 'RealLivePreacher.com Weblog',
		year: 2003,
		genre: "Author of RealLivePreacher.com" 
	},
	{
		quote: 'He who is drowned is not troubled by the rain',
		source: 'Chinese Proverb'
	},
	{
		quote: 'Nothing can be so amusingly arrogant as a young man who just discovered an old idea and thinks it is his own',
		source: 'Sidney J. Harris'
	}

];

// variable to store randomly generated quote selected from array
var quoteObject;

// function to select random quote from the array
function getRandomQuote( list ) {
	var upper = list.length;
	quoteObject = list[ Math.floor( Math.random() * upper) ];
	return quoteObject;
}

// function to check for conditions of the quote and then display to the browser
function printQuote() {
	var quote = getRandomQuote(quotes);
	var message = '<p class="quote">' + quote.quote + '</p>';
	message += '<p class="source">' + quote.source;
	if (quote.citation) {
		message += '<span class="citation">' + quote.citation + '</span>';
	}
  	if (quote.year) {
    	message += '<span class="year">' + quote.year + '</span>';   
  	}
  	if (quote.genre) {
  		message += '<span class="genre">' + quote.genre + '</span>';
  	}
  	message += '</p>';
	document.getElementById('quote-box').innerHTML = message;

// nested function to change the background and button color to a random hex color value
	function randomBackgroundColorPicker() {
    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    document.body.style.backgroundColor = randomColor;
    document.getElementById("loadQuote").style.backgroundColor = randomColor;
	}

	randomBackgroundColorPicker();
}

// running the function
printQuote();

// sets the interval to 10 seconds before the quote will refresh
setInterval(function() {printQuote() }, 10000);
 
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

