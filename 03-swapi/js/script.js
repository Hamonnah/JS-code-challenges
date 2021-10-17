
const btnFetch = document.getElementById('fetch');
const btnSort = document.getElementById('sort');
    
let planets =[];
/* var planets;
    doStuff = function(param) {
      // param holds address, when you call it from `$.each()`
      //param.sort();
      console.log(param);
    }; */

const fetchData = () => {
$(document).ready(function() {
    $.getJSON('https://swapi.dev/api/planets/', function(data) {
        let swapiData = '';
        let obj = data.results;

        $.each(obj, function(key, value) {
            swapiData += `<li class="list-group-item">${value.name}</li>`;
            planets += value.name;
            //doStuff(planets);
        });
        $('#swapi-list').append(swapiData);
    }); 
});
    btnFetch.classList.add('hide');
    btnSort.classList.add('show');
};

const sort = () => {
   
    return [].slice.call(planets).sort(function (a,b) {
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
};

const sortList = () => {
    sort(planets);
    console.log(planets);
};


btnFetch.addEventListener('click', fetchData);
btnSort.addEventListener('click', sortList);


/* const btnFetch = document.getElementById('fetch');
    fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => {

            
            let planetName = document.createElement('p');

            /* planetName.innerText = `Planet name: ${data}`; */
            //planetName.innerText = `Planet name: ${data.results}`;
/*             planetName.innerText = JSON.stringify(data.results, ['name'], 2);
            
           
            document.body.appendChild(planetName);
            console.log(data.results);
            console.log(data.results.length);
            console.log(Object.values(data.results));

        })
}

btnFetch.addEventListener('click', fetchData); */
 