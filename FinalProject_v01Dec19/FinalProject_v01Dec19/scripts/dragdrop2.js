
		//UI Elements for the "Old Town Road" Poem
		const dragOption01 = document.querySelector("#OptionForLine01");
		const dragOption02 = document.querySelector("#OptionForLine02");
		const dragOption03 = document.querySelector("#OptionForLine03");
		const dragOption04 = document.querySelector("#OptionForLine04");
		const dragOption05 = document.querySelector("#OptionForLine05");
		const dragOption08 = document.querySelector("#OptionForLine08");
		const dragOption09 = document.querySelector("#OptionForLine09");
		const dragOption10 = document.querySelector("#OptionForLine10");
		const dragOption13 = document.querySelector("#OptionForLine13");
		const dragOption15 = document.querySelector("#OptionForLine15");
		const dropLine01 = document.querySelector("#Line01");
		const dropLine02 = document.querySelector("#Line02");
		const dropLine03 = document.querySelector("#Line03");
		const dropLine04 = document.querySelector("#Line04");
		const dropLine05 = document.querySelector("#Line05");
		const dropLine08 = document.querySelector("#Line08");
		const dropLine09 = document.querySelector("#Line09");
		const dropLine10 = document.querySelector("#Line10");
		const dropLine13 = document.querySelector("#Line13");
		const dropLine15 = document.querySelector("#Line15");

		//UI Elements for the "Happier" Poem
		const dragOption18 = document.querySelector("#OptionForLine18");
		const dragOption19 = document.querySelector("#OptionForLine19");
		const dragOption21 = document.querySelector("#OptionForLine21");
		const dragOption22 = document.querySelector("#OptionForLine22");
		const dragOption24 = document.querySelector("#OptionForLine24");
		const dragOption26 = document.querySelector("#OptionForLine26");
		const dropLine18 = document.querySelector("#Line18");
		const dropLine19 = document.querySelector("#Line19");
		const dropLine21 = document.querySelector("#Line21");
		const dropLine22 = document.querySelector("#Line22");
		const dropLine24 = document.querySelector("#Line24");
		const dropLine26 = document.querySelector("#Line26");
		

		//UI Elements for the "Let it Go" Poem
		const dragOption31 = document.querySelector("#OptionForLine31");
		const dragOption32 = document.querySelector("#OptionForLine32");
		const dragOption33 = document.querySelector("#OptionForLine33");
		const dragOption35 = document.querySelector("#OptionForLine35");
		const dragOption36 = document.querySelector("#OptionForLine36");
		const dragOption37 = document.querySelector("#OptionForLine37");
		const dragOption38 = document.querySelector("#OptionForLine38");
		const dragOption39 = document.querySelector("#OptionForLine39");
		const dropLine31 = document.querySelector("#Line31");
		const dropLine32 = document.querySelector("#Line32");
		const dropLine33 = document.querySelector("#Line33");
		const dropLine35 = document.querySelector("#Line35");
		const dropLine36 = document.querySelector("#Line36");
		const dropLine37 = document.querySelector("#Line37");
		const dropLine38 = document.querySelector("#Line38");
		const dropLine39 = document.querySelector("#Line39");		



        const resultMsg = document.querySelector("#resultMsg");
        const result_ele = document.querySelector("#result");	
        
        let image_ele = document.createElement("img");
        let count = 1;
        //append an image element to the result div. 
        //Specify src of image based on correct/incorrect option selected in the displayResult method below
        result_ele.appendChild(image_ele); 
		

		let onDragStart = (event) => {
			console.log(event);
			console.log(`----START DRAG: ${event.currentTarget.id}`);
			//setting data in the event that will be retrieved in the onDrop method
			event.dataTransfer.setData('text', event.currentTarget.id);
		};

		let onDragOver = (event) => {
			event.preventDefault();
			console.log(`----DRAGGGING OVER: ${event.currentTarget.id}`);
		};

		let onDrop = (event) => {


			let droppedData = event.dataTransfer.getData('text');

			//if droppedData (e.g. OptionForLine1) includes the drop target string(e.g Line 1)
			if( droppedData.includes(event.currentTarget.id)){
				console.log("CORRECT");

				//display correct message in footer 
				displayResult(droppedData.includes(event.currentTarget.id), event.currentTarget.id);

				//pass dropTargetElement and dragSourceElement
				updateCorrectOption (droppedData, event.currentTarget.id) ;

			}else{

				//display message for incorrect chosen option in footer 
				displayResult(droppedData.includes(event.currentTarget.id), event.currentTarget.id);
				console.log("WRONG!");	
			}
			
		};

		//Display a message in the footer if dragged option is correct or incorrect  
		let displayResult = (result, droppedLine) =>{
			if(result){
				
				resultMsg.setAttribute("class", "correct"); //this will display color of the font
				
				if(count == findCorrectAnswers(droppedLine)){
					//display "Good Job gif when all answers have been selected"
					resultMsg.innerHTML = "You've selected all the correct answers!" ;
 					image_ele.setAttribute("src", "https://media.giphy.com/media/5hgYDDh5oqbmE4OKJ3/giphy.gif")
 					image_ele.setAttribute("src", "https://media.giphy.com/media/3ohhwjrt6CQrBYm5Ec/giphy.gif") 					
				}else{
					//display thumbs up gif for every correct answer chosen
					resultMsg.innerHTML = "That is the correct answer! Good job" ;
					image_ele.setAttribute("src", "https://media.giphy.com/media/lYpOXbTyaTF60/giphy.gif")
					count = count + 1;
				}
				
				
			}else {//if(result == "INCORRECT"){
				resultMsg.innerHTML = "That is the incorrect answer :-( Wanna try again?" ;
				resultMsg.setAttribute("class", "incorrect");
				//display try again gif for every incorrect answer chosen
				image_ele.setAttribute("src", "https://media.giphy.com/media/NuQ1Tz0fhqeEU/giphy.gif")

			}

		}

		let updateCorrectOption = (dragSource, dropTarget) =>{

			//Get the elements for the dragSource and dropTarget
			dragSourceElement = document.getElementById(dragSource) ;
			dropTargetElement = document.getElementById(dropTarget) ;

			let string =  dropTargetElement.innerHTML ;
			//replace blank space(&nbsp) by the correct answer from dragSource and update html for the dropTarget
			let newString = string.slice(0,string.indexOf("&nbsp")) //slice the target html from the beginning to first index of space(&nbsp)
							+ dragSourceElement.innerHTML //replace space by the correct chosen option from the dragSource
							+ string.slice(string.lastIndexOf("&nbsp")+6,string.length); //append the remaining html from the lastIndexOf space to string.length
	        
	        dropTargetElement.innerHTML = newString ;

	        //After correct answer is dragged, clear the dragSource html as it shouldn't show in the synonyms box
	        dragSourceElement.innerHTML = "" ;
		}

		let findCorrectAnswers = (lineNumber) => {
			
			//Total Correct Answers for Old Town Road = 10. It has between Line 01 to Line 16
			if (lineNumber >= 'Line01' && lineNumber <= 'Line16') {
				console.log("Old Town Road")
				return 10 ;
			} 
			//Total Correct Answers for Happier = 6. It has between Line 17 to Line 29
			else if (lineNumber >= 'Line17' && lineNumber <= 'Line29')  {
				console.log("Happier")
				return 6 ;
			} 
			//Total Correct Answers for Let it go = 8. It has between Line 30 to Line 40
			else if (lineNumber >= 'Line30' && lineNumber <= 'Line40')  {
				console.log("Let it go")
				return 8 ;
			}	
		}

		// adding eventListerners for the Old Town Road Poem
		//adding eventlisteners for the draggable synonyms that get triggered on the 'dragstart' event

		if (dragOption01 != null) {
		dragOption01.addEventListener('dragstart', onDragStart);
		dragOption02.addEventListener('dragstart', onDragStart);
		dragOption03.addEventListener('dragstart', onDragStart);
		dragOption04.addEventListener('dragstart', onDragStart);
		dragOption05.addEventListener('dragstart', onDragStart);
		dragOption08.addEventListener('dragstart', onDragStart);
		dragOption09.addEventListener('dragstart', onDragStart);
		dragOption10.addEventListener('dragstart', onDragStart);
		dragOption13.addEventListener('dragstart', onDragStart);
		dragOption15.addEventListener('dragstart', onDragStart);

		//adding eventlisteners for the droppable targets that get triggered on the 'dragover' and 'drop' events
		dropLine01.addEventListener('dragover', onDragOver);
		dropLine01.addEventListener('drop', onDrop);

		dropLine02.addEventListener('dragover', onDragOver);
		dropLine02.addEventListener('drop', onDrop);	

		dropLine03.addEventListener('dragover', onDragOver);
		dropLine03.addEventListener('drop', onDrop);

		dropLine04.addEventListener('dragover', onDragOver);
		dropLine04.addEventListener('drop', onDrop);		

		dropLine05.addEventListener('dragover', onDragOver);
		dropLine05.addEventListener('drop', onDrop);	

		dropLine08.addEventListener('dragover', onDragOver);
		dropLine08.addEventListener('drop', onDrop);

		dropLine09.addEventListener('dragover', onDragOver);
		dropLine09.addEventListener('drop', onDrop);

		dropLine10.addEventListener('dragover', onDragOver);
		dropLine10.addEventListener('drop', onDrop);

		dropLine13.addEventListener('dragover', onDragOver);
		dropLine13.addEventListener('drop', onDrop);

		dropLine15.addEventListener('dragover', onDragOver);
		dropLine15.addEventListener('drop', onDrop);

        }

        else if (dragOption18 != null) {		
	
			// adding eventListerners for the Happier Poem
		//adding eventlisteners for the draggable synonyms that get triggered on the 'dragstart' event
        dragOption18.addEventListener('dragstart', onDragStart);
		dragOption19.addEventListener('dragstart', onDragStart);
		dragOption21.addEventListener('dragstart', onDragStart);
		dragOption22.addEventListener('dragstart', onDragStart);
		dragOption24.addEventListener('dragstart', onDragStart);
		dragOption26.addEventListener('dragstart', onDragStart);
        


		//adding eventlisteners for the droppable targets that get triggered on the 'dragover' and 'drop' events
		dropLine18.addEventListener('dragover', onDragOver);
		dropLine18.addEventListener('drop', onDrop);

		dropLine19.addEventListener('dragover', onDragOver);
		dropLine19.addEventListener('drop', onDrop);	

		dropLine21.addEventListener('dragover', onDragOver);
		dropLine21.addEventListener('drop', onDrop);

		dropLine22.addEventListener('dragover', onDragOver);
		dropLine22.addEventListener('drop', onDrop);		

		dropLine24.addEventListener('dragover', onDragOver);
		dropLine24.addEventListener('drop', onDrop);	

		dropLine26.addEventListener('dragover', onDragOver);
		dropLine26.addEventListener('drop', onDrop);

	}
		else if (dragOption31 != null) {
		// adding eventListerners for the Let it Go Poem
		//adding eventlisteners for the draggable synonyms that get triggered on the 'dragstart' event
        dragOption31.addEventListener('dragstart', onDragStart);
		dragOption32.addEventListener('dragstart', onDragStart);
		dragOption33.addEventListener('dragstart', onDragStart);
		dragOption35.addEventListener('dragstart', onDragStart);
		dragOption36.addEventListener('dragstart', onDragStart);
		dragOption37.addEventListener('dragstart', onDragStart);
		dragOption38.addEventListener('dragstart', onDragStart);
		dragOption39.addEventListener('dragstart', onDragStart);


		//adding eventlisteners for the droppable targets that get triggered on the 'dragover' and 'drop' events
		dropLine31.addEventListener('dragover', onDragOver);
		dropLine31.addEventListener('drop', onDrop);

		dropLine32.addEventListener('dragover', onDragOver);
		dropLine32.addEventListener('drop', onDrop);	

		dropLine33.addEventListener('dragover', onDragOver);
		dropLine33.addEventListener('drop', onDrop);

		dropLine35.addEventListener('dragover', onDragOver);
		dropLine35.addEventListener('drop', onDrop);		

		dropLine36.addEventListener('dragover', onDragOver);
		dropLine36.addEventListener('drop', onDrop);	

		dropLine37.addEventListener('dragover', onDragOver);
		dropLine37.addEventListener('drop', onDrop);

		dropLine38.addEventListener('dragover', onDragOver);
		dropLine38.addEventListener('drop', onDrop);

		dropLine39.addEventListener('dragover', onDragOver);
		dropLine39.addEventListener('drop', onDrop);		

	}