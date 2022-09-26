if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}







//back-to-top button
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
    //document.documentElement.scrollTop = 0
    //document.getElementById('main-content').scrollIntoView({behavior: "smooth"})
    document.getElementById('main-content').scrollIntoView({behavior: "smooth"})
  })

// Get the button:
// let mybutton = document.getElementById("float-button");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }




//try lazy loading
// document.addEventListener("DOMContentLoaded", function() {
//   var lazyloadImages = document.querySelectorAll("img.lazy");    
//   var lazyloadThrottleTimeout;
  
//   function lazyload () {
//     if(lazyloadThrottleTimeout) {
//       clearTimeout(lazyloadThrottleTimeout);
//     }    
    
//     lazyloadThrottleTimeout = setTimeout(function() {
//         var scrollTop = window.pageYOffset;
//         lazyloadImages.forEach(function(img) {
//             if(img.offsetTop < (window.innerHeight + scrollTop)) {
//               img.src = img.dataset.src;
//               img.classList.remove('lazy');
//             }
//         });
//         if(lazyloadImages.length == 0) { 
//           document.removeEventListener("scroll", lazyload);
//           window.removeEventListener("resize", lazyload);
//           window.removeEventListener("orientationChange", lazyload);
//         }
//     }, 20);
//   }
  
//   document.addEventListener("scroll", lazyload);
//   window.addEventListener("resize", lazyload);
//   window.addEventListener("orientationChange", lazyload);
// });