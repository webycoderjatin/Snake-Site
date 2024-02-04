function myFunction() {
  var x = document.querySelectorAll(".lis")
  x.forEach(function (value,index){
    if(value.className.includes("active")){
        value.classList.remove('active')
    }else{
        value.classList.add("active")
    }
  })
}


let sr1 = ScrollReveal({
  distance : '65px',
  duration : 2600 , 
  delay :450,
  reset : false
})
let sr2 = ScrollReveal({
  distance : '65px',
  duration : 2600 , 
  delay :450,
  reset : false
})

sr1.reveal(".right",{delay:200,origin:"top"});
sr1.reveal(".hero-image",{delay:300,origin:"top"});
sr2.reveal(".sec",{delay:300,origin:"top"});