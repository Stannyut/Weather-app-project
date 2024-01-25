const apiKey = "3c3e6b496ea035d8d8fdfb0705822f2c"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=&units=metricq=Nakuru"

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(){
    const responce = await fetch(apiUrl + `&appid={apiKey}`);
    var data = await responce.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = math.round(data.main.temp) + " c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
   

}

//searchBtn.addEventListener("click," (=>{
   // checkWeather(searchBox.value);
//}))

checkWeather();