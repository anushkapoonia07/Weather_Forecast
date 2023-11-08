//Complete the Weather API Backend part using openweathermap api
// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.

 const day=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"] 
 const month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5b9441056bba2ffb0d1da1631c7fc001")
.then((data)=>data.json())
.then((parsedData)=>{
    const NameOfLocation = parsedData.name;
    document.getElementsByClassName('location')[0].textContent = NameOfLocation;
    const DateUnix = parsedData.dt;
    const date = new Date(DateUnix * 1000);
    document.getElementsByClassName('time')[0].textContent =
      day[date.getDay()-1 ]+
      ' ' +
      date.getDate()+
      ' ' +
      month[date.getMonth()-1]+
      ' ' +
      date.getFullYear();
    const weather = parsedData.weather[0].main;
    document.getElementsByClassName('type')[0].textContent = weather;
    const avgTemp = parsedData.main.temp;
    // console.log(avgTemp)
    document.getElementsByClassName('temperature')[0].textContent =Math.floor(avgTemp - 273) + '\xBA' + ' ' + 'c';
    const maxxTemp = parsedData.main.temp_max;
    const minnTemp = parsedData.main.temp_min;
    document.getElementsByClassName('celsius')[0].textContent =
      Math.floor(maxxTemp - 273) +
      '\xBA' +
      ' ' +
      'C' +
      ' ' +
      '/' +
      ' ' +
      Math.floor(minnTemp - 273) +
      '\xBA' +
      ' ' +
      'C';
  });


