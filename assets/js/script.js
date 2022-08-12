// mars weather | insight weather api
// dom | elements


// api
const apiKey = 'DEMO_KEY';
// const apiURL = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`

// pause: InSight API down

// logic | get data
var getWeather = function() {
    returnfetch(apiURL).then(res => res.json())
    .then(data => {
        const {
            sol_keys, validity_checks, ...solData
        } = data
        const temp = Object.entries(solData).map(([sol, data]) => {
            return {
                sol: sol,
                date: new Date(data.First_UTC),
                maxTemp: data.AT.mx,
                minTemp: data.AT.mn,
                windSpeed: data.HWS.av,
                windDirection: data.WD.most_common.compass_point,
            }
        })
        console.log(temp);
    })
};

getWeather();