let userName=document.querySelector("#CheckBox");
userName.onclick = function(){
   let getText = document.getElementById("usernameText").value
   document.cookie = getText
   console.log(document.cookie = getText)
  
};

let sbmt=document.querySelector("#submitbtn");
sbmt.addEventListener("click", function() {
    event.preventDefault()
    document.getElementById("img").style.display = "block"
window.setTimeout(function(){
window.open('https://www.google.com');
window.alert('New window has been opened');
}, parseInt(1) * 5000);
window.setTimeout(function(){
    document.getElementById("img").style.display = "none"
    }, parseInt(1) * 5000);});