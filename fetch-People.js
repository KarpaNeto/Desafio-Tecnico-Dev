const starWarsPeopleList = document.querySelector('.card__list');
fetch('https://swapi.dev/api/people')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        let people = json.results;
        console.log(people);

        for (item of people) {
            console.log(item)
            let listItem = document.createElement('li');
            listItem.innerHTML = `<img class="card__image" src="https://starwars-visualguide.com/assets/img/characters/1.jpg"/>
             <h2>${item.name}</h2>
             <h3>Height: ${item.height}<h3>
             <h3>Mass: ${item.mass}<h3>
             <h3>Gender: ${item.gender}<h3>`

            starWarsPeopleList.appendChild(listItem);
        }
    });
