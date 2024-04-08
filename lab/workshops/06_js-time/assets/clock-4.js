// Get Elements 
// ------------------------------------------

var hoursElement = document.querySelector('.Hours');
console.log(hoursElement);

// Get Time 
// -------------------------------------------

var dateObject = new Date();
var hours = dateObject.getHours();
console.log(hours);



// Update Element
// -------------------------------------------
hoursElement.innerHTML = hours;


setInterval(() => {
    // Get Time 
// -------------------------------------------

var hours = dateObject.getHours();
console.log(hours);


// Update Element
// -------------------------------------------
hoursElement.innerHTML = hours;
} , 1000);




