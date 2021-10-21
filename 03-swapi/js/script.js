
const btnFetch = document.getElementById('fetch');
const btnSort = document.getElementById('sort');
    
const fetchData = () => {

    fetch('https://swapi.dev/api/planets/')
    .then(resp=>resp.json())
    .then(data=>{
        let allPlanets = data.results;
        for(let planet of allPlanets) {

            let item = document.createElement('li');
            item.innerText = planet.name
            item.classList.add('list-group-item')
            document.getElementById('swapi-list').appendChild(item);   
          
        }    
        planets = allPlanets;
        btnFetch.classList.add('hide');
        btnSort.classList.add('show');     
    })
};

console.log(planets);

/* const sort = () => {
   
    return [].slice.call(allPlanets).sort(function (a,b) {
       let nameA = a.toUpperCase();
       let nameB = b.toUpperCase();
       if (nameA < nameB) {
           return -1;
       }
       if (nameA > nameB) {
           return 1
       }
       return 0;
   });  
};*/

const sortList = (allPlanets) => {

    console.log(allPlanets);
};
 

btnFetch.addEventListener('click', fetchData);
btnSort.addEventListener('click', sortList);
