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
			item.transmission			= ["Transmission: ", transmissionValue];
			item.leather				= ["Leather: ", leatherValue];
			item.horsepower				= ["Horsepower: ", $('horsepower').value];
			item.date				= ["Date: ", $('date').value];
			item.notes				= ["Notes: ", $('notes').value];
		localStorage.setItem(id, JSON.stringify(item));
		alert("Car Saved!");
	}
	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			autoFillData();
			alert("No data exists so default data was added.");
		}
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
			}
		}
	}
	function clearLocal() {
		if(localStorage.length === 0){
			alert("There is no data to clear.");
		}else{
			localStorage.clear();
			alert("All data was deleted.");
			window.location.reload();
			return false;ß
		}
	}