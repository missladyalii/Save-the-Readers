const lyricHeader = document.querySelector('#lyricHeader');


const baseUrl = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/';

let apikey = 'f2f78aa35ce464af4da7c0726f553cc9';

let method = "matcher.lyrics.get";

let track_name3 = 'let it go';
let artist_name3 = 'cast of frozen';


function loadSongs(artist, title){
	let url = baseUrl + method + '?q_track=' +track_name3+ '&q_artist=' +artist_name3+'&apikey=' + apikey;
		fetch(url) 
			.then((response) => {
				return response.json();
		})
			.then((data) => {
			console.log(data.message.body.lyrics.lyrics_body);
			document.querySelector("#demo").innerHTML = (data.message.body.lyrics.lyrics_body);

		});
}

let x = document.querySelector("#buttonLyric");
x.addEventListener("click", loadSongs);

