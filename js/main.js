// DOM Elements
const themeToggle = document.getElementById("theme-toggle")
const menuToggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav")
const header = document.querySelector(".header")
const backToTop = document.getElementById("back-to-top")
const currentYear = document.getElementById("current-year")
const tabButtons = document.querySelectorAll(".tab-btn")
const tabContents = document.querySelectorAll(".tab-content")
const accordionHeaders = document.querySelectorAll(".accordion-header")

// Set current year in footer
if (currentYear) {
  currentYear.textContent = new Date().getFullYear()
}

// Theme Toggle
function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
}

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme")
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

if (savedTheme) {
  setTheme(savedTheme)
} else if (prefersDark) {
  setTheme("dark")
}

// Theme toggle event listener
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "light" : "dark")
  })
}

// Mobile Menu Toggle
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active")
    nav.classList.toggle("open")
  })
}

// Header scroll effect
function handleScroll() {
  if (window.scrollY > 10) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
}

window.addEventListener("scroll", handleScroll)

// Back to top button
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}

// Tabs functionality
if (tabButtons.length > 0 && tabContents.length > 0) {
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab")

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      button.classList.add("active")
      document.getElementById(tabId).classList.add("active")
    })
  })
}

// Accordion functionality
if (accordionHeaders.length > 0) {
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement
      accordionItem.classList.toggle("active")
    })
  })
}

// Carousel functionality
const carouselItems = document.querySelectorAll(".carousel-item")
const carouselPrev = document.querySelector(".carousel-control.prev")
const carouselNext = document.querySelector(".carousel-control.next")
const carouselIndicators = document.querySelectorAll(".carousel-indicators .indicator")

if (carouselItems.length > 0) {
  let currentSlide = 0

  function showSlide(index) {
    // Hide all slides
    carouselItems.forEach((item) => item.classList.remove("active"))
    carouselIndicators.forEach((indicator) => indicator.classList.remove("active"))

    // Show the selected slide
    carouselItems[index].classList.add("active")
    carouselIndicators[index].classList.add("active")
    currentSlide = index
  }

  function nextSlide() {
    const newIndex = (currentSlide + 1) % carouselItems.length
    showSlide(newIndex)
  }

  function prevSlide() {
    const newIndex = (currentSlide - 1 + carouselItems.length) % carouselItems.length
    showSlide(newIndex)
  }

  // Event listeners for carousel controls
  if (carouselNext) {
    carouselNext.addEventListener("click", nextSlide)
  }

  if (carouselPrev) {
    carouselPrev.addEventListener("click", prevSlide)
  }

  // Event listeners for carousel indicators
  carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      showSlide(index)
    })
  })

  // Auto-advance slides every 5 seconds
  setInterval(nextSlide, 5000)
}

// Initialize skill bars animation
const skillBars = document.querySelectorAll(".skill-progress")

function animateSkillBars() {
  skillBars.forEach((bar) => {
    const width = bar.style.width
    bar.style.width = "0"

    setTimeout(() => {
      bar.style.width = width
    }, 100)
  })
}

// Animate skill bars when they come into view
if (skillBars.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkillBars()
        observer.unobserve(entry.target)
      }
    })
  })

  observer.observe(document.querySelector(".skills-section"))
}

