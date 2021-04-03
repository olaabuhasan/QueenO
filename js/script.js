$(document).ready(function(){

  $(window).scroll(function(){

    var scroll = $(window).scrollTop();

    if (scroll > 80) {
      $(".color-before ").css("background-color" , "#778899");  
    }
    else{
      $(".color-before ").css("background-color" , "rgba(0,0,0,0)");    
    }
  }) })
$("#contactForm").submit(function(e) {
    e.preventDefault();
});
function displayRadioValue() {
if( document.querySelector('input[name="gender"]:checked') !== null )
  {
  return "Gender : ", document.querySelector('input[name="gender"]:checked').value;
   }
}
function ValidateEmail() {
var email = document.getElementById("email").value;
var lblEmailError = document.getElementById("emailErr");
lblEmailError.innerHTML = "";
var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
if (!expr.test(email)) {
lblEmailError.innerHTML = "Invalid email address.";
 }
}
function ValidateMobile() {
var mobile = document.getElementById("mobile").value;
var lblmobileError = document.getElementById("mobileErr");
lblmobileError.innerHTML = "";
var expr =  /^[1-9]\d{9}$/;
if (!expr.test(mobile)) {
lblmobileError.innerHTML = "Invalid mobile number.";
  }
}
function ValidateName() {
var name = document.getElementById("name").value;
var lblNameError = document.getElementById("nameErr");
lblNameError.innerHTML = "";
var expr = /^[A-Za-z]+$/;
if (!expr.test(name)) {
  lblNameError.innerHTML = "Invalid Name ";
  }
}
function ValidateGender() {
var gender = document.getElementsByName('gender'); 
var lblGenderError = document.getElementById("genderErr");
if (!( gender.checked == false )) {
lblGenderError.innerHTML = "";
 } 
}
function Validatepasw() {
var pasw = document.getElementById("pasw").value;
var lblpasError = document.getElementById("paswErr");
lblpasError.innerHTML = "";
var expr =  /^(?=.*[\w])(?=.*[\W])[\w\W]{8,}$/ ;  //  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/  //
if (!expr.test(pasw)) {
 lblpasError.innerHTML = "Invalid pasw address.";
  }
}
function ValidateSelect() {
var country = document.getElementById("country").value;
var lblCountryError = document.getElementById("countryErr");
if(country== "null" )
{  lblCountryError.innerHTML = "please select a country"; }
else
{ 
  lblCountryError.innerHTML = "";  }
}
function ValidateBday() {
var bday = document.getElementById("bday").value;
var lblBdayError = document.getElementById("bdayErr");
if(bday != "null" )
{   lblBdayError.innerHTML = "";}
}
function ErrorMessage() 
{
  var name =document.getElementById("name").value; 
  var gender =displayRadioValue(); 
  var mobile =document.getElementById("mobile").value; 
  var email =document.getElementById("email").value; 
  var pasw =document.getElementById("pasw").value; 
  var bday =document.getElementById("bday").value;
  var country =document.getElementById("country").value;  
 var test =   $("#contactForm").serialize();//string  to obj 
 var stringifyText = JSON.stringify(test);
// document.getElementById("btnSubmit").disabled = true;

 if(  name != null && nameErr!= null  && gender!= null  && genderErr!= null  &&  mobile!= null &&  mobileErr!= null && email!= null && emailErr!= null 
  && pasw!= null && paswErr!= null && country!= null  && countryErr!= null ){
 // To serialize JavaScript objects into a JSON string
  var JsonData={
      "name":name,
      "gender":gender,
      "mobile":mobile,
      "email":email,
      "pasw":pasw,
      "country":country,
      "bday" : bday ,
  }
 console.log(JsonData); }
}
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}
// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var pasw = document.contactForm.pasw.value;
var bday =document.contactForm.bday.value;
  // Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = paswErr=true;
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else { // /^[A-Z]*$/
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
   if(pasw == "") {
        printError("paswErr", "Please select your pass");
    }
     else {
      var regex=  /^(?=.*[\w])(?=.*[\W])[\w\W]{8,}$/;
       if(regex.test(pasw) === false) {
            printError("paswErr", "Please enter a valid pass");
        } else {
        printError("paswErr", "");
        paswErr = false; }
    }
// Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;//find digit from 1to9 means the whole matched string
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    if(bday == "") {
        printError("bdayErr", "Please select your Birthday");
    } else {
        printError("bdayErr", "");
        bdayErr = false;
    }
  // Validate country
    if(country == "null") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    // Prevent the form from being submitted if there are any errors
    if(nameErr || emailErr || mobileErr || countryErr || genderErr || bdayErr|| paswErr) {
     // alert("Form Is not submitted , becuase not all feilds are valiod !!");
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                         "paswword: " + pasw + "\n" +
                           "bday: " + bday + "\n" +
                          "Gender: " + gender + "\n";
        // Display input data in a dialog box before submitting the form
        console.log(dataPreview);
    }
ErrorMessage();
};