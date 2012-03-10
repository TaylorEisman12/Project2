// Taylor Eisman
// JavaScript File Project 2
// VFW 03/12

window.addEventListener("DOMContentLoaded", function(){

  function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}

	function makeCats(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "years");
		for( var i=0, j=contactYears.length; i < j; i++ ) {
			var makeOption = document.createElement("option");
			var	optText = contactYears[i];
			makeOption.setAttribute("value", contactYears[i]);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
 	function getSelectedRadio(){
		var radios = document.forms[0].transmission;
		for (var i=0; i<radios.length; i++){
			if(radios[i].checked){
				transmissionValue = radios[i].value; 
			}
		}
	}
	function setCheckboxValue(){
		if($('leather').checked){
			leatherValue = $('leather').value;
		}else{
			leatherValue = "No"
		}
	}
	function toggleControls(n){
		switch(n){
			case "on":
				$('carDetails').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('carDetails').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	}
	function storeData(key){
		var id  			= Math.floor(Math.random()*10000001);
		id = key;
		getSelectedRadio();
		setCheckboxValue();
		var item					= {};
			item.year				= ["Year: ", $('years').value];
			item.make				= ["First Name: ", $('make').value];
			item.model				= ["Last Name: ", $('model').value];
			item.color				= ["Color: ", $('color').value];
			item.transmission		= ["Transmission: ", transmissionValue];
			item.leather			= ["Leather: ", leatherValue];
			item.horsepower			= ["Horsepower: ", $('horsepower').value];
			item.date				= ["Date: ", $('date').value];
			item.notes				= ["Notes: ", $('notes').value];
		localStorage.setItem(id, JSON.stringify(item));
		alert("Car Saved!");
	}	