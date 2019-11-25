//Take the word input from <input> and take button from <button>, refer to other
let wrdInput=document.querySelector("#WordSrch");
let searchBtn= document.querySelector("#searchBtn");
let headwrdPlace= document.querySelector("#headwrd");
let partOSpeech= document.querySelector("#PoS");
let def= document.querySelector("#def");

//First screen Dict (test)
var dictSearchTest= ()=>{
	let url= `https://dictionaryapi.com/api/v3/references/learners/json/test?key=64da757e-0f61-4e87-9aba-709a6f4a8930`;
	fetch(url,{
		method: 'GET',
	})
	//Lets me know that the transmission was successful
	.then(response => {
		console.log(response);
		return response.json();
	})
	.then (data => {
		console.log(data);
		let displayDef= data.shortdef;
		let displayPoS=data.fl;
		//Dictionary Heirarchy; 
		let wrd=wrdInput.value;
			console.log(wrd);
		//Headword Display
		headwrdPlace.innerHTML=`${wrd}`;
		for (var i=0; i<=displayDef.length; i++ ){
			console.log ("-----Definition");
			console.log (displayDef);
			console.log (displayPoS);
		};
	})
	//Error catch?
	.catch(err => {
		console.log(err);
	})
};




//Dictionary API function call
var dictSearch= (event)=>{
	console.log(wrdInput.value);
	let urlMain= `https://dictionaryapi.com/api/v3/references/learners/json/${wrdInput.value}?key=64da757e-0f61-4e87-9aba-709a6f4a8930`;
	fetch(urlMain,{
		method: 'GET',
		/*headers:{
			"merriam-webster-learners-dictionary-host": "dictionaryapi.com",
			"merriam-webster-learners-dictionary-key": "64da757e-0f61-4e87-9aba-709a6f4a8930 "
		},*/
	})
	//Lets me know that the transmission was successful
	.then(response => {
		console.log(response);
		return response.json();
	})
	//.blob for image, .text for text, .json for data
	//Where data arrives
	.then (data => {
		console.log(data);
		
		let displayDef= data[0].shortdef[0];
		let displayPoS=data[0].fl;
		//Dictionary Heirarchy; 
		let dictPartsAdd= document.createElement("li");
		//let wrd=wrdInput.value;
		console.log (displayDef);
		console.log (displayPoS);
		//Headword Display
		headwrdPlace.innerHTML=`${wrdInput.value}`;
		for (var i=0; i<=displayDef.length; i++ ){
			console.log ("-----Definition");
			partOSpeech.innerHTML=`${displayPoS}`;
			let displayDefShow=def.innerHTML=`${displayDef[i]}`;
			def.append(displayDefShow);
		};
	})
	//Error catch?
	.catch(err => {
		console.log(err);
	})
};

//making the search button work
searchBtn.addEventListener("click",dictSearch);



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