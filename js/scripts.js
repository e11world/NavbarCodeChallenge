let myFile = new Request('./js/navigation.json');

fetch(myFile)
    .then(response => response.json())
    .then(data => {
        
        let cities = data.cities;
        // console.log(cities);

        cities.forEach(city => {
            let cityList = document.getElementById('city-list');
            let cityListItem = document.createElement('li');
            let cityListItemLink = document.createElement('a');
            cityListItemLink.setAttribute('href', '#');
            cityListItem.appendChild(cityListItemLink);
            cityListItemLink.innerHTML = city.label;
            cityList.appendChild(cityListItem);
            cityListItem.setAttribute('title', city.label);
            cityListItem.setAttribute('data-section', city.section);
            // console.log(city.label);
            
            cityListItemLink.addEventListener("click", (e) => {
                e.preventDefault();
                let active = document.querySelector('.active');
                if (active) {
                    console.log('contains active');
                    active.classList.remove('active');
                }
                e.target.className = "active";
            });
        })
    })
    // .catch(error => console.log(error));
