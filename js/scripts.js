const myFile = new Request('./js/navigation.json');
const cityList = document.getElementById('city-list');
const cityListContainer = document.querySelector(".navbar");

const timeZonesPerCity = {
    'cupertino': moment.tz("America/Los_Angeles"),
    'new-york-city': moment.tz("America/New_York"),
    'london': moment.tz("Europe/London"),
    'amsterdam': moment.tz("Europe/Amsterdam"),
    'tokyo': moment.tz("Asia/Tokyo"),
    'hong-kong': moment.tz("Asia/Hong_Kong"),
    'sydney': moment.tz("Australia/Sydney")
}

function handleSetActive(e) {
    e.preventDefault();
    const active = document.querySelector('.active');
    if (active) {      
      // no need for method chaining below since it's a one time thing
      active.classList.remove('active');
      active.removeAttribute('class');
    }
    // e.target.className = "active";
    e.target.classList.add('active');
  
    cityListContainer.style.setProperty(
      "--underline-width",
      `${e.target.offsetWidth}px`
    );
    cityListContainer.style.setProperty(
        "--underline-offset-x",
        `${e.target.offsetLeft}px`
    );
}

function handleThisCity(city) {
    const cityListItem = document.createElement('li');
    const cityTime = document.createElement('span');
    const cityListItemLink = document.createElement('a');
    cityListItem.appendChild(cityTime);
    const tzFunction = timeZonesPerCity[city.section]
    cityTime.innerHTML = tzFunction.format('LT');
    cityListItemLink.setAttribute('href', '#');
    cityListItem.appendChild(cityListItemLink);
    cityListItemLink.innerHTML = city.label;
    cityList.appendChild(cityListItem);
    cityListItem.setAttribute('title', city.label);
    cityListItem.setAttribute('data-section', city.section);
    cityListItemLink.classList.add('nav-link');
    
    cityListItemLink.addEventListener("click", handleSetActive);
}

function start() {
    fetch(myFile)
    .then(response => response.json())
    .then((data) => {
        const cities = data.cities;
        cities.forEach((city) => {
            handleThisCity(city)
        });
    });
}

start()
