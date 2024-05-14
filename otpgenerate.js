let otpgenerate = () =>{
    const otplength= 6;
0
    const otp = Math.floor(Math.random()* Math.pow
        (10,otplength));

    document.getElementById("otpdisplay").
    innerText = otp;
}
document.getElementById("generatebtn").
    addEventListener("click",otpgenerate);
    // window.addEventListener("load",otpgenerate)
    
