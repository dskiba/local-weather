const API_KEY = '127442bab09800819fda803d2a29d315';


export default function getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.element.city.value;
  const country = e.target.element.country.value;
  const api_call = await fetch ('http://samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}')
    .then(res => res.json())
    .then(res => 
      temperature: null,
      city: null,
      country: null,
      humidity: null,
      description: null,
      icon: null,
      error: "Please make sure your inputs are valid."
    )
};