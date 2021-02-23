var city = document.getElementById('city');
var weather = document.getElementById('weather');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        function showMessage() {
        var message = document.createElement('h1');
        city.appendChild(message);
        var text = document.createTextNode(apiResult.name);
        message.appendChild(text);
        };
        showMessage();

        function myFunction() {
        var message1 = document.createElement('h1');
        weather.appendChild(message1);
        var text1 = document.createTextNode(apiResult.weather[0].main);
        message1.appendChild(text1);
        };
        myFunction();
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33410,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
