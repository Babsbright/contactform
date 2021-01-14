var emailInput =document.getElementById("email");
var firstnameInput =document.getElementById("firstName");
var lastnameInput =document.getElementById("lastName");
var messageInput =document.getElementById("message");
var companyInput =document.getElementById("company");
var phoneInput =document.getElementById("phone");



function validateForm() {

  
  if(firstnameInput.value == ""){
    window.alert("please enter your First Name");
    return false;

}   
  if(lastnameInput.value == ""){
    window.alert("please enter your Last Name");
    return false;

} 

    if(emailInput.value == "" && emailInput.value !== "@"){
      window.alert("please enter your Email");
      return false;

}   
    
    if(messageInput.value == ""){
      window.alert("please enter your Message");
      return false;

}   
    if(companyInput.value == ""){
      window.alert("please enter your Company");
      return false;

}   
    if(phoneInput.value == ""){
      window.alert("please enter your PhoneInput");
      return false;

}   


}
