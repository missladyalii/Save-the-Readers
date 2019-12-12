//Take the word input from <input> and take button from <button>, refer to other
let wordLists={
	"Happier":['cheerful', 'chronicle', 'perceive','disagreement', 'blaze', 'recently' ],
	"Old Town Road":['pavement', 'borough', 'remote', 'informed', 'mount', 'rear', 'entrance', 'bright', 'joined', 'lash' ],
	"Let It Go":['radiate', 'spoor', 'isolation', 'bawl', 'attempt', 'perceive', 'virtuous', 'disguise']
}

//let headwrdPlace= document.querySelector(".headwrd");
let titleSong= document.querySelector("#titleSong");
let Dictionary=document.querySelector("#Dictionary");
let wrdPosts=wordLists[titleSong.innerText];

console.log(wrdPosts);
console.log(wrdPosts[0]);
console.log(wrdPosts.length);
//Dictionary API function call adds definition of word
var dictSearch=(word)=>{
	console.log(wrdPosts);
	let urlMain= `https://dictionaryapi.com/api/v3/references/learners/json/${word}?key=64da757e-0f61-4e87-9aba-709a6f4a8930`;
		console.log(urlMain);
		fetch(urlMain,{
			method: 'GET',
			})
		//Lets me know that the transmission was successful
			.then(response => {
				console.log(response);
				return response.json();
			})
			//.blob for image, .text for text, .json for data
			//Where data arrives
			.then (data => {
				console.log(urlMain);
				console.log(data);
				let displayDef= data[0].shortdef;
				let displayPoS=data[0].fl;
				//Dictionary Heirarchy; 
				console.log ("-----DefinitionConsole");
				console.log (displayDef);
				console.log (displayPoS);
					//Headword Display
					//display part of speech and definition
				let lineBreak= document.createElement("BR");
				let wrdAdd= document.createElement("DIV");
				wrdAdd.innerHTML=`${word}`;
				wrdAdd.classList.add("headwrd");
				document.body.appendChild(wrdAdd);
				lineBreak;
				document.body.appendChild(lineBreak);

				for (var i=0; i<=displayDef.length-1; i++ ){
					//create a list item for that word
					console.log ("-----DefinitionScreen");
					//create paragraph for part of speech to be written in and label it as PoS class
					let partOSpeechAdd=document.createElement("P");
					partOSpeechAdd.innerHTML=`${displayPoS}`;
					partOSpeechAdd.classList.add("PoS");
					document.body.appendChild(partOSpeechAdd);
					//Create a list item for definitions
					let dictPartsAdd= document.createElement("LI");
					//add definition into the bullet point
					dictPartsAdd.innerHTML=`${data[0].shortdef[i]}`;
					//give it the class "def" and add it to the body
					dictPartsAdd.classList.add("def");
					document.body.appendChild(dictPartsAdd);
					};	
				lineBreak;
				document.body.appendChild(lineBreak);			
					
			})
			//Error catch?
			.catch(err => {
				console.log(err);
			})
};
//Loop through the array of words under a particular song

for (var j=0; j<=wrdPosts.length-1; j++){
	//let wrdAdd= document.createElement("DIV");
	//Add word to the page as a div then insert the word and style it as headword
	//wrdAdd.innerHTML=`${wrdPosts[j]}`;
	//wrdAdd.classList.add("headwrd");
	//console.log(wrdPosts[j]);
	//document.body.appendChild(wrdAdd);

	//make a line break
	//lineBreak;
	//document.body.appendChild(lineBreak);
	
	dictSearch(wrdPosts[j]);
	//append definition from dictionary
	//lineBreak
	//document.body.appendChild(lineBreak);
}
//Dictionary side panel animation moves page over to show dictionary results
/*const open_btn=document.querySelector("#open_btn");
const close_btn=document.querySelector("#close_btn");
const offCanvas=document.querySelector("#offCanvas");

	/*open_btn.addEventListener('click', ()=>{
		offCanvas.classList.add("active");
	})

	offCanvas.addEventListener('click', ()=>{
		offCanvas.classList.add("active");
	});

	close_btn.addEventListener('click', ()=>{
		offCanvas.classList.remove("active");
	})*/