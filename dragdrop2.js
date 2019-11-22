
		const dragOption1 = document.querySelector("#OptionForLine1");
		const dragOption2 = document.querySelector("#OptionForLine2");
		const dragOption3 = document.querySelector("#OptionForLine3");
		const dragOption4 = document.querySelector("#OptionForLine4");
		const dragOption5 = document.querySelector("#OptionForLine5");
		const dropLine1 = document.querySelector("#Line1");
		const dropLine2 = document.querySelector("#Line2");
		const dropLine3 = document.querySelector("#Line3");
		const dropLine4 = document.querySelector("#Line4");
		const dropLine5 = document.querySelector("#Line5");

        const resultMsg = document.querySelector("#resultMsg");	

		

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
				displayResult(droppedData.includes(event.currentTarget.id));

				//pass dropTargetElement and dragSourceElement
				updateCorrectOption (droppedData, event.currentTarget.id) ;

			}else{

				//display message for incorrect chosen option in footer 
				displayResult(droppedData.includes(event.currentTarget.id));
				console.log("WRONG!");	
			}
			
		};

		//Display a message in the footer if dragged option is correct or incorrect  
		let displayResult = (result) =>{
			if(result){
				resultMsg.innerHTML = "That is the correct answer! Good job" ;
			}else {//if(result == "INCORRECT"){
				resultMsg.innerHTML = "That is the incorrect answer :-( Wanna try again?" ;
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

		//adding eventlisteners for the draggable synonyms that get triggered on the 'dragstart' event
        dragOption1.addEventListener('dragstart', onDragStart);
		dragOption2.addEventListener('dragstart', onDragStart);
		dragOption3.addEventListener('dragstart', onDragStart);
		dragOption4.addEventListener('dragstart', onDragStart);
		dragOption5.addEventListener('dragstart', onDragStart);

		//adding eventlisteners for the droppable targets that get triggered on the 'dragover' and 'drop' events
		dropLine1.addEventListener('dragover', onDragOver);
		dropLine1.addEventListener('drop', onDrop);

		dropLine2.addEventListener('dragover', onDragOver);
		dropLine2.addEventListener('drop', onDrop);	

		dropLine3.addEventListener('dragover', onDragOver);
		dropLine3.addEventListener('drop', onDrop);

		dropLine4.addEventListener('dragover', onDragOver);
		dropLine4.addEventListener('drop', onDrop);		

		dropLine5.addEventListener('dragover', onDragOver);
		dropLine5.addEventListener('drop', onDrop);	
	