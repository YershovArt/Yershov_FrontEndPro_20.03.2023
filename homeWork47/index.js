

let url = '';
let root = document.getElementById('root');
let button = document.getElementById('button')
let data = '';


function fetchData() {
    root.innerHTML ='';
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status  === 200) {
                data = JSON.parse(xhr.responseText);
                root.innerHTML = `
                                   <ul>
                                        <li>
                                            <h1 class="title">City: ${data.name}</h1>
                                        </li>
                                        <li>
                                           Temperature ${data.main.temp} celsium
                                        </li>
                                        <li>
                                           Weather description: ${data.weather[0].description}.
                                        </li>
                                        <li>
                                           Humidity: ${data.main.humidity} %.
                                        </li>
                                        <li>
                                           Wind: ${data.wind.speed} meters/second.
                                        </li>
                                        <li>
                                           Wind direction: ${data.wind.deg} deg.
                                        </li>
                                      
                                   </ul>
                                     <div class="img-wrap">
                                         <img src=http://openweathermap.org/img/w/${data.weather[0].icon}.png alt="none" >
                                     </div>
                                    `
                console.log(data);

            } else {
                console.error('Error', xhr.status);
            }
        }
    }

    xhr.send();

}

function insertData() {
    let input = document.querySelector('input');
    let city = input.value.trim().toUpperCase()
    if (city) {
     url = `
http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
    } else {
        url = `
http://api.openweathermap.org/data/2.5/weather?q=DNIPRO&units=metric&APPID=5d066958a60d315387d9492393935c19`;
        alert("Dnipro is default city, please input correct city name in English!")
    }
}

button.addEventListener('click', insertData );
button.addEventListener('click', fetchData );
