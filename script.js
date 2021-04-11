var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;

output.innerHTML=rate.value

function compute()
{
 

    var interest = principal * years * rate / 100;
    var today = new Date();
    var beginning = today.getFullYear();
    var end = beginning + years;

    alert("bla", interest,end);

}

rate.oninput=function()
{
   output.innerHTML=this.value
}
        