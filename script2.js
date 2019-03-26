/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*Jeffrey van Kampen Memory Game */

var numClick = 0;
var first; 
var second; 
var match = 0; 

//Hier maak ik de lijst van alle 4 verschillende kaarten van 4 paar
var kaartArray = [];
cards[0] = 'kaartFlower.png'; 
cards[1] = 'kaartMushroom.png';
cards[2] = 'kaartShell.png'; 
cards[3] = 'kaartStar.png';
cards[4] = 'kaartFlower.png';
cards[5] = 'kaartMushroom.png';
cards[6] = 'kaartShell.png';
cards[7] = 'kaartStar.png';


function shuffle(array)
{
	var currentIndex = array.length, temporaryValue, random;
	
	while (0 !== currentIndex)
{
	randomIndex = Math.floor(Math.random() * currentIndex;
	currentIndex -= 1;
	
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue; 
      }

	return array;
 }
//Vanaf hier begin ik mijn shuffle 
							 
var s;
s = shuffle(cards); 

//Hier roep ik de functie aan wanneer de kaart wordt geklikt
function choose(card)
{
	if (numClick == 0)
		{
			//Hier heb ik de afbeelding waar je op klikt
			first = card;
			document.images['kaartFlower.png'].src = cards[0];
			numClick = 1;
		}
		else if (numClick == 1)
		{
			numClick = 2; 
			second = card;
			document.images['kaartMushroom.png'].src = cards [1];
			//Hier zit een timer wanneer je flipt
			timer = setInterval(control, 900);
		}
		else
		{
			//Hier worden alleen 2 afbeeeldingen getoond totdat je draait
			alert("You can click once per time");
			
		}
	
}
//Hier gebeurt de check om te zien of het matcht
function control()
{
	clearInterval(timer);
	clearInterval(timer);
	numClick = 0;
	if (cards[2] == cards[1])
	{
		//Hier zorg ik ervoor wanneer de eerste kaart gelijk is aan de tweede dat het matcht
		match++;
		
		if(match == 3)
		{
			//Herlaad de pagina voor een nieuw potje
			alert("You helped saving Mario");
			location.reload();
			
		}
	}
	else
	{
		document.images[1].src = "kaartOrigineel.png";
		document.images[2].src = "kaartOrigineel.png";
		return
	}
}
	
	
	
	
	
	
	


// Developer Mozilla. (2019, 19 maart). const. Geraadpleegd op 23 maart 2019, van https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const //
	
// W3schools. (z.d.). JavaScript Prototypes. Geraadpleegd op 24 maart 2019, van https://www.w3schools.com/js/js_object_prototypes.asp // 






