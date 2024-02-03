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
