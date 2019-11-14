//Take the word input from <input> and take button from <button>, refer to other
let wrdInput=document.querySelector("#WordSrch");
let searchBtn= document.querySelector("#searchBtn");
let headwrdPlace= document.querySelector("#headwrd");

//Dictionary API function call
var dictSearch= (word)=>{
	//let word= wordList[i];
	let url= `https://dictionaryapi.com/api/v3/references/learners/json/${word}?key=64da757e-0f61-4e87-9aba-709a6f4a8930`;
	fetch(url,{
		method: 'GET',
		headers:{
			"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
			"x-rapidapi-key": "6aa5316395msh17a91652806383cp157156jsnab22f176c843"
		},
	})
	//Lets me know that the transmission was successful
	.then(response => {
		console.log(response);
		return response.json();
	})
	//Where data arrives
	.then (data => {
		console.log(data);
	})
	//Error catch?
	.catch(err => {
		console.log(err);
	});
}

//making the search button work
let newSearch=()=>{ 
	dictSearch(wrdInput.value);
	headwrdPlace.innerHTML=`${wrdInput.value}`;
	for (var i= 0,i<1,i++ ){
		const = document.createElement("li");
	}
};
searchBtn.addEventListener("click",newSearch);
for (var i = Things.length - 1; i >= 0; i--) {
	Things[i]
}