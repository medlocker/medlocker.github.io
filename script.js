const nav = document.querySelector('nav')
fetch('/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data;
})