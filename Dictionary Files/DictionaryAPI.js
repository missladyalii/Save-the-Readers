//Take the word input from <input> and take button from <button>, refer to other
let wrdInput=document.querySelector("#WordSrch");
let searchBtn= document.querySelector("#searchBtn");
let headwrdPlace= document.querySelector("#headwrd");
let def= document.querySelector("#def");

//Dictionary API function call
var dictSearch= (word)=>{
	let url= `https://dictionaryapi.com/api/v3/references/learners/json/${word}?key=64da757e-0f61-4e87-9aba-709a6f4a8930`;
	fetch(url,{
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
		let displayDef= data.meta.app-shortdef;
		for (var i=0; i<displayDef.length; i++ ){
			console.log ("-----Definition");
			//console.log ()
		}
	})
	//Error catch?
	.catch(err => {
		console.log(err);
	})
};


//making the search button work
let newSearch=()=>{ 
	let wrd=wrdInput.value;
	dictSearch(wrd);
	headwrdPlace.innerHTML=`${wrd}`;
	let runner= [0,0]
	for (var i= runner.length, i <= runner.length, i++ ){
		const list= document.def.createElement("li");
	};
};
searchBtn.addEventListener("click",newSearch);


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