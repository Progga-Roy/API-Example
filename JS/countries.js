const loadCountries =()=>{
fetch('https://restcountries.com/v3.1/all')
.then( res=> res.json())
.then( data=> displayCountries(data))

}

const displayCountries =(country)=>{
    const divContainer = document.getElementById('all-countries');
        country.forEach(countries => {
            // console.log(countries)
            const div = document.createElement('div');
            div.classList.add('div')
              div.innerHTML = `
               <h3>Name :${countries.name.common}</h3>
               <img src="${countries.flags.png}" alt="">
              <h3>Capital: ${countries.capital ? countries.capital[0] : 'No Capital'}</h3> 
              <p>Population : ${countries.population} </p>
              `
              divContainer.appendChild(div)
        });
       

}

loadCountries()