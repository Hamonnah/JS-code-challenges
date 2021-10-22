
const btnFetch = document.getElementById('fetch');
const btnSort = document.getElementById('sort');
planets = [];
    
const fetchData = () => {

    Promise.all([
        fetch('https://swapi.dev/api/planets/'),
        fetch('https://swapi.dev/api/planets/?page=2'),
        fetch('https://swapi.dev/api/planets/?page=3'),
        fetch('https://swapi.dev/api/planets/?page=4'),
        fetch('https://swapi.dev/api/planets/?page=5'),
        fetch('https://swapi.dev/api/planets/?page=6')
      ])
      .then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {

        let planetsPageOne = data[0].results;
        let planetsPageTwo = data[1].results;
        let planetsPageThree = data[2].results;
        let planetsPageFour = data[3].results;
        let planetsPageFive = data[4].results;
        let planetsPageSix = data[5].results;
        let allPlanets = planetsPageOne.concat(planetsPageTwo, planetsPageThree, planetsPageFour, planetsPageFive, planetsPageSix);

        for(let planet of allPlanets) {

            let item = document.createElement('li');
            item.innerText = planet.name
            item.classList.add('list-group-item')
            document.getElementById('swapi-list').appendChild(item);    
        }    
        planets = allPlanets;

        btnFetch.classList.add('hide');
        btnSort.classList.add('show');    

    }).catch(function (error) {
        console.log(error);
    });
};

const sortList = () => {
    planets.sort(function(a,b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1
        }
        return 0;
    })
    document.getElementById('swapi-list').innerHTML = '';
  
    let allPlanets = planets;
    for(let planet of allPlanets) {

        let item = document.createElement('li');
        item.innerText = planet.name
        item.classList.add('list-group-item')
        document.getElementById('swapi-list').appendChild(item);    
    }    
    planets = allPlanets;
    btnSort.classList.toggle('show'); 
};
 
btnFetch.addEventListener('click', fetchData);
btnSort.addEventListener('click', sortList);
