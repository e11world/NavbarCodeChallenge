let myFile = new Request('./js/navigation.json');

fetch(myFile)
    .then(response => response.json())
    .then(data => {
        
        let cities = data.cities;
        // console.log(cities);

        cities.forEach(city => {
            let cityList = document.getElementById('city-list');
            let cityListItem = document.createElement('li');
            const cityListContainer = document.querySelector(".navbar");
            let cityListItemLink = document.createElement('a');
            cityListItemLink.setAttribute('href', '#');
            // cityListItemLink.classList.add('nav-link');
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
                    // console.log('contains active');
                    
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
            });
        })
    })

