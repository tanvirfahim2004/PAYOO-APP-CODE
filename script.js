// login button functionality 
document.getElementById("loginButton").addEventListener('click',function(e){
    e.preventDefault();
    const mobileNumber = 1234567890;
    const pinNumber = 1234;
    const mobileNumbervalue = document.getElementById("mobile-number").value;
    const mobileNumbervalueconverted = parseInt(mobileNumbervalue);
    const pinNumbervalue = document.getElementById("pin-number").value;
    const pinNumbervalueconverted = parseInt(pinNumbervalue);

    if(mobileNumbervalueconverted === mobileNumber && pinNumbervalueconverted === pinNumber){
        window.location.href="./home.html"
    }
    else{
        alert("Invalid credentials");
    }
})