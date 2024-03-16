
const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Website Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = "UI/UX Designer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Photographer";
            }, 8000); //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);

let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  const scrolledDown = prevScrollPos < currentScrollPos;

  if (scrolledDown) {
    // Scrolling down, hide the navbar with fade-out animation
    navbar.style.transform = `translateY(-${navbar.offsetHeight}px)`;
    navbar.style.opacity = 0;
  } else {
    // Scrolling up
    if (currentScrollPos === 0) {
      // Reached the top of the page, show the navbar with fade-in animation
      navbar.style.transform = "translateY(0)";
      navbar.style.opacity = 1;
    }
  }

  prevScrollPos = currentScrollPos;
};

// window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
// /* customize formbutton below*/
// formbutton("create", {
//   action: "https://formspree.io/f/meqwejjz",
//   title: "How can I help?",
//   fields: [
//     { 
//       type: "email", 
//       label: "Email:", 
//       name: "email",
//       required: true,
//       placeholder: "your@email.com"
//     },
//     {
//       type: "textarea",
//       label: "Message:",
//       name: "message",
//       placeholder: "What's on your mind?",
//     },
//     { type: "submit" }      
//   ],
//   styles: {
//     title: {
//       backgroundColor: "orange",
//     },
//     button: {
//       backgroundColor: "violet",
//       animation: "heartbeat 2s infinite, backgroundChange 2s infinite",
//       fontFamily: "'Poppins', sans-serif", /* Apply Poppins font */
//     }
//   }
// });


// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Get the scroll sign element
  var scrollSign = document.getElementById("scroll-sign");

  // Function to hide the scroll sign
  function hideScrollSign() {
    scrollSign.classList.add("hidden");
  }

  // Add a scroll event listener to hide the scroll sign
  window.addEventListener("scroll", hideScrollSign);
});