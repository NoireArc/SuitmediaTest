// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("Slides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 2000);
// }

//Get Data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


//Validate Data
function validateForm(){
    
    clearMessage();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText="Name cannot be blank";
        nameInput.classList.add("error-border")
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText="Invalid Email Address";
        email.classList.add("error-border")
        errorFlag = true
    }

    if(message.value.length < 1){
        errorNodes[2].innerText="Please Enter Message";
        message.classList.add("error-border")
        errorFlag = true
    }

    if(!errorFlag){
        success.innerText = "Success!";
    }
}

//Clear Error OR Success Messages
function clearMessage(){
    for(let i=0;i<errorNodes.length;i++){
        errorNodes[i].innerText = ""
    }
    success.innerText = "" ;
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

//Check if Email Valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email); 
}