document.addEventListener("DOMContentLoaded", function() { 
//all of your code with go inside here

// start of Flickity Slider
const elem = document.querySelector('.main-carousel');
const flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  wrapAround: true,
  freeScroll: true
}); //end of Flickity Slider

// START OF UPDATES SECTION

const emailForm = document.getElementsByClassName('email-form')[0];

const emailBox = document.getElementsByClassName('email-area')[0];

emailForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  // console.log('form submitted');
  const emailAdd = emailBox.value;
  // console.log(emailAdd);
  if (emailAdd == ""){
    alert('Please enter your email address');
  } else {
    alert('Please wait for our future newsletters!');
    // emailBox.append('');
    // console.log(emailBox);
  }
});


// END OF UPDATES SECTION

});// end of doc ready

