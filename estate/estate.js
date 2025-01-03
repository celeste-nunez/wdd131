import { properties } from "./properties.js";

function toggleMenu() {
  const menu = document.querySelector(".nav-box");
  menu.classList.toggle("hide");
}

window.addEventListener("resize", function () {
  const nav = document.querySelector(".nav-box");

  if (window.innerWidth >= 950) {
    nav.classList.remove("hide");
  } else {
    nav.classList.add("hide");
  }
});

document.querySelector(".menuButton").addEventListener("click", toggleMenu);

// ----------------------------------------END OF MENU DROP CODE

function renderProperties(properties) {
  return properties
    .map(
      (property) => ` 
  <div class="propertyDisplay">
    <div class="slider-container">
      <div class="slider">
        <div class="slide active">
          <img src="${property.propertyImg1}" alt="Image 1">
        </div>
        <div class="slide">
          <img src="${property.propertyImg2}" alt="Image 2">
        </div>
        <div class="slide">
          <img src="${property.propertyImg3}" alt="Image 3">
        </div>
      </div>
    
      <a class="prev" tabindex="0" aria-label="Previous Slide">&#10094;</a>
      <a class="next" tabindex="0" aria-label="Next Slide">&#10095;</a>
    </div>
    <div class="propertyDescription">
      <p>Property Type: ${property.propertyType}</p>
      <p>Price: ${property.propertyPrice}</p>
      <p>Beds: ${property.beds}</p>
      <p>Baths: ${property.baths}</p>
      <p>Garage: ${property.garage}</p>
      <p>Address: ${property.address.join(", ")}</p>
      <p>Year Built: ${property.yearBuilt}</p>
    </div>
  </div>
  `
    )
    .join("");
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.prev, .next').forEach(arrow => {
    arrow.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        arrow.click(); 
      }
    });
  });
});

function initSliders() {
  document.querySelectorAll(".slider-container").forEach((sliderContainer, index) => {
    let currentSlide = 0;
    const slides = sliderContainer.querySelectorAll(".slide");

    function showSlide(index) {
      if (index >= slides.length) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = slides.length - 1;
      } else {
        currentSlide = index;
      }

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      slides[currentSlide].classList.add("active");
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    sliderContainer.querySelector(".next").addEventListener("click", nextSlide);
    sliderContainer.querySelector(".prev").addEventListener("click", prevSlide);

    showSlide(currentSlide);
  });
}

function filterProperties() {
  const propertyType = document.getElementById("propertyTypeSelector").value;
  const propertyPrice = document.getElementById("propertyPriceSelector").value;
  const propertyBeds = document.getElementById("propertyBedsSelector").value;
  const propertyBaths = document.getElementById("propertyBathsSelector").value;
  const propertyLocation = document.getElementById("propertyLocationSelector").value;


  let filteredProperties = properties;

  if (propertyType !== "option0") {
    filteredProperties = filteredProperties.filter((property) => property.propertyType === propertyType);
  }

  if (propertyPrice !== "option0") {
    const [minPrice, maxPrice] = propertyPrice.split("-").map(Number);
    filteredProperties = filteredProperties.filter(
      (property) => property.propertyPrice >= minPrice && property.propertyPrice <= maxPrice
    );
  }

  if (propertyBeds !== "option0") {
    filteredProperties = filteredProperties.filter((property) => property.beds >= propertyBeds);
  }

  if (propertyBaths !== "option0") {
    filteredProperties = filteredProperties.filter((property) => property.baths >= propertyBaths);
  }

  if (propertyLocation !== "option0") {
    filteredProperties = filteredProperties.filter((property) =>
      property.address.some((part) =>
        part.toLowerCase().includes(propertyLocation.toLowerCase())
      )
    );
  }

  const allPropertiesContainer = document.querySelector(".allProperties");

  if (allPropertiesContainer) {
    allPropertiesContainer.innerHTML = renderProperties(filteredProperties);
    initSliders();
  } else {
    console.error("Element with class 'allProperties' not found.");
  }

}

function init() {
  document.querySelector(".allProperties").innerHTML = renderProperties(properties);
  initSliders();

  document.getElementById("propertyTypeSelector").addEventListener("change", filterProperties);
  document.getElementById("propertyPriceSelector").addEventListener("change", filterProperties);
  document.getElementById("propertyBedsSelector").addEventListener("change", filterProperties);
  document.getElementById("propertyBathsSelector").addEventListener("change", filterProperties);
  document.getElementById("propertyLocationSelector").addEventListener("change", filterProperties);
}

init();
