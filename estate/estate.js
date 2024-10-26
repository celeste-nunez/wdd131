import { properties } from './properties.js';

function toggleMenu() {
    const menu = document.querySelector(".nav-box");
    menu.classList.toggle("hide")
}

window.addEventListener("resize", function() {
    const nav = document.querySelector('.nav-box');
    
    if (window.innerWidth >= 950) {
      nav.classList.remove('hide');
    } else {
      nav.classList.add('hide');
    }
});

document.querySelector('.menuButton').addEventListener('click', toggleMenu);

// ----------------------------------------END OF MENU DROP CODE

document.querySelectorAll('.slider-container').forEach((sliderContainer, index) => {
  let currentSlide = 0;
  const slides = sliderContainer.querySelectorAll('.slide');

  function showSlide(index) {
    if (index >= slides.length) {
      currentSlide = 0;
    } 
    else if (index < 0) {
      currentSlide = slides.length -1;
    } 
    else {
      currentSlide = index;
    }
    
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    slides[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide -1);
  }

  sliderContainer.querySelector('.next').addEventListener('click', nextSlide);
  sliderContainer.querySelector('.prev').addEventListener('click', prevSlide);

  showSlide(currentSlide);
});

// ----------------------------------------END OF SLIDE SHOWS

console.log(properties);

function renderProperties(properties) {
  return properties.map(property => ` 
  <div class="propertyDisplay">
    <div class="slider-container">
      <div class="slider">
        <div class="slide active">
          <img src="${properties.propertyImg1}" alt="Image 1">
        </div>
        <div class="slide">
          <img src="${properties.propertyImg2}" alt="Image 2">
        </div>
        <div class="slide">
          <img src="${properties.propertyImg3}" alt="Image 3">
        </div>
      </div>
    
      <a class="prev" onclick="prevSlide()">&#10094;</a>
      <a class="next" onclick="nextSlide()">&#10095;</a>
    </div>
    <p>Property Type: ${properties.propertyType}</p>
    <p>Price: ${properties.propertyPrice}</p>
    <p>Beds: ${properties.beds}</p>
    <p>Baths: ${properties.baths}</p>
    <p>Garage: ${properties.garage}</p>
    <p>Address: ${properties.address}</p>
    <p>Year Built: ${properties.yearBuilt}</p>
  </div>
  `).join('');
}

function filter(properties) {
  const propertyTypeSelector = document.querySelector('#propertyTypeSelector');
  const propertyPriceSelector =  document.querySelector('#propertyPriceSelector');
  const propertyBedSelector = document.querySelector('#propertyBedsSelector');
  const propertyBathSelector =  document.querySelector('#propertyBathSelector');
  const propertyCitySelector = document.querySelector('#propertyLocationSelector');
  
  propertyTypeSelector.addEventListener('change', propertyFilter);
  propertyPriceSelector.addEventListener('change', propertyFilter);
  propertyBedSelector.addEventListener('change', propertyFilter);
  propertyBathSelector.addEventListener('change', propertyFilter);
  propertyCitySelector.addEventListener('change', propertyFilter);

  function propertyFilter() {
    const selectedType = propertyTypeSelector.value.toLowerCase();
    const selectedPrice = propertyPriceSelector.value;
    const selectedBed = propertyBedSelector.value;
    const selectedBath = propertyBathSelector.value;
    const selectedCity = propertyCitySelector.value.toLowerCase();
  }

  const filteredProperties = properties.filter(property => {
    return (
      (selectedType === '' || property.propertyType.toLowerCase().includes(selectedType)) &&
      (selectedPrice === '' || property.propertyPrice <= selectedPrice) &&
      (selectedBed === '' || property.propertyBed == selectedBed) &&
      (selectedBath === '' || property.propertyBath == selectedBath) &&
      (selectedCity === '' || property.propertyCity.toLowerCase().includes(selectedCity))
    );
  });
  document.querySelector('.allProperties').innerHTML = renderProperties(filteredProperties);
}


function init() {
  document.querySelector('.allProperties').innerHTML = renderProperties(properties);
  filter(properties);
}

init();
 