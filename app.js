const searchButton = document.querySelector(".search-box button")
const inputCity = document.querySelector("#city")

const container = document.querySelector('.container')
const displayBox = document.querySelector('.display-box')
const detailsBox = document.querySelector('.details-box')
const textDescription = document.querySelector('.title h2')
textDescription.textContent = "Enter a location"

const errorDiv = document.querySelector('.errorDisplay')
const imgError = document.querySelector('.errorDisplay img')
const textError = document.querySelector('.errorDisplay .text-error')
const cityValue = document.querySelector('.name-city')


searchButton.addEventListener('click', handleButtonClick);
inputCity.addEventListener('keypress', handleButtonClick);

function handleButtonClick(event) {
    if (event.type === 'click' || (event.key === 'Enter')) {
        const apiKey = '23555783b42eaecce00da138c5e4134b'
        const city = document.querySelector('.search-box input').value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

        const degree = '<sup>&deg;c</sup>';
        const percent = '<sup>&incare;</sup>';
        const windUnit = '<sup>km/h</sup>';
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                if (json.cod == '404') {
                    container.style.height = '28rem';
                    displayBox.classList.remove('active')
                    detailsBox.classList.remove('active')
                    errorDiv.classList.add('active')
                    //image form: https://www.flaticon.com/
                    imgError.src = 'image/not-found.png'
                    textError.innerHTML = json.message
                    cityValue.innerHTML = "\"" + city + "\""
                    textDescription.innerHTML = "Please enter a valid city"
                    return;
                } else if (json.cod == '400') {
                    container.style.height = '28rem';
                    displayBox.classList.remove('active')
                    weatherDetailsBox.classList.remove('active')
                    errorDiv.classList.add('active')
                    textDescription.innerHTML = "Please enter a valid city"
                    //image form: https://www.flaticon.com/
                    imgError.src = 'image/nothing.png'
                    textError.innerHTML = json.message
                } else {
                    container.style.height = '32rem';
                    displayBox.classList.add('active')
                    detailsBox.classList.add('active')
                    errorDiv.classList.remove('active')
                }

                const cityDisplay = document.querySelector('.display-city')

                const bg = document.querySelector('.display-img')
                const img = document.querySelector('.display-img img')
                const temp = document.querySelector('.temp')
                const main = document.querySelector('.main')
                const description = document.querySelector('.description')

                const feelsLike = document.querySelector('#feels-like')
                const humidity = document.querySelector('#humidity')
                const wind = document.querySelector('#wind')
                const tempMin = document.querySelector('#temp-min')
                const tempMax = document.querySelector('#temp-max')

                cityDisplay.innerHTML = city;

                temp.innerHTML = Math.round(json.main.temp) + degree;
                main.innerHTML = json.weather[0].main
                description.innerHTML = json.weather[0].description

                feelsLike.innerHTML = Math.round(json.main.feels_like) + degree;
                humidity.innerHTML = json.main.humidity + percent;
                wind.innerHTML = json.wind.speed + windUnit;
                tempMin.innerHTML = Math.round(json.main.temp_min) + degree
                tempMax.innerHTML = Math.round(json.main.temp_max) + degree

                //image
                if (json.weather[0].main == 'Clouds') {
                    //image form: https://www.flaticon.com/
                    img.src = 'image/weather-img/clouds.png'
                    bg.style.backgroundImage = 'url("https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                } else if (json.weather[0].main == 'Rain') {
                    //image form: https://www.flaticon.com/
                    img.src = 'image/weather-img/rain.png'
                    bg.style.backgroundImage = 'url("https://images.unsplash.com/photo-1562781105-c53c27ff6007?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                } else if (json.weather[0].main == 'Drizzle') {
                    //image form: https://www.flaticon.com/
                    img.src = 'image/weather-img/drizzle.png'
                    bg.style.backgroundImage = 'url("https://images.unsplash.com/photo-1600415684478-744cf4f8f8d7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                } else if (json.weather[0].main == 'Snow') {
                    //image form: https://www.flaticon.com/
                    img.src = 'image/weather-img/snow.png'
                    bg.style.backgroundImage = 'url("https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                } else if (json.weather[0].main == 'Clear') {
                    //image form: https://www.flaticon.com/
                    img.src = 'image/weather-img/clear.png'
                    bg.style.backgroundImage = 'url("https://images.unsplash.com/photo-1523829949029-7e28e82aa713?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                } else if (json.weather[0].main == 'Thunderstorm') {
                    //image form: https://www.flaticon.com/
                    img.src = 'image/weather-img/storm.png'
                    bg.style.backgroundImage = 'url("https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                } else if (json.weather[0].main == 'Mist') {
                    //image form: https://www.flaticon.com/
                    img.src = 'image/weather-img/mist.png'
                    bg.style.backgroundImage = 'url("https://images.unsplash.com/photo-1525891618908-24765267dab7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                } else {
                    //image form: https://www.flaticon.com/
                    img.src = 'image/weather-img/clear.png'
                    bg.style.backgroundImage = 'url("https://images.unsplash.com/photo-1523829949029-7e28e82aa713?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
                }
            })
    }
}