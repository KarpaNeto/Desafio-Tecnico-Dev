var starWarsStarshipsList = document.querySelector('.card');
fetch('https://swapi.dev/api/starships/')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        let starships = json.results;

        for (item of starships) {

            let listItem = document.createElement('li');
            listItem.innerHTML = 
                `<img class="card-image" src="https://starwars-visualguide.com/assets/img/starships/10.jpg">
                <h2>${item.name}</h2>
                <h3>Model: ${item.model}</h3>`
            starWarsStarshipsList.appendChild(listItem);
        }
    });
  