const city = prompt('Enter your city. For example: "KYIV"')

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
)

  .then((res) => res.json())
  .then((data) => {
  console.log(data)

  let indexOfTemp = data.main.temp;
  let visibleIndexOfTemp = document.querySelector('.temp');
  visibleIndexOfTemp.innerHTML = indexOfTemp;

  let indexOfDescription = data.weather[0].description;
  let visibleIndexOfDescription = document.querySelector('.description');
  visibleIndexOfDescription.innerHTML = indexOfDescription;

  let indexOfPressure = data.main.pressure;
  let visibleIndexOfPressure = document.querySelector('.pressure');
  visibleIndexOfPressure.innerHTML = indexOfPressure;

  let indexOfHumidity = data.main.humidity;
  let visibleIndexOfHumidity = document.querySelector('.humidity');
  visibleIndexOfHumidity.innerHTML = indexOfHumidity;

  let indexOfWindSpeed = data.wind.speed;
  let visibleIndexOfWindSpeed = document.querySelector('.speed');
  visibleIndexOfWindSpeed.innerHTML = indexOfWindSpeed;

  let indexOfDegree = data.wind.deg;
  let visibleIndexOfDegree = document.querySelector('.deg');
  visibleIndexOfDegree.innerHTML = indexOfDegree;

  let codeOfIcon = data.weather[0].icon;
  let iconUrl = `http://openweathermap.org/img/w/${codeOfIcon}.png`;
  let iconInHtml = document.querySelector('.icon>img');
  iconInHtml.setAttribute('src', `${iconUrl}`);
  });
  
  let showCity = document.querySelector('.city');
  showCity.innerHTML = city;