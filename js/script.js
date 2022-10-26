if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}




//back-to-top button
const navigationHeight = document.querySelector('body').offsetHeight;
//console.log(navigationHeight);
document.documentElement.style.setProperty('--scroll-padding', navigationHeight + "px");



let mybutton = document.getElementById("float-button");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener('click', () => {
    document.documentElement.scrollTop = 0
    //document.getElementById('main-content').scrollIntoView({behavior: "smooth"})
    //document.getElementById('main-content').scrollIntoView({behavior: "smooth"})
  })



//collapsible content
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



