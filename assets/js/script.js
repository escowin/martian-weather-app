// mars weather | insight weather api
// dom | elements


// api
const apiKey = 'DEMO_KEY';
const apiURL = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`

// logic | get data
var getWeather = function() {
    fetch(apiURL).then(res => res.json())
    .then(data => {
        const {
            sol_keys, validity_checks, ...solData
        } = data
        console.log(data);
    })
};

getWeather();