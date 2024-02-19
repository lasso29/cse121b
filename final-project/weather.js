let key = "3b8e541fa9db321676c5f7497b47ab27"
function search () {
    loading.innerHTML = '<img src="./images/Rolling-1s-200px.gif" alt="">'
    let cityName = SearchLocation.value
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
    fetch(endpoint).then((response)=> response.json())
    .then((convertedResponse)=> {
        loading.innerHTML = ''
        let get = convertedResponse
        locate.innerHTML = `${get.name}, ${get.sys.country}`
        description.innerHTML = `${get.weather[0].description}`
        humidity.innerHTML = `${get.main.humidity}%`
        wind.innerHTML = `${get.wind.speed} m/s`
        minimum.innerHTML = `${(get.main.temp_min-273).toFixed(1)}℃`
        maximum.innerHTML = `${(get.main.temp_max-273).toFixed(1)}℃`
        feels.innerHTML = `${(get.main.feels_like-273).toFixed(1)}℃`
        pressure.innerHTML = `${get.main.pressure} hPa`
        displayTemp.innerHTML = `<h1 style='font-size: 100px;'>${(get.main.temp-273).toFixed(0)}℃</h1>`
        displayLocation.innerHTML = `${get.name}, ${get.sys.country}`
        displayDescription.innerHTML = `${get.weather[0].description}`
    })
}
function getLocation () {
    loading.innerHTML = '<img src="./Rolling-1s-200px.gif" alt="">'
    navigator.geolocation.getCurrentPosition((location)=> {
        let latitude = location.coords.latitude
        let longitude = location.coords.longitude
        let endpoint2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
        fetch(endpoint2).then((response)=> response.json())
        .then((convertedResponse)=> {
            loading.innerHTML = ''
            let convert = convertedResponse
            locate.innerHTML = `${convert.name}, ${convert.sys.country}`
            description.innerHTML = `${convert.weather[0].description}`
            humidity.innerHTML = `${convert.main.humidity}%`
            wind.innerHTML = `${convert.wind.speed} m/s`
            minimum.innerHTML = `${(convert.main.temp_min-273).toFixed(1)}℃`
            maximum.innerHTML = `${(convert.main.temp_max-273).toFixed(1)}℃`
            feels.innerHTML = `${(convert.main.feels_like-273).toFixed(1)}℃`
            pressure.innerHTML = `${convert.main.pressure} hPa`
            displayTemp.innerHTML = `<h1 style='font-size: 100px;'>${(convert.main.temp-273).toFixed(0)}℃</h1>`
            displayLocation.innerHTML = `${convert.name}, ${convert.sys.country}`
            displayDescription.innerHTML = `${convert.weather[0].description}`
        })        
    })
}