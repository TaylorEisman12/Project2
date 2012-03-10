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