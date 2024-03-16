// const themeSwitchBtn = document.getElementById("themeSwitch");

// function themeToggle() {
//     document.body.classList.toggle("dark-mode");
//   }
  
   // Add event listeners to button
//   themeSwitchBtn.addEventListener("click", themeToggle);


document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.scroll-reveal', {
      distance: '20px',
      origin: 'bottom',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      interval: 100, // Optional: Time between each animation for multiple elements
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.scroll-rev', {
      distance: '200px',
      origin: 'left',
      duration: 2000,
      delay: 200,
      easing: 'ease-in-out',
      interval: 100, // Optional: Time between each animation for multiple elements
    });
  });

    
  
  



var body = document.getElementsByTagName("body")[0];
var cards = document.getElementsByClassName("card");

// on page load check if theme is stored in local storage and apply it
if(localStorage.getItem("theme") === "dark-mode") {
    body.className = "dark-mode";
    for(var i = 0; i < cards.length; i++) {
        cards[i].className = "card dark-mode";
    }
} else {
    body.className = "light-mode";
    for(var i = 0; i < cards.length; i++) {
        cards[i].className = "card light-mode";
    }
}

function toggleDarkLight() {
    var currentClass = body.className;
    if (currentClass == "dark-mode") {
        body.className = "light-mode";
        for(var i = 0; i < cards.length; i++) {
            cards[i].className = "card light-mode";
        }
        localStorage.setItem("theme", "light-mode");
    } else {
        body.className = "dark-mode";
        for(var i = 0; i < cards.length; i++) {
            cards[i].className = "card dark-mode";
        }
        localStorage.setItem("theme", "dark-mode");
    }
}

$('.btn').on('click', function() {
    $(this).toggleClass('dark-mode light-mode');
  });
  