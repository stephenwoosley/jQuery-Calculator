$(document).ready(function(){

	var number1 = 0;
	var number2 = 0;
	var numberArray1 = [];
	var numberArray2 = [];
	var operatorEngaged = false;
	var operand = "";
	var answer = 0;
	var button = $("button");
	var joinedNumArray1 = "";
	var joinedNumArray2 = ""


	//when user clicks a button
	button.on("click", function(){

		console.log("button clicked!");


		// check what kind of button was clicked
		if ($(this).hasClass("operator")) {
			operatorEngaged = true;
			operand =  $(this).val();
			setOperand();
			console.log("OPERATOR button clicked!");
		}
		else if ($(this).hasClass("equal")) {
			operatorEngaged = true;
			equalText =  $(this).val();
			equalsClicked();
		}
		else if ($(this).hasClass("clear")) {
			operatorEngaged = true;
			clearText =  $(this).val();
			clearClicked();
		}
	
		else {
			console.log("NUMBER button clicked and operatorEngaged is " + operatorEngaged);

			// if the operator hasn't been clicked yet, set num1 var
			if(!operatorEngaged) {
				numberClicked($(this).val());
				joinedNumArray1 = numberArray1.join("");
				$("#firstNumber").text(joinedNumArray1);
				console.log(joinedNumArray1 + " is what numberArray1 is right now.");
				number1 = parseInt(joinedNumArray1);	
			}
			// if operator has been engaged, set num2 var
			else {
				numberClicked($(this).val());
				joinedNumArray2 = numberArray2.join("");
				$("#secondNumber").text(joinedNumArray2);
				console.log(joinedNumArray2 + " is what numberArray2 is right now.");
				number2 = parseInt(joinedNumArray2);	
			}

			
		}

	});

	function setOperand() {
		console.log("OPERATOR function running strong!");
		switch(operand) {
			case "plus":
				$("#operator").text("+");
				console.log("OPERATOR function got to plus!");
				break;
			case "minus":
				$("#operator").text("-");
				console.log("OPERATOR function got to minus!");
				break;
			case "times":
				$("#operator").text("*");
				console.log("OPERATOR function got to times!");
				break;
			case "divide":
				$("#operator").text("/");
				console.log("OPERATOR function got to divide!");
				break;
			case "power":
				$("#operator").text("^");
				console.log("OPERATOR function got to power!");
		}
	}


	function equalsClicked(){
		console.log("EQUALS function running strong!")

		switch(operand) {
			case "plus":
				answer = number1 + number2
				break;

			case "minus":
				answer = number1 - number2
				break;

			case "times":
				answer = number1 * number2
				break;

			case "divide":
				answer = number1 / number2
				break;

			case "power":
				answer = Math.pow(number1, number2)
		}

		$("#result").text(answer);

	}

	function numberClicked(number){
		console.log("NUMBER function running strong!")
		if (!operatorEngaged) {
			numberArray1.push(parseInt(number));
		}
		else {
			numberArray2.push(parseInt(number));
		}	
	}

	function clearClicked() {
		number1 = 0;
		number2 = 0;
		numberArray1 = [];
		numberArray2 = [];
		operatorEngaged = false;
		operand = "";
		answer = 0;
		joinedNumArray1 = "";
		joinedNumArray2 = "";

		$("#firstNumber").text("");
		$("#secondNumber").text("");
		$("#operator").text("");
		$("#result").text("");
	}




});