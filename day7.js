
//Solving problems using array functions on the rest countries data;

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function() {
    var res=JSON.parse(request.response);
    console.log(res);

var asian = res.filter((element)=>element.region == "Asia");
console.log(asian);
var population = res.filter((element)=>element.population<200000);
console.log(population);
res.forEach((ele)=>console.log(`Country Name:${ele.name} ; Capital:${ele.capital} ; Flag:${ele.flag}`));
var tpop = res.reduce((acc,cv)=>acc+cv.population,0);
console.log("Total country population is : " + tpop);
var currency = res.filter((ele)=>ele.currencies == 'USD').map((ele)=>ele.name);
console.log(currency);

}