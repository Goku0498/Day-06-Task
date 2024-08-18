var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
  var res = JSON.parse(req.response);


  //Get all countries from Asia region using filter method
  var asian_Countries = res.filter((country) => country.region === "Asia");
  console.log("Output for Getting all countries in Asia region\n");
  let temp_asian_countries=[];
  for(let i=0; i<asian_Countries.length; i++){
    temp_asian_countries.push(asian_Countries[i].name.common);
  }
  let temp_sort_asian = temp_asian_countries.sort()
  console.log(temp_sort_asian)



  //Get all countries with a population of less than 2 lakhs
  var population_less_than_200k = res.filter(
    (country) => country.population < 200000
  );
  console.log("\nOutput for Contries that have Population less than 2,00,000");
  let temp_popu_less_200k = []
  
  for(let i=0; i<population_less_than_200k.length; i++){
    temp_popu_less_200k.push(population_less_than_200k[i].name.common);
  }
  let temp_sort_popu = temp_popu_less_200k.sort()
  console.log(temp_sort_popu)



  //Print details (name, capital, flag)
  console.log(`
Output for Printing Country Name, Capital and flag
    `)
  res.forEach((country) => {
    console.log(
      `Capital of "${country.name.common}" is "${country.capital}" and it's Flag is "${country.flag}"`
    );
  });



  //Print the total population
  var totalPopulation = res.reduce(
    (acc, cv) => acc + cv.population,
    0
  );
  console.log(`
The Total Population of all countries "${totalPopulation}"
  `);

  //Print the country that uses US dollars as currency
  console.log(`
Output for Countries that uses USD as Currency`)
  var usDollarCountries = res.filter(
    (country) =>
      country.currencies && Object.keys(country.currencies).includes("USD")
  );
  let temp_usd = []
  
  for(let i=0; i<usDollarCountries.length; i++){
    temp_usd.push(usDollarCountries[i].name.common);
  }
  let temp_sort_usd = temp_usd.sort()
  console.log(temp_sort_usd)
};
