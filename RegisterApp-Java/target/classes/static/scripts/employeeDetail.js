document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("Save").addEventListener("click", saveEmployee);
});
function saveEmployee() {
    if (!validateInput()) {
        return;
    }
    const requestPayload = {
        firstName = document.getElementById("firstName").value,
        lastName = document.getElementById("lastName").value,
        password = document.getElementById("password").value,
        empType = document.getElementById("empType").value
    };
    ajaxPost("/employeeDetail", requestPayload, (callbackResponse) => {

    });
    //window.location.replace(url); Redirect
}
function validateInput() {
    if (document.getElementById("firstName").value == "") {
        displayError("Error: Invalid Input");
        return false;
    }
    else if (document.getElementById("lastName").value == "") {
        displayError("Error: Invalid Input");
        return false;
    }
    else if (document.getElementById("password").value == "" || document.getElementById("confirmPassword").value !=
     document.getElementById("password").value) {
        displayError("Error: Invalid Input");
         return false;
     }
     else if (document.getElementById("empType").value != "Cashier" && 
     document.getElementById("empType").value != "Shift Manager" &&
     document.getElementById("empType").value != "General Manager") {
         displayError("Error: Invalid Input");
         return false;
     }
     else {
         return true;
     }
}