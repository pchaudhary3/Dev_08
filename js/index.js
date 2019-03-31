$(document).ready(function () {
$('#content').hide().fadeIn(3000);
function resetSign(){
	welcome='';
	sign='';
	setSign();
}


// Create variables for the welcome message
var greeting = '[not initialized]', 
	name = '[not initialized]', 
	message = '[not initialized]' , 
	welcome = '[not initialized]' , 
	sign = '[not initialized]', 
	tiles = '[not initialized]', 
	subTotal = '[not initialized]', 
	grandTotal = '[not initialized]',
	shipping = 7;

function initiateVars() {
	greeting = 'Howdy'; 
	name= 'Prachi';
	message='Check your order!!';
	sign='styles';
	welcome= greeting + ' ' + name  + ' '+ message;
	tiles = sign.length;
	subTotal = tiles * 5, 
	grandTotal = subTotal + shipping;
	}


function setTextContentById(getId, setMsg) {
// Get the element that has an id of greeting
var el = document.getElementById(getId);
// Replace the content of that element with the personalized welcome message
el.textContent = setMsg;
}

function setSign(){
	
	setTextContentById('greeting',welcome);
	setTextContentById('userSign',sign);
	setTextContentById('tiles',tiles);
	setTextContentById('subTotal','$' + subTotal);
	setTextContentById('shipping','$' + shipping);
	setTextContentById('grandTotal','$' + grandTotal);};
	
initiateVars();
setSign();
resetSign();
	
})	


	






