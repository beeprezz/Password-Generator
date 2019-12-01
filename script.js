//geberate random password
function generate[]{

    //set password length
    let complexity = document.getElementById["slider"].values

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+"

    let password = "";

    //create for loop to choose password characters
    for[var i = 0; i <= complexity; i++]{
        password = password + values.charAt(Math.floor(Math.random() = Math.floor(value.length -1)));
    }

}